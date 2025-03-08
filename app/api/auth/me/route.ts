import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/app/lib/jwt";
import User from "@/app/models/User";
import connectToDatabase from '@/app/db/mongodb';

export async function GET(request: Request) {
  try {
    await connectToDatabase();
    const authHeader = request.headers.get("Authorization");
    // console.log('Auth header:', authHeader); // Debug auth header

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log('Invalid auth header format:', authHeader); // Debug log
      return NextResponse.json(
        { error: "Invalid Authorization header format" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = await verifyJwtToken(token) as { id: string } | null;
    // console.log('Decoded token payload:', decoded); // Debug decoded token

    if (!decoded || !decoded.id) {
      return NextResponse.json(
        { error: "Invalid token format" },
        { status: 401 }
      );
    }

    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });

  } catch (error) {
    console.error('Detailed error in /api/auth/me:', error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}