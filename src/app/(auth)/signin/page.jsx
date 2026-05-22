'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import {  toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
const SignInpage = () => {
  const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault()
    const res = new FormData(e.currentTarget)
    const dataForm =  Object.fromEntries(res)

    console.log(dataForm);
    const { data, error } = await authClient.signIn.email({
      email: dataForm.email,
      password: dataForm.password
    })
    if(!error){
      toast.success('Logged In')
      router.push('/')
    }else{
     toast.error(`${error.message}`)

    }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelSubmit}>

              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="text" name='password' className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInpage;