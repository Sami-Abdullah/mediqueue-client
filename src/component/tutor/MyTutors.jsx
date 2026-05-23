'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const MyTutors = ({ bookingDatas, tutorDatas }) => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  const studentId = session?.user.id;


  const myBookings = bookingDatas.filter(booking => booking.studentid === studentId);
  console.log("My Bookings:", myBookings);

  const tutors = myBookings.map(booking => {
    console.log("Looking for teacher with _id:", booking.teacherid);

    const teacher = tutorDatas.find(tutor => {
      console.log("Comparing:", tutor._id, "===", booking.teacherid, "Result:", tutor._id === booking.teacherid);
      return tutor._id === booking.teacherid;
    });

    console.log("Found teacher:", teacher);

    return {
      ...teacher,
      bookingId: booking._id,
      bookingDate: booking.date,
      bookingTime: booking.time,
      sessionType: booking.session
    };
  });


  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto ">
      {tutors.map((tutor, index) => (
        <div
          key={tutor.id || index}
          className="group relative p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >

          <div className="flex justify-between items-start">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-600">
              {tutor.subject}
            </span>
          </div>


          <h2 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
            {tutor.name}
          </h2>


          <div className="mt-3 space-y-1 text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-700">Experience:</span>{" "}
              {tutor.experience || "N/A"} years
            </p>

            {tutor.location && (
              <p>
                <span className="font-medium text-gray-700">Location:</span>{" "}
                {tutor.location}
              </p>
            )}
          </div>

          {/* Footer action */}
          <div className="mt-5 flex justify-between items-center">
            <Link href={`/tutors/${tutor.id }`} className="text-sm px-4 py-2 rounded-lg text-white">
              View Profile
            </Link>

            <span className="text-xs text-gray-400">
              Available
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTutors;