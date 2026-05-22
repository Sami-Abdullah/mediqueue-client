
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const UserProfilePage =async ({params}) => {
  const {id }= await params
  const data = await fetch (`http://localhost:5000/${id}`)
  const tutor = await data.json()
  console.log(tutor);
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  const {user}= session
  console.log(user);
  console.log(session,'here');
  return (
    <div className='mx-auto border shadow-xl w-40 my-10 p-10 text-center'>
      <h1>{tutor.name} </h1>
      <h1>{tutor.email} </h1>
      
      {tutor.photo? <Image src={tutor.photo} alt={tutor.name}></Image>:<h1>there is no photo</h1>}
    </div>
  );
};

export default UserProfilePage;