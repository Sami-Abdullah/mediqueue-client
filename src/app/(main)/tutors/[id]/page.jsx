
import BookSessionModal from '@/component/tutor/BookSessionModal';
import SlotMeter from '@/component/tutor/SlotMeter';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoCalendarSharp } from 'react-icons/io5';
import { PiCurrencyDollarFill } from 'react-icons/pi';

const TutorDetailsPage = async ({ params,searchParams }) => {
  const { id } = await params;
  const {date} = await searchParams;
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const result = await fetch(`http://localhost:5000/tutors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const tutor = await result.json()

  return (
    <div className='container mx-auto py-40' >
      <div className="card md:card-side bg-base-100 shadow-sm">
        <figure className=''>
          <Image src={tutor.photo} alt={tutor.name} height={300} width={300}></Image>
        </figure>
        <div className="card-body p-0 overflow-hidden">

          <div className="bg-gradient-to-r from-[#134074] to-[#8da9c4] p-6 text-white">
            <h3 className="text-2xl font-bold">{tutor.name}</h3>
            <p className="text-purple-100 mt-1">{tutor.subject} Specialist</p>
          </div>


          <div className="p-6 ">

            <div className="grid md:grid-cols-2 gap-6">
              {/* left cols */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-xl"><PiCurrencyDollarFill /></span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Hourly Fee</p>
                    <p className="text-2xl font-bold text-[#134074]/50">${tutor.hourlyFee}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                  <div className="w-10 h-10 bg-blue-100  rounded-full flex items-center justify-center">
                    <span className="text-xl"><AiFillClockCircle /></span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Available Time</p>
                    <p className="font-semibold">{tutor.availableTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                  <div className="w-10 h-10 bg-blue-100  rounded-full flex items-center justify-center">
                    <span className="text-xl"><IoCalendarSharp /></span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Available Days</p>
                    <p className="font-semibold">{tutor.availableDays}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100  rounded-full flex items-center justify-center">
                    <span className="text-xl"><FaGraduationCap /></span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="font-semibold">{tutor.experience} years</p>
                  </div>
                </div>
              </div>

              {/* right cols */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Institution</p>
                  <p className="font-semibold">{tutor.institution}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Location & Mode</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm flex items-center gap-1"><FaLocationDot /> {tutor.location}</span>
                    <span className="text-sm">•</span>
                    <span className={`px-2 py-1 rounded-full text-xs bg-[#134074]/20 text-[#134074] `}>
                      {tutor.teachingMode}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Session Start Date</p>
                  <p className="font-semibold text-[#134074]">{tutor.sessionStartDate}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Contact</p>
                  <p className="text-sm truncate">{tutor.email}</p>
                </div>
              </div>

            </div>


            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <SlotMeter tutor={tutor}></SlotMeter>
                <BookSessionModal id={id}></BookSessionModal>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;