'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const router = useRouter()

  const onSubmit = async (data) => {
    const { data: formData, error } = await authClient.signUp.email({
      email: data.email,
      name: data.name,
      password: data.password,
      image: data.photo
    })
    if (!error) {
      toast.success('Signed up', { position: "bottom-center" })
      router.push('/signin')
    } else {
      toast.error(error.message, { position: "bottom-center" })
    }
  }

  const fields = [
    { label: 'Full Name',   name: 'name',     type: 'text',     placeholder: 'Your name' },
    { label: 'Email',       name: 'email',    type: 'email',    placeholder: 'you@email.com' },
    { label: 'Photo URL',   name: 'photo',    type: 'text',     placeholder: 'https://...' },
    { label: 'Password',    name: 'password', type: 'password', placeholder: '••••••••' },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16
                    bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Create Account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Join MediQueue today
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl shadow-xl p-8
                        bg-white dark:bg-gray-800
                        border border-gray-200 dark:border-gray-700">

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            {fields.map(({ label, name, type, placeholder }) => (
              <div key={name} className="flex flex-col gap-1">

                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {label}
                </label>

                <input
                  type={type}
                  placeholder={placeholder}
                  className={`w-full px-4 py-2.5 rounded-lg outline-none transition
                    bg-gray-100 dark:bg-gray-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400 dark:placeholder-gray-500
                    border ${errors[name]
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'
                    }`}
                  {...register(name, { required: true })}
                />

                {errors[name] && (
                  <span className="text-red-500 text-xs">{label} is required</span>
                )}

              </div>
            ))}

            <button className="btn bg-primary-dark w-full mt-2 text-white">
              Create Account
            </button>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <Link href="/signin" className="text-blue-500 hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  )
}

export default SignUpPage