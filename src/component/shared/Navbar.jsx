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
  console.log(session);
  return (
    <div className="navbar  bg-base-100 shadow-sm ">

      <div className='flex items-center justify-between md:w-5xl lg:w-7xl mx-auto'>

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
              <li ><Link href={'/about'} > About Us</Link></li>
              {
                session ?
                  <>
                    <li ><Link href={'/mytutors'} >My Tutors </Link></li>
                    <li ><Link href={'/tutors'} >All tutors </Link></li>
                    <li ><Link href={'/sessions'} > My Sessions</Link></li>
                    <li>

                      <Link href={'/profile'}> Profile</Link>
                    </li>
                    <li>
                      <Link href={''} onClick={handleSignout}> Sign Out</Link>

                    </li>
                  </> :
                  <>
                    <li ><Link href='/signin' >Sign in </Link></li>
                    <li ><Link href='/signup' >Sign Up </Link></li>

                  </>
              }
            </ul>
          </div>
          <Link href={'/'} className='text-xl font-bold italic '>MediQueue</Link>
        </div>

        <div className="hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li ><Link href={'/'} >Home </Link></li>
            <li ><Link href={'/tutors'} >All tutors </Link></li>
            <li ><Link href={'/about'} > About Us</Link></li>
            {
              session ?
                <>
                  <li ><Link href={'/mytutors'} >My Tutors </Link></li>
                  <li ><Link href={'/tutors'} >All tutors </Link></li>
                  <li ><Link href={'/sessions'} > My Sessions</Link></li>
                </> :
                <>

                </>
            }
          </ul>
        </div>
        <div className=" hidden lg:flex">
          {

            isPending ? <p>Loading.....</p> :

              session ?
                <div className='space-x-4'>
                  <Link href={'/profile'}> Profile</Link>
                  <Link href={''} onClick={handleSignout}> Sign Out</Link>
                </div>

                :
                <div className='space-x-4'>
                  <Link href='/signin' >Sign in </Link>
                  <Link href='/signup' >Sign Up </Link>
                </div>


          }
        </div>
      </div>
    </div >
  );
};

export default Navbar;