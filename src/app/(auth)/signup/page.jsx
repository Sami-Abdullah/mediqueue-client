'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';
import {toast} from 'react-toastify'
const SignUppage = () => {
  const router = useRouter()
  const handleSubmit =async (e)=>{
    e.preventDefault();
    const res = new FormData(e.currentTarget)
    const formData = Object.fromEntries(res);
    console.log(formData);
    const {data,error} = await authClient.signUp.email({
      email:formData.email,
      name:formData.name,
      password:formData.password,
    })
    if(!error){
      toast.success('Signed up')
      router.push('/signin')
    }else{
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
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="text" name='password' className="input" placeholder="Password" />

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