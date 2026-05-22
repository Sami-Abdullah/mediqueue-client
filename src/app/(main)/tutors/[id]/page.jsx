import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const result = await fetch(`http://localhost:5000/tutors/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const tutor = await result.json()
  console.log(tutor, 'HERE AT details');
  return (
    <div className='container mx-auto py-40' >
      <div class="card card-side bg-base-100 shadow-sm">
        <figure>
          <Image src={tutor.photo} alt={tutor.name} height={300} width={300}></Image>
        </figure>
<div className="card-body p-0 overflow-hidden">
  {/* Header with gradient background */}
  <div className="bg-gradient-to-r from-[#134074] to-[#8da9c4] p-6 text-white">
    <h3 className="text-2xl font-bold">{tutor.name}</h3>
    <p className="text-purple-100 mt-1">{tutor.subject} Specialist</p>
  </div>
  
  {/* Content split into columns */}
  <div className="p-6">
    <div className="grid md:grid-cols-2 gap-6">
      {/* Left Column - Key Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-xl">💰</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Hourly Fee</p>
            <p className="text-2xl font-bold text-green-600">${tutor.hourlyFee}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-xl">⏰</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Available Time</p>
            <p className="font-semibold">{tutor.availableTime}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-xl">📅</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Available Days</p>
            <p className="font-semibold">{tutor.availableDays}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-xl">🎓</span>
          </div>
          <div>
            <p className="text-xs text-gray-500">Experience</p>
            <p className="font-semibold">{tutor.experience} years</p>
          </div>
        </div>
      </div>
      
      {/* Right Column - Details */}
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Institution</p>
          <p className="font-semibold">{tutor.institution}</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Location & Mode</p>
          <div className="flex items-center gap-2">
            <span className="text-sm">📍 {tutor.location}</span>
            <span className="text-sm">•</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              tutor.teachingMode === 'Online' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
            }`}>
              {tutor.teachingMode}
            </span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Session Start Date</p>
          <p className="font-semibold text-blue-600">{tutor.sessionStartDate}</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Contact</p>
          <p className="text-sm truncate">{tutor.email}</p>
        </div>
      </div>
    </div>
    
    {/* Slot indicator */}
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">Available Slots:</span>
        <div className="flex items-center gap-2">
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#134074] rounded-full h-2 transition-all"
              style={{ width: `${(parseInt(tutor.totalSlot) / 20) * 100}%` }}
            ></div>
          </div>
          <span className="font-bold">{tutor.totalSlot}/20</span>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;