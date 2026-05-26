'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeChanger from './ThemeChanger';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setisOpen] = useState(false)
  const isActive = (url) => path === url;

  const handleSignout = async () => {
    await authClient.signOut({});
    router.push('/');
    document.getElementById('my_modal_4').close()
    setisOpen(false);
  };

  const {
    data: session,
    isPending,
  } = authClient.useSession();
  const user = session?.user
  const linkClass = (url) =>
    `px-3 py-1 rounded-md transition ${isActive(url)
      ? 'bg-white text-black'
      : 'hover:bg-white/10 text-white'
    }`;

console.log('isOpen:', isOpen, '| isPending:', isPending, '| session:', !!session);

  return (
    <div className="md:mb-16">
      <div className="navbar bg-primary-dark shadow-sm dark:text-white fixed z-50 top-0 left-0 w-full">
        <div className="flex items-center justify-between w-11/12 mx-auto">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">

            {/* MOBILE DROPDOWN */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li><Link className={isActive('/') ? 'bg-primary text-white' : ''} href="/">Home</Link></li>
                <li><Link className={isActive('/tutors') ? 'bg-primary text-white' : ''} href="/tutors">All Tutors</Link></li>

                {session ? (
                  <>
                    <li><Link className={isActive('/mytutors') ? 'bg-primary text-white' : ''} href="/mytutors">My Tutors</Link></li>
                    <li><Link className={isActive('/sessions') ? 'bg-primary text-white' : ''} href="/sessions">My Sessions</Link></li>
                    <li><Link className={isActive('/profile') ? 'bg-primary text-white' : ''} href="/profile">Profile</Link></li>

                    <li>
                      <button onClick={handleSignout}>Sign Out</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li><Link href="/signin">Sign In</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                  </>
                )}

                <li><Link className={isActive('/about') ? 'bg-primary text-white' : ''} href="/about">About Us</Link></li>
              </ul>
            </div>

            <Link href="/" className="text-xl font-bold italic text-white">
              MediQueue
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2 text-white">

              <li><Link className={linkClass('/')} href="/">Home</Link></li>
              <li><Link className={linkClass('/tutors')} href="/tutors">All Tutors</Link></li>

              {session && (
                <>
                  <li><Link className={linkClass('/mytutors')} href="/mytutors">My Tutors</Link></li>
                  <li><Link className={linkClass('/sessions')} href="/sessions">My Sessions</Link></li>
                </>
              )}

              <li><Link className={linkClass('/add')} href="/add">Add Tutor</Link></li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center space-x-4">

            <ThemeChanger />

            {isPending ? (
              <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
            ) : session ? (
              <div className="relative">

                <button
                  className=" relative 
                              w-15 h-15
                              btn rounded-full "
                  onClick={() => { setisOpen(!isOpen) }}
                >
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </button>

                {isOpen && (
                  <div className="
                        absolute top-17.5  right-0
                        bg-white shadow  rounded 
                        w-50 ">

                    <Link href={'/profile'} className='
                        btn w-full 
                        rounded-none 
                        bg-primary-dark' onClick={() => { setisOpen(false) }}>
                      Profile</Link>
                    <button className="btn btn-error w-full rounded-none text-white" onClick={() => document.getElementById('my_modal_4').showModal()}>Sign out</button>
                  </div>
                )}

              </div>

            ) : (
              <div className="space-x-3">
                <Link href="/signin" className="btn bg-[#134074]/20 text-white">
                  Sign in
                </Link>
                <Link href="/signup" className="btn bg-error/30 text-white">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Are you sure?</h3>
              <p className="py-4">
                Every session makes you stronger. Take a break, recharge, and come back better!
              </p>

              <div className="modal-action">

                <button onClick={() => {
                  document.getElementById('my_modal_4').close()
                }} className="btn">Close</button>


                <button
                  onClick={handleSignout}
                  className="btn btn-error text-white"
                >
                  Sign out
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;