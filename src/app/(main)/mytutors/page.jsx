
import MyTutors from '@/component/tutor/MyTutors';
import { getBookings, getTutors } from '@/lib/Fetch';

import React from 'react';

const MyTutorPage = async () => {

  const bookingDatas = await getBookings()

  const tutorDatas = await getTutors();
  return (
    <div className='min-h-screen mx-auto '>
      <h1 className='mb-2 mt-20 text-3xl text-center bg-[#0b2545]
      px-10 py-5 text-[#eef4ed] font-semibold rounded-sm'>My Tutors</h1>
      <MyTutors bookingDatas={bookingDatas} tutorDatas={tutorDatas}></MyTutors>
    </div>
  );
};

export default MyTutorPage;