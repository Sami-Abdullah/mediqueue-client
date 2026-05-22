"use client";

import React from 'react';

const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Create Your Account", desc: "Sign up in minutes" },
    { number: "02", title: "Explore Expert Tutors", desc: "Browse by subject" },
    { number: "03", title: "Choose Subject & Time", desc: "Select schedule" },
    { number: "04", title: "Book Session", desc: "Confirm with one click" },
    { number: "05", title: "Start Learning", desc: "Begin your journey" }
  ];

  return (
    <section className="py-16 bg-gray-50 w-9/12 ">
      <div className=" px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn Smarter in Just <span className="text-[#0b2545]">Few Simple Steps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering you to achieve your goals with flexibility, reliability and stress-free learning solutions
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative z-10 w-16 h-16 bg-[#0b2545] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn bg-[#0b2545] px-8 py-3 text-white">Get Started Now</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;