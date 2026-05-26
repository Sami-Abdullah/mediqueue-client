
import MyTutors from '@/component/tutor/MyTutors';
import { getBookings, getTutors } from '@/lib/Fetch';

import React from 'react';

const MyTutorPage = async () => {

  const bookingDatas = await getBookings()

  const tutorDatas = await getTutors();
  return (
    <div className='min-h-screen mx-auto w-1/2'>
      <div className='bg-[#0b2545] dark:bg-bg-light rounded-2xl px-10 py-5  mb-5 mt-20 mx-auto '>

        <h1 className=' text-3xl text-center 
       text-bg-light font-semibold   dark:text-primary-dark'>My Tutors</h1>
      </div>
      <MyTutors bookingDatas={bookingDatas} tutorDatas={tutorDatas}></MyTutors>
    </div>
  );
};

export default MyTutorPage;