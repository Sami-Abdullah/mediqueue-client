
import MyTutors from '@/component/tutor/MyTutors';

import React from 'react';

const MyTutorPage = async () => {

  const res1 = await fetch(`http://localhost:5000/booking`)
  const bookingDatas = await res1.json()
  const res2 = await fetch(`http://localhost:5000/tutors`)
  const tutorDatas = await res2.json()
  return (
    <div className='py-60'>
      
      <MyTutors bookingDatas={bookingDatas} tutorDatas={tutorDatas}></MyTutors>
    </div>
  );
};

export default MyTutorPage;