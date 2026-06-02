import BookSessionModal from '@/component/tutor/BookSessionModal';
import SlotMeter from '@/component/tutor/SlotMeter';
import { auth } from '@/lib/auth';
import { getTutorDetails } from '@/lib/FetchServer';
import { headers } from "next/headers";
import Image from 'next/image';
import React from 'react';
import { AiFillClockCircle } from 'react-icons/ai';
import { FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { FaCalendarDays, FaLocationDot } from 'react-icons/fa6';
import { IoCalendarSharp } from 'react-icons/io5';
import { PiCurrencyDollarFill } from 'react-icons/pi';

const TutorDetailsPage = async ({ params }) => {
  const { id } =await params;

  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;
  const tutor =await  getTutorDetails(id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-40">
      <div className="card md:card-side bg-bg-light shadow-sm rounded-2xl overflow-hidden">

        {/* IMAGE */}
        <figure className="md:w-1/3">
          <Image
            src={tutor.photo}
            alt={tutor.name}
            height={300}
            width={300}
            className="object-cover w-full h-full"
          />
        </figure>

        {/* CONTENT */}
        <div className="card-body p-0 flex-1">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#134074] to-[#8da9c4] p-6 text-white">
            <h3 className="text-2xl font-bold">{tutor.name}</h3>
            <p className="text-purple-100 mt-1">{tutor.subject} Specialist</p>
          </div>

          {/* BODY */}
          <div className="p-6">

            <div className="grid md:grid-cols-2 gap-6">

              {/* LEFT */}
              <div className="space-y-4">

                <div className="flex items-center gap-3 border-b pb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <PiCurrencyDollarFill className="text-xl text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Hourly Fee</p>
                    <p className="text-2xl font-bold text-[#134074]">${tutor.hourlyFee}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b pb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <AiFillClockCircle className="text-xl text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Available Time</p>
                    <p className="font-semibold text-primary-dark">{tutor.availableTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-b pb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <IoCalendarSharp className="text-xl text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Available Days</p>
                    <p className="font-semibold text-primary-dark">{tutor.availableDays}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-xl text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="font-semibold text-primary-dark">{tutor.experience} years</p>
                  </div>
                </div>

              </div>

              {/* RIGHT */}
              <div className="space-y-4">

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Institution</p>
                  <p className="font-semibold text-primary-dark">{tutor.institution}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Location & Mode</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1 text-primary-dark text-sm">
                      <FaLocationDot />
                      {tutor.location}
                    </span>

                    <span className="text-primary-dark">•</span>

                    <span className="px-2 py-1 rounded-full text-xs bg-[#134074]/20 text-[#134074]">
                      {tutor.teachingMode}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Session Start Date</p>
                  <p className="font-semibold text-[#134074] flex items-center gap-1">
                    <FaCalendarDays />
                    {tutor.sessionStartDate}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Contact</p>
                  <p className="text-sm flex items-center gap-1 text-primary-dark truncate">
                    <FaEnvelope />
                    {tutor.email}
                  </p>
                </div>

              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <SlotMeter tutor={tutor} />
                <BookSessionModal id={id} user={user} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;