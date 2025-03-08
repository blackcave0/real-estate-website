import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = (global as any).mongoose;
if(!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) 
    return cached.conn;

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    if (MONGODB_URI) {
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose;
      });
    } else {
      throw new Error('MONGODB_URI is not defined');
    }
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default connectToDatabase;