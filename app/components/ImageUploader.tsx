'use client';
import { useState } from 'react';

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e:any) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];

      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/auth/upload', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      setImage(data.url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
      />
      {image && (
        <div>
          <img
            src={image}
            alt="Uploaded"
            className="mt-4 max-w-[300px] rounded"
          />
          <p className="mt-2 text-sm text-green-600">Upload successful!</p>
        </div>
      )}
      {uploading && <p>Uploading...</p>}
    </div>
  );
}