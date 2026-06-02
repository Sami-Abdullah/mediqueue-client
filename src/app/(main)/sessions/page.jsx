

import React from 'react';
import MySessions from '@/component/sessions/MySessions';
import { getBookings, getTutors } from '@/lib/Fetch';

const SessionPage = async () => {
  const sessions = await getBookings()

  const tutorsData = await getTutors();

  return (

    <div className='min-h-screen mx-auto max-w-7xl '>
      <div className='bg-[#0b2545] dark:bg-bg-light rounded-2xl px-10 py-5  mb-5 mt-20 mx-auto '>

        <h1 className=' text-3xl text-center 
       text-bg-light font-semibold   dark:text-primary-dark'>My Session</h1>
      </div>
      <MySessions sessions={sessions} tutorsData={tutorsData}></MySessions>

    </div>
  );
};

export default SessionPage;