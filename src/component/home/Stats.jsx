import React from 'react';
import {
  FaTrophy,
  FaBookOpen,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaChartLine,
  FaInfinity,
} from "react-icons/fa";
const Stats = () => {
  const statsData = [
    {
      id: 1,
      number: "500+",
      label: "Student Achievements",
      description: "Recognitions & Milestones",
      icon: FaTrophy,
    },
    {
      id: 2,
      number: "30+",
      label: "Subjects Covered",
      description: "Diverse domains & expertise",
      icon: FaBookOpen,
    },
    {
      id: 3,
      number: "1000k",
      label: "Learning Sessions",
      description: "Successful tutoring hours",
      icon: FaChalkboardTeacher,
    },
    {
      id: 4,
      number: "400+",
      label: "Certified Tutors",
      description: "Vetted industry experts",
      icon: FaUserGraduate,
    },
  ];
  return (
    <div className='py-30'>

      <div className="card bg-[#13315c] card-xl shadow-sm ">
        <div className="card-body space-y-10 py-20">
          <h2 className="text-5xl font-semibold text-center text-[#eef4ed]">
            Proven Results, Measurable Impact
          </h2>
          <p className="text-[#eef4ed] text-center text-xl">
            Thousands of learners, expert tutors, and outcomes that speak for themselves
          </p>

          <div className='grid grid-cols-4 gap-5'>
            {statsData.map((stat, index) => {
              const IconComponent = stat.icon; // 

              return (
                <div key={index} className="card bg-base-100 card-md shadow-sm">
                  <div className="card-body text-center">
                    <div className='flex gap-4 mx-auto'>
                      <IconComponent className="text-4xl text-[#13315c] mb-2" />
                      <div className="text-3xl font-bold">{stat.number}</div>
                    </div>
                    <h2 className="text-2xl font-semibold">{stat.label}</h2>
                    <p className='text-xl'>{stat.description}</p>
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