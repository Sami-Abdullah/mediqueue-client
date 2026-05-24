'use client';

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserProfilePage = () => {
  const {
    data: session,
    isPending,
    error,
  } = authClient.useSession();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data)=>{

    await authClient.updateUser({
    image: data.image,
    name: data.name,
})
  }
  const user = session?.user;
  console.log(user);
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-[#134074] to-[#0b2545] p-10 flex flex-col items-center justify-center text-white">

          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">

            {user?.image ? (
              <Image
                src={user.image}
                alt="profile"
                width={130}
                height={130}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-5xl font-bold text-blue-600">
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </span>
            )}

          </div>

          <h1 className="mt-6 text-3xl font-bold">
            {user?.name || 'Unknown User'}
          </h1>

          <p className="opacity-80 mt-2">
            {user?.email || 'No Email'}
          </p>

          <div className="mt-8 text-center">
            <h3 className="font-semibold text-lg">
              Profile Information
            </h3>

            <p className="text-sm opacity-80 mt-2">
              Manage your account details and keep your information updated.
            </p>
          </div>
        </div>


        {/* Right Side */}
        <div className="p-8 lg:p-12">

          <h2 className="text-3xl font-bold mb-2">
            Update Profile
          </h2>

          <p className="text-gray-500 mb-8">
            Edit your personal information
          </p>


          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                defaultValue={user?.name || ''}
                className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                {...register('name')}
              />
            </div>


            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                defaultValue={user?.email || ''}
                disabled
                className="w-full border border-gray-300 p-4 rounded-xl bg-gray-100 cursor-not-allowed"
              />
            </div>


            {/* Image URL */}
            <div>
              <label className="block mb-2 font-medium">
                Profile Image URL
              </label>

              <input
                type="text"
                name="image"
                defaultValue={user?.image || ''}
                placeholder="https://example.com/image.jpg"
                className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"{...register('image')}
              />
            </div>


            <button
              type="submit"
              className="w-full bg-[#8da9c4] hover:bg-[#134074] transition-all duration-300 text-white py-4 rounded-xl font-semibold shadow-md"
            >
              Update Profile
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default UserProfilePage;