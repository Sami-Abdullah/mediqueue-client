'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const AddTutorpage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch('http://localhost:5000/tutors', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
 
    if (res) {
      toast.success('Teacher added')
    } else {
      toast.error('Please try again later')
    }

  }
  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center text-[#134074] mb-8">
          Add Tutor
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Name */}
          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              placeholder="Dr. Sarah Ahmed"
              className="input input-bordered w-full"
              {...register("name")}
            />
          </div>


          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="input input-bordered w-full"
              {...register("email")}
            />
          </div>


          {/* Photo */}
          <div>
            <label className="font-semibold">Photo URL</label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered w-full"
              {...register("photo")}
            />
          </div>


          {/* Subject */}
          <div>
            <label className="font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Mathematics"
              className="input input-bordered w-full"
              {...register("subject")}
            />
          </div>


          {/* Institution */}
          <div>
            <label className="font-semibold">Institution</label>
            <input
              type="text"
              placeholder="University of Dhaka"
              className="input input-bordered w-full"
              {...register("institution")}
            />
          </div>


          {/* Experience */}
          <div>
            <label className="font-semibold">Experience</label>
            <input
              type="text"
              placeholder="8 years"
              className="input input-bordered w-full"
              {...register("experience")}
            />
          </div>


          {/* Hourly Fee */}
          <div>
            <label className="font-semibold">Hourly Fee ($)</label>
            <input
              type="number"
              placeholder="25"
              className="input input-bordered w-full"
              {...register("hourlyFee")}
            />
          </div>


          {/* Total Slots */}
          <div>
            <label className="font-semibold">Total Slots</label>
            <input
              type="number"
              placeholder="20"
              className="input input-bordered w-full"
              {...register("totalSlot")}
            />
          </div>


          {/* Available Days */}
          <div>
            <label className="font-semibold">Available Days</label>
            <input
              type="text"
              placeholder="Sun - Thu"
              className="input input-bordered w-full"
              {...register("availableDays")}
            />
          </div>


          {/* Available Time */}
          <div>
            <label className="font-semibold">Available Time</label>
            <input
              type="text"
              placeholder="5 PM - 8 PM"
              className="input input-bordered w-full"
              {...register("availableTime")}
            />
          </div>


          {/* Session Start Date */}
          <div>
            <label className="font-semibold">Session Start Date</label>
            <input
              type="date"
              className="input input-bordered w-full"
              {...register("sessionStartDate")}
            />
          </div>


          {/* Location */}
          <div>
            <label className="font-semibold">Location</label>
            <input
              type="text"
              placeholder="Dhaka"
              className="input input-bordered w-full"
              {...register("location")}
            />
          </div>


          {/* Teaching Mode */}
          <div>
            <label className="font-semibold">Teaching Mode</label>

            <select
              className="select select-bordered w-full"
              {...register("teachingMode")}
            >
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
          </div>


          {/* Rating */}
          <div>
            <label className="font-semibold">Rating</label>
            <input
              type="number"
              step="0.1"
              placeholder="4.9"
              className="input input-bordered w-full"
              {...register("rating")}
            />
          </div>


          {/* Description */}
          <div className="md:col-span-2">

            <label className="font-semibold">
              Description
            </label>

            <textarea
              placeholder="Tutor description..."
              className="textarea textarea-bordered w-full h-32"
              {...register("description")}
            />
          </div>


          {/* Submit */}
          <div className="md:col-span-2">

            <button
              className="btn bg-[#134074] text-white w-full hover:bg-[#0d2d55]"
            >
              Add Tutor
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddTutorpage;