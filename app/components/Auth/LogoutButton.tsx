"use client"
import React from 'react';
import { useAuth } from '@/app/context/AuthContext';
const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      onClick={logout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;