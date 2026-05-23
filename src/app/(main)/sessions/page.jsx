
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const SessionPage = async () => {
  const res = await fetch('http://localhost:5000/booking')
  const mySessions = await res.json()
  const res2 = await fetch(`http://localhost:5000/tutors`)
  const tutorDatas = await res2.json()

  

  const formatTimeForDisplay = (time24) => {


    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;


    if (minutes === undefined) {
      return `${hour12} ${ampm}`;
    }

    return `${hour12}:${minutes} ${ampm}`;
  };

  const formatDate = (date) => {
    const dateFor = new Date(date);

    const formattedDate = dateFor.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    return formattedDate
  }
  const formatSession = (session) => {
    const firstLetter = session.charAt(0);
    const capitalFirstLetter = firstLetter.toUpperCase();
    const restOfWord = session.slice(1);
    return capitalFirstLetter + restOfWord;

  }
  return (
    <div className='contianer mx-auto space-y-3 my-10 '>
      <h1 className='text-3xl text-center bg-[#0b2545]
      px-10 py-5 text-[#eef4ed] font-semibold rounded-sm'>My Sessions</h1>
      <div className='grid grid-cols-2 gap-3'>

        {
          mySessions.map((session, index) => {
            const sessionFormated = formatSession(session.session)
            const dateFormated = formatDate(session.date)
            const timeFormated = formatTimeForDisplay(session.time)
            return (
              <div key={index} className="card w-[500] bg-base-100 card-xl shadow-sm">
                <div className="card-body py-5">
                  <h1 className='text-[#0b2545]/30'>#{`${index + 1}`}</h1>
                  <h2 className="card-title">{sessionFormated}</h2>
                  <p className='flex items-center gap-2 '>
                    <span>
                      <FaCalendarAlt />
                    </span>
                    {dateFormated}
                  </p>
                  <p className='flex items-center gap-2 '>
                    <span>
                      <FaClock />
                    </span>
                    {timeFormated}
                  </p>
                  <div className="justify-end card-actions ">
                    <Link href={`/tutors/${session.teacherid}`} className='btn bg-[#0b2545] text-white'>View Tutor</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default SessionPage;