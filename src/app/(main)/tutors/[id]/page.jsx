import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const {token} = await auth.api.getToken({
    headers : await headers()
  })
  const result = await fetch(`http://localhost:5000/tutors/${id}`,{
    headers:{
      authorization : `Bearer ${token}`
    }
  })
  const tutor = await result.json()
  console.log(tutor,'HERE AT details');
  return (
    <div className='card flex flex-col mx-auto my-100 font-bold text-4xl border border-red-400 p-10 ' >
      <h1>
        {tutor.email}
      </h1>
      <h1>

        {tutor.name}
      </h1>
      <h1>
        {tutor.edu}

      </h1>
    </div>
  );
};

export default TutorDetailsPage;