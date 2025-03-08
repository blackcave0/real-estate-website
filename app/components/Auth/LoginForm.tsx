'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
// import axios from 'axios';
import { useAuth } from '@/app/context/AuthContext';

const LoginForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const { login } = useAuth();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      const response = login(values.email, values.password);
      console.log('response for login form : ', response);
      
      // router.push('/profile');
        // router.push('/profile');
    } catch (err: any) {
      setError('An unexpected error occurred.');
      console.error(err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </Form>
  );
};

export default LoginForm;
