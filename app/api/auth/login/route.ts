import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/app/db/mongodb";
import User from "@/app/models/User";
import { createToken } from "@/app/lib/jwt";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: Request) {
  // const [setItem] = useLocalStorage();
  try {
    // Connect to database
    await connectToDatabase();

    // Get credentials from request body
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 },
      );
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }

    // Create JWT token
    const token = createToken({ id: user._id.toString() }); // Ensure id is a string
    console.log("Generated token:", token); // Debug log

    // Set HTTP-only cookie
    // const cookieStore = await cookies();
    /* cookieStore.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400 // 1 day
    });
 */
    // Return user data (excluding password)
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role || "user",
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return NextResponse.json({
      message: "Login successful",
      user: userData,
      token: token,
      debug: { userId: user._id.toString() }, // Debug info
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
