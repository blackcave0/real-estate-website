"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useLocalStorage } from "../hooks/use-local-storage";
import { Button } from "@/components/ui/button";
import LogoutButton from "../components/Auth/LogoutButton";
import ImageUploader from "../components/ImageUploader";

export default function Profile() {
  const router = useRouter();
  const { user, getCurrentUser, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [setItem, getItem] = useLocalStorage();

  useEffect(() => {
    // const token = getItem('token');
    /* if (!token) {
      router.push("/login");
      return;
    } */

    const fetchUser = async () => {
      try {
        await getCurrentUser();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Profile</h1>
        <p className="text-gray-600 mb-4">
          Welcome, {user?.name || "User"}!
        </p>
        <LogoutButton />
      </div>

      <div className="flex">
        <ImageUploader />
      </div>
    </div>
  );
}
