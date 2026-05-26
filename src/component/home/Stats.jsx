import React from 'react';
import {
  FaTrophy,
  FaBookOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
} from "react-icons/fa";

const Stats = () => {
  const statsData = [
    { id: 1, number: "500+", label: "Student Achievements", description: "Recognitions & Milestones", icon: FaTrophy },
    { id: 2, number: "30+", label: "Subjects Covered", description: "Diverse domains & expertise", icon: FaBookOpen },
    { id: 3, number: "1000k", label: "Learning Sessions", description: "Successful tutoring hours", icon: FaChalkboardTeacher },
    { id: 4, number: "400+", label: "Certified Tutors", description: "Vetted industry experts", icon: FaUserGraduate },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 ">
      <div className="card rounded-2xl overflow-hidden">
        <div className="card-body space-y-6 sm:space-y-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-[#0b2545] to-[#8da9c4] dark:text-gray-300 bg-clip-text text-transparent ">
            Proven Results, <span className="">Measurable Impact</span>
          </h2>
          
          <p className="text-[#8da9c4] text-center text-base dark:text-gray-400 sm:text-lg md:text-xl max-w-3xl mx-auto">
            Thousands of learners, expert tutors, and outcomes that speak for themselves
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="card bg-white/95  hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl rounded-xl overflow-hidden">
                  <div className="card-body p-5 sm:p-6 md:p-7 text-center">
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3'>
                      <div className="p-3 bg-[#134074]/10 rounded-full group-hover:bg-[#134074]/20 transition-colors duration-300">
                        <IconComponent className="text-3xl sm:text-4xl text-[#134074]" />
                      </div>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b2545]">
                        {stat.number}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0b2545] mb-1">
                      {stat.label}
                    </h3>
                    <p className='text-sm sm:text-base text-[#8da9c4]'>
                      {stat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;