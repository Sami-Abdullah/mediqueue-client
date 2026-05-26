"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const TeachersSlide = ({ teachers = [] }) => {



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-6 px-4 ">
      {teachers.map((teacher, index) => (
        <div key={index} className="card bg-bg-light shadow-xl hover:shadow-2xl transition-shadow">
          <figure className="w-full h-100 overflow-hidden ">
            <Image
              src={teacher.photo}
              alt={teacher.name}
              width={400}
              height={200}


            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold dark:text-primary-dark">{teacher.name}</h2>
            <div className="flex gap-2">
              <span className="text-[#0b2545] ">{teacher.subject}</span>
              <span className="text-sm text-gray-600 font-semibold">{teacher.institution}</span>

            </div>
            <p className="text-sm text-gray-500 mt-2">{teacher.description}</p>
            <div className="card-actions justify-end mt-4">
              <button className="btn bg-[#0b2545] text-white btn-sm">View Profile</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeachersSlide;