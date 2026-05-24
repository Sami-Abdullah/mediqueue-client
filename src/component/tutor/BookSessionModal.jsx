'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'

const BookSessionModal = ({ id }) => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  const user = session?.user;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {

    data.teacherid = id
    data.studentid = user.id
    console.log(data);
    const res = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)

    })
    document.getElementById('my_modal_1').close()
    if (res) {
      toast.success('Session booked')
    } else {
      toast.error('Try again later')
    }
  }


  return (
    <div>
      <button className="btn bg-[#134074] text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>
        Book Session
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Book a Session</h3>

          <form method="dialog">
            {/* Close button in top-right corner */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


            {/* Session Type */}
            <div>
              <label className="label text-sm font-medium mb-1 block">Session Type</label>
              <select className="select select-bordered w-full" name="sessionType" {...register('session', { required: true })}>
                <option value="">Select session type</option>
                <option value="consultation">Free Consultation (30 min)</option>
                <option value="standard">Standard Session (1 hour)</option>
                <option value="premium">Premium Session (2 hours)</option>
                <option value="group">Group Session</option>
              </select>
              {errors.time && <span className='text-error'>Session Type is required</span>}
            </div>


            <div>
              <label className="label text-sm font-medium mb-1 block">Preferred Date</label>
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
                {...register('date', { required: true })}
              />
              {errors.date && <span className='text-error'>Date is required</span>}
            </div>

            <div>
              <label className="label text-sm font-medium mb-1 block">Preferred Time</label>
              <select className="select select-bordered w-full" name="time" {...register('time', { required: true })}>
                <option value="">Select time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
              {errors.time && <span className='text-error'>Time is required</span>}
            </div>




            {/* Form Actions */}
            <div className="modal-action mt-6">
              <button
                type="submit"
                className="btn bg-[#134074] text-white hover:bg-[#0e2d5a]"
              >
                Submit Booking
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById('my_modal_1').close()}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookSessionModal;