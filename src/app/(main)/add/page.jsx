'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const AddTutorpage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    console.log(data);
    const res = await fetch('http://localhost:5000/tutors',{
      method:'POST',
      headers:{
        'content-type' :'application/json'
      },
      body:JSON.stringify(data)
    })
    console.log( await res.json());

  }
  return (
    <div className='space-y-4 mt-8'>
      <h1 className='text-center text-5xl'> add tutor here</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto bg-gray-300 p-10 space-y-3 flex flex-col justify-center items-center'>
      <div className='flex gap-3'>
        <label className='text-xl font-semibold'>Email</label>
        <input type="email"  className='border' {...register('email')}/>
      </div>
      <div className='flex gap-3'>
        <label className='text-xl font-semibold'>Name</label>
        <input type="text"  className='border' {...register('name')}/>
      </div>
      <div className='flex gap-3'>
        <label className='text-xl font-semibold'>Education</label>
        <input type="text"  className='border' {...register('edu')}/>
      </div>
      <div>
        <input type="submit" className='btn '/>
      </div>
      </form>
    </div>
  );
};

export default AddTutorpage;