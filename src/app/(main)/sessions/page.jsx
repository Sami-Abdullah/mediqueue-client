

import React from 'react';
import MySessions from '@/component/sessions/MySessions';
import { getBookings, getTutors } from '@/lib/Fetch';

const SessionPage = async () => {
    const sessions = await getBookings()
  
    const tutorsData = await getTutors();

  return (

    <div className='contianer mx-auto space-y-3 my-10 '>
      <h1 className='text-3xl text-center bg-[0b2#545]
      px-10 py-5 text-[#eef4ed] font-semibold rounded-sm'>My Sessions</h1>
      <MySessions sessions={sessions} tutorsData={tutorsData}></MySessions>

    </div>
  );
};

export default SessionPage;