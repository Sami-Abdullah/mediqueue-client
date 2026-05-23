
import MyTutors from '@/component/tutor/MyTutors';
import { getBookings, getTutors } from '@/lib/Fetch';

import React from 'react';

const MyTutorPage = async () => {

  const bookingDatas = await getBookings()

  const tutorDatas = await getTutors();
  return (
    <div className='py-60'>
      
      <MyTutors bookingDatas={bookingDatas} tutorDatas={tutorDatas}></MyTutors>
    </div>
  );
};

export default MyTutorPage;