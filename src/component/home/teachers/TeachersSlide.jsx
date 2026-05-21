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
  console.log("teachers:", teachers);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 px-4">
      {teachers.map((teacher, index) => (
        <div key={index} className="card bg-[#0b2545] shadow-xl hover:shadow-2xl transition-shadow">
          <figure className="w-full h-64 overflow-hidden pt-20">
            <Image
              src={teacher.photo}
              alt={teacher.name}
              width={200}
              height={200}
              
              
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-xl font-bold text-[#eef4ed]">{teacher.name}</h2>
            <p className="text-[#eef4ed] font-semibold">{teacher.subject}</p>
            <p className="text-sm  text-[#eef4ed]">{teacher.institution}</p>
            <p className="text-sm  mt-2 text-[#eef4ed]">{teacher.description}</p>
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