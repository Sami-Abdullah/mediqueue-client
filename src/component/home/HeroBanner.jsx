'use client'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import hero1 from '@/assets/hero1.jpg'
import hero2 from '@/assets/hero2.png'
import hero3 from '@/assets/hero4.jpg'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner = () => {

  const handleGetStarted = () => {

  }
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full  ">


            <Image src={hero1} alt="hero" />

            <div className="absolute inset-0 bg-[#0B2545]/60"></div>


            <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-24 z-10">

              <div className="px-5 text-center md:text-left space-y-4 md:space-y-6 max-w-2xl">

                <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-[#eef4ed] leading-tight">
                  Find the Perfect Tutor in Seconds
                </h1>

                <p className="hidden lg:flex text-xs md:text-xl text-[#eef4ed]/90">
                  No more waiting, no more confusion — just seamless learning at your convenience.
                </p>

                <Link
                  href="/tutors"
                  className=" btn btn-primary text-xs md:text-lg px-6 md:px-10 py-3 md:py-5"
                >
                  Get Started
                </Link>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full ">


            <Image src={hero2} alt="hero" />

            <div className="absolute inset-0 bg-[#0B2545]/60"></div>


            <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-24 z-10">

              <div className="px-5 text-center md:text-left space-y-4 md:space-y-6 max-w-2xl">

                <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-[#eef4ed] leading-tight">
                  Learn from Verified & Skilled Tutors
                </h1>

                <p className=" hidden lg:flex text-xs md:text-xl text-[#eef4ed]/90">
                  Every tutor is checked for experience, skills, and teaching ability before joining Mediqueue.
                </p>

                <Link
                  href="/tutors"
                  className=" btn btn-primary text-xs md:text-lg px-6 md:px-10 py-3 md:py-5"
                >
                  Browse Tutors
                </Link>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full  ">


            <Image src={hero3} alt="hero" />

            <div className="absolute inset-0 bg-[#0B2545]/60"></div>


            <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-24 z-10">

              <div className="px-5 text-center md:text-left space-y-4 md:space-y-6 max-w-2xl">

                <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-[#eef4ed] leading-tight">
                  Achieve Better Results 
                </h1>

                <p className="hidden lg:flex text-xs md:text-xl text-[#eef4ed]/90">
                  Improve grades, build confidence, and learn smarter with guided support.
                </p>

                <Link
                  href="/tutors"
                  className=" btn btn-primary text-xs md:text-lg px-6 md:px-10 py-3 md:py-5"
                >
                  Start Learning
                </Link>

              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  )
};

export default HeroBanner;