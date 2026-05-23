'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const SignInpage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { data: formData, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password
      });
      
      if (!error) {
        toast.success('Logged In Successfully!');
        router.push('/');
      } else {
        toast.error(error.message || 'Login failed');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className=" space-y-6">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>

        <div className="card bg-base-100 px-10 py-5 w-xl shrink-0 shadow-2xl mx-auto">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className='grid gap-1'>
              <label className="label">Email</label>
              <input 
                type="email" 
                className="input w-full" 
                placeholder="Email" 
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

              <label className="label">Password</label>
              <input 
                type="password" 
                className="input w-full" 
                placeholder="Password" 
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

              <button type="submit" className="btn bg-[#13315c] mt-4 text-white">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInpage;