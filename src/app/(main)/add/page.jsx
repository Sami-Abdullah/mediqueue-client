'use client'
import { addTutor } from '@/lib/Fetch';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTutorpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data);
    const res =await  addTutor(data)
    console.log(res,'herere');
    if (res) {
      toast.success('Teacher added', { position: "bottom-center" })
    } else {
      toast.error('Please try again later', { position: "bottom-center" })
    }
  }

  return (
    <div className="min-h-screen py-10  bg-bg-light dark:bg-bg-dark">
      <div className="max-w-4xl mx-auto bg-white dark:bg-primary-dark rounded-xl shadow-xl overflow-hidden">

        {/* Header */}
        <h1 className="text-4xl font-bold text-center bg-primary-dark text-bg-light py-8 dark:bg-blue-800/50 dark:text-white">
          Add Tutor
        </h1>

        <div className="px-8 pb-8 pt-6">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* Name */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Name
              </label>

              <input
                type="text"
                placeholder="Dr. Sarah Ahmed"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("name", {
                  required: "Name is required"
                })}
              />

              {errors.name &&
                <p className="text-red-500 text-sm">
                  {errors.name.message}
                </p>}
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Email
              </label>

              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("email", {
                  required: "Email required"
                })}
              />

              {errors.email &&
                <p className="text-red-500 text-sm">
                  {errors.email.message}
                </p>}
            </div>

            {/* Photo */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Photo URL
              </label>

              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("photo", {
                  required: "Photo required"
                })}
              />
            </div>

            {/* Subject */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Subject
              </label>

              <input
                type="text"
                placeholder="Mathematics"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("subject", {
                  required: "Subject required"
                })}
              />
            </div>

            {/* Institution */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Institution
              </label>

              <input
                type="text"
                placeholder="University of Dhaka"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("institution", {
                  required: "Institution required"
                })}
              />
            </div>

            {/* Experience */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Experience
              </label>

              <input
                type="text"
                placeholder="8 years"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("experience", {
                  required: "Experience required"
                })}
              />
            </div>

            {/* Hourly Fee */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Hourly Fee ($)
              </label>

              <input
                type="number"
                placeholder="25"
                min={0}
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("hourlyFee", {
                  required: "Fee required", min: {
                    value: 0,
                    message: "Cannot be negative"
                  },

                })}
              />
            </div>

            {/* Total Slots */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Total Slots
              </label>

              <input
                type="number"
                min={0}
                max={20}
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("totalSlot", {
                  required: "Slot required",
                  min: {
                    value: 0,
                    message: "Cannot be negative"
                  },
                  max: {
                    value: 20,
                    message: "Maximum 20"
                  }
                })}
              />

              {errors.totalSlot &&
                <p className="text-red-500">
                  {errors.totalSlot.message}
                </p>}
            </div>

            {/* Available Days */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Available Days
              </label>

              <input
                type="text"
                placeholder="Sun - Thu"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("availableDays")}
              />
            </div>

            {/* Available Time */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Available Time
              </label>

              <input
                type="text"
                placeholder="5 PM - 8 PM"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("availableTime")}
              />
            </div>

            {/* Date */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Session Start Date
              </label>

              <input
                type="date"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light custom-date"
                {...register("sessionStartDate")}
              />
            </div>

            {/* Location */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Location
              </label>

              <input
                type="text"
                placeholder="Dhaka"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("location")}
              />
            </div>

            {/* Teaching Mode */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Teaching Mode
              </label>

              <select
                className="select select-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("teachingMode")}
              >
                <option value="">Select</option>
                <option>Online</option>
                <option>Offline</option>
                <option>Hybrid</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Rating
              </label>

              <input
                type="number"
                step="0.1"
                min={0}
                max={5}
                placeholder="4.9"
                className="input input-bordered w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                {...register("rating")}
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">

              <label className="font-semibold text-primary-dark dark:text-bg-light">
                Description
              </label>

              <textarea
                className="textarea textarea-bordered h-32 w-full bg-bg-light text-primary-dark border-primary/20 dark:bg-bg-dark dark:text-bg-light"
                placeholder="Tutor description..."
                {...register("description")}
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2">

              <button
                type="submit"
                className="
            btn
            bg-primary-dark
            text-bg-light
            border-none
            w-full
             dark:bg-blue-800/50 dark:text-white
            "
              >
                Add Tutor
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default AddTutorpage;