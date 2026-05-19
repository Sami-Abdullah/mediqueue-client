import React from 'react';

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const result = await fetch(`http://localhost:5000/tutors/${id}`)
  const tutor = await result.json()
  console.log(tutor);
  return (
    <div className='card flex flex-col mx-auto my-100 font-bold text-4xl' >
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