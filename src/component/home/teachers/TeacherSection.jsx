import React from 'react';
import TeachersSlide from './TeachersSlide';
import { getAlltutors, getTutors } from '@/lib/Fetch';

const TeacherSection = async () => {

  const allTeachers = await getTutors()


  const teachers = allTeachers.slice(0, 6);

  return (
    <div className=' w-full py-20'>
      <div className="text-center mb-12 ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-300 mb-4">
          Meet Our Expert Tutors
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Learn from industry professionals and academic experts who are passionate about teaching and dedicated to your success.
        </p>
      </div>
      <TeachersSlide teachers={teachers}></TeachersSlide>
    </div>
  );
};

export default TeacherSection;