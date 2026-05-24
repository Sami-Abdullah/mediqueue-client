'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { PiMedalFill } from 'react-icons/pi';

const MyTutors = ({ bookingDatas, tutorDatas }) => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  const studentId = session?.user.id;


  const myBookings = bookingDatas.filter(booking => booking.studentid === studentId);

  console.log(myBookings, 'booking here');
  const tutors = myBookings.map(booking => {

    const teacher = tutorDatas.find(tutor => {
      return tutor._id === booking.teacherid;
    });


    return {
      ...teacher,
      bookingId: booking._id,
      bookingDate: booking.date,
      bookingTime: booking.time,
      sessionType: booking.session
    };
  });

  console.log(tutors, 'tutor here')
  return (

    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 container mx-auto ">
      {tutors.map((tutor, index) => (
        <div
          key={ index}
          className=" relative p-5  rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all  flex justify-between"
        >
          <div className='mr-10'>

            <div className="flex justify-between items-start">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-[#0b2545]">
                {tutor.subject}
              </span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
              {tutor.name}
            </h2>
            <h2 className="pl-1 mt-4 text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition">

              <span className='flex items-center gap-1'>
                <FaEnvelope />
                {tutor.email}

              </span>
            </h2>
            <div className="mt-3 space-y-2 text-sm text-gray-600">

              <p className='flex items-center gap-1'>
                <span className="font-medium text-gray-700">
                  <PiMedalFill size={20} />
                </span>
                {tutor.experience || "N/A"}
              </p>

              {tutor.location && (
                <p className='flex items-center gap-1'>
                  <span className="font-medium text-gray-700"><IoLocationSharp size={20} /></span>
                  {tutor.location}
                </p>
              )}
            </div>

            <div className="mt-5 flex justify-between items-center">
              <Link href={`/tutors/${tutor._id}`} className="text-sm px-4 py-2 rounded-lg text-white bg-[#0b2545]">
                View Profile
              </Link>
            </div>
          </div>
          {tutor?.photo && (
            <div>
              <Image
                src={tutor.photo}
                alt={tutor.name}
                width={200}
                height={200}
              />
            </div>
          )}



        </div>
      ))}
    </div>
  );
};

export default MyTutors;