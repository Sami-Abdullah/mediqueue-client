import React from 'react';

const TutorDetailsPage = async({params}) => {
  const {id} = await params;
  return (
    <div>
        {`this is ${id}`}
    </div>
  );
};

export default TutorDetailsPage;