'use client';

import LoginForm from '@/app/components/Auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
