'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const UserProfilePage = () => {
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
    <div className=' mx-auto border shadow-xl w-40 my-10 p-10 text-center'>
      <h1>{user.name} </h1>
      <h1>{user.email} </h1>
    </div>
  );
};

export default UserProfilePage;