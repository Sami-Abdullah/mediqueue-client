import Link from 'next/link';
import React from 'react';

const AllTutorPage = async () => {
  const data = await fetch('http://localhost:5000/tutors',{
    
  })
  const tutors = await data.json()

  return (
    <div className='text-center container mx-auto space-y-3 my-10'>
      <h1> here are the tutors</h1>
      <div className='grid grid-cols-3 w-3xl gap-5 mx-auto'>

        {
          tutors.map((tutor, index) => (
            <div key={index} className='border px-8 py-4 shadow-xl space-y-4 text-center'>
              <h1> {tutor.email}</h1>
              <Link className='btn btn-success text-gray-600' href={`/tutors/${tutor._id}`}>Details</Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AllTutorPage;