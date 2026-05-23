'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const paths = [
    { name: 'Home', url: '/' },
    { name: 'All Tutors', url: '/tutors' },
    { name: 'Add Tutor', url: '/add' },
    { name: 'My Tutors', url: '/mytutors' },
    { name: 'My Sessions', url: '/sessions' },
  ]

  const handleSignout = async () => {
    await authClient.signOut({

    });
  }
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()

  return (
    <div className="navbar  bg-[#eef4ed] shadow-sm ">

      <div className='flex items-center justify-between w-11/12 mx-auto'>

        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li ><Link href={'/'} >Home </Link></li>
              <li ><Link href={'/tutors'} >All tutors </Link></li>
              {
                session ?
                  <>
                    <li ><Link href={'/mytutors'} >My Tutors </Link></li>
                    <li ><Link href={'/sessions'} > My Sessions</Link></li>
                    <li>

                      <Link href={'/profile'}> Profile</Link>
                    </li>
                    <li>
                      <Link href={''} onClick={handleSignout}> Sign Out</Link>

                    </li>
                  </> :
                  <>
                    <li ><Link href='/signin ' >Sign in </Link></li>
                    <li ><Link href='/signup' >Sign Up </Link></li>

                  </>
              }
              <li ><Link href={'/about'} > About Us</Link></li>
            </ul>
          </div>
          <Link href={'/'} className='text-xl font-bold italic '>MediQueue</Link>
        </div>

        <div className="hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li ><Link href={'/'} >Home </Link></li>
            <li ><Link href={'/tutors'} >All tutors </Link></li>
            {
              session ?
                <>
                  <li ><Link href={'/mytutors'} >My Tutors </Link></li>

                  <li ><Link href={'/sessions'} > My Sessions</Link></li>
                </> :
                <>

                </>
            }
            <li ><Link href={'/add'} > Add Tutor</Link></li>
          </ul>
        </div>
        <div className=" hidden lg:flex">
          {

            isPending ? <p>Loading.....</p> :

              session ?
                <div className='space-x-4'>
                  <Link href={'/profile'} className='btn bg-[#0b2545] text-white px-7'> Profile</Link>


                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button className="btn btn-error text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>Sign out</button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box ">
                      <h3 className="font-bold text-lg">Are you sure?</h3>
                      <p className="py-4">Every session makes you stronger. Take a break, recharge, and come back even better!</p>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                        <div onClick={handleSignout} className='btn btn-error text-white'>Sign out</div>
                      </div>
                    </div>
                  </dialog>





                </div>

                :
                <div className='space-x-4'>
                  <Link href='/signin' className='btn bg-[#134074]/20'>Sign in </Link>
                  <Link href='/signup' className='btn bg-error/30'>Sign Up </Link>
                </div>


          }
        </div>
      </div>
    </div >
  );
};

export default Navbar;