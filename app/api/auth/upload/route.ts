import cloudinary from '@/app/lib/cloudiary';
import { NextResponse } from 'next/server';
import { CloudinaryStorage, Options } from 'multer-storage-cloudinary';
import multer from 'multer';
import User from '@/app/models/User';
import connectToDatabase from '@/app/db/mongodb';
import { verifyJwtToken } from '@/app/lib/jwt';
// import { axiosInstance } from '@/app/context/AuthContext';

interface ExtendedParams {
  folder: string;
  allowedFormats: string[];
  transformation: { width: number; height: number; crop: string }[];
}

const cloudinaryParams = {
  folder: 'real-estate-website/properties',
  allowedFormats: ['jpg', 'png'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const files = formData.getAll('file');

  // }

  if (!files || files.length === 0) {
    return NextResponse.json({ error: 'No files found' }, { status: 400 });
  }

  if (files.length > 5) {
    return NextResponse.json({ error: 'Maximum 5 files allowed' }, { status: 400 });
  }

  try {
    await connectToDatabase();

    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Invalid Authorization header format' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const decoded = (await verifyJwtToken(token)) as { id: string } | null;

    if (!decoded || !decoded.id) {
      return NextResponse.json({ error: 'Invalid token format' }, { status: 401 });
    }

    const uploadPromises = files.map(async (file: any) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      return new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: 'auto',
              folder: cloudinaryParams.folder,
              allowed_formats: cloudinaryParams.allowedFormats,
              transformation: cloudinaryParams.transformation,
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result as { secure_url: string; public_id: string });
            },
          )
          .end(buffer);
      });
    });

    const results = await Promise.all(uploadPromises);
    results.forEach((result) => console.log(result.secure_url));

    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const imageUrls = results.map((result) => result.secure_url);
    user.images = [...user.images, ...imageUrls];
    await user.save();

    return NextResponse.json({
      images: results.map((result) => ({
        url: result.secure_url,
        publicId: result.public_id,
      })),
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Upload failed';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
