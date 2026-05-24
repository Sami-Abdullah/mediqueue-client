'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'
const SignUppage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const onSubmit = async (data) => {
    console.log(data.photo);
    const { data: formData, error } = await authClient.signUp.email({
      email: data.email,
      name: data.name,
      password: data.password,
      image:data.photo
    })
    if (!error) {
      toast.success('Signed up')
      router.push('/signin')
    } else {
      toast.error(error.message)
    }

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Valo Manush ra registration kore
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" {...register('name',{ required: true })} />
                {errors.name && <span className='text-error'>Name is required</span>}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" {...register('email',{ required: true })} />
                {errors.email && <span className='text-error'>Email is required</span>}
                <label className="label">Photo</label>
                <input type="text" name='photo' className="input" placeholder="Photo" {...register('photo',{ required: true })} />
                {errors.photo && <span className='text-error'>Photo is required</span>}
                <label className="label">Password</label>
                
                <input type="text" name='password' className="input" placeholder="Password" {...register('password',{ required: true })} />
                {errors.password && <span className='text-error'>Password is required</span>}
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUppage;