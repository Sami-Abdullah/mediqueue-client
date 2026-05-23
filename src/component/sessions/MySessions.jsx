'use client'
import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { authClient } from '@/lib/auth-client';
import { FaUserLarge } from 'react-icons/fa6';
const MySessions = ({ sessions, tutorsData }) => {

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()

  const stu = session?.user

  console.log(stu, 'student here');
  console.log(stu.id, 'student id here');


  const mySessions = sessions.filter
    (session => session.studentid === stu.id)

  console.log(mySessions, 'booking here');


  const myTutors = mySessions.map(session => {
    
    const myTutor = tutorsData.find( tutor=>session.teacherid === tutor._id)
    return {
      ...myTutor,
      bookingId: session._id,
      bookingDate: session.date,
      bookingTime: session.time,
      sessionType: session.session
    };
  })
  console.log(myTutors);

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
    <div className='grid grid-cols-2 gap-3'>

      {
        myTutors.map((tutor, index) => {
          const sessionFormated = formatSession(tutor.sessionType)
          const dateFormated = formatDate(tutor.bookingDate)
          const timeFormated = formatTimeForDisplay(tutor.bookingTime)
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
                <p className='flex items-center gap-2 '>
                  <span>
                    <FaUserLarge />
                  </span>
                  {tutor.name}
                </p>

                <div className="justify-end card-actions ">
                  <Link href={`/tutors/${tutor._id}`} className='btn bg-[#0b2545] text-white'>View Tutor</Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default MySessions;