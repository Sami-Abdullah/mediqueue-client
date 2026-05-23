import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';
import { GoStarFill } from 'react-icons/go';


const AllTutorPage = async ({ searchParams }) => {
  const { subject, location, minFee, maxFee } = await searchParams;

  // Build query string
  const queryParams = new URLSearchParams();
  if (subject) queryParams.append('subject', subject);
  if (location) queryParams.append('location', location);
  if (minFee) queryParams.append('minFee', minFee);
  if (maxFee) queryParams.append('maxFee', maxFee);

  const queryString = queryParams.toString();
  const url = `http://localhost:5000/tutors${queryString ? `?${queryString}` : ''}`;

  const data = await fetch(url, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!data.ok) {
    throw new Error('Failed to fetch tutors');
  }

  const tutors = await data.json();


  const subjects = [...new Set(tutors.map(t => t.subject).filter(Boolean))];
  const locations = [...new Set(tutors.map(t => t.location).filter(Boolean))];

  return (
    <section className="min-h-screen bg-[#eef4ed] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b2545] mb-4">
            Find Your <span className="text-[#134074]">Perfect Tutor</span>
          </h1>
          <p className="text-lg text-[#13315c] max-w-2xl mx-auto">
            Browse through our experienced tutors and find the right match for your learning journey
          </p>
        </div>


        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              name="subject"
              placeholder="Search by subject..."
              defaultValue={subject || ''}
              className="px-4 py-2 border border-[#8da9c4] rounded-lg focus:outline-none focus:border-[#134074]"
            />
            <select
              name="location"
              defaultValue={location || ''}
              className="px-4 py-2 border border-[#8da9c4] rounded-lg focus:outline-none focus:border-[#134074]"
            >
              <option value="">All Locations</option>
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>


            <button
              type="submit"
              className="px-4 py-2 bg-[#134074] text-[#eef4ed] rounded-lg hover:bg-[#0b2545] transition-colors"
            >
              Search
            </button>
            {(subject || location) && (
              <Link
                href="/tutors"
                className="px-4 py-2 border-2 border-[#134074] text-[#134074] rounded-lg hover:bg-[#134074]/10 transition-colors text-center"
              >
                Clear Filters
              </Link>
            )}
          </form>
        </div>


        <div className="mb-6">
          <p className="text-[#13315c]">
            Found <span className="font-bold text-[#134074]">{tutors.length}</span> tutors
          </p>
        </div>

        {tutors.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-[#13315c] text-lg mb-4">No tutors found matching your criteria.</p>
            <Link
              href="/tutors"
              className="inline-block px-6 py-2 bg-[#134074] text-[#eef4ed] rounded-lg hover:bg-[#0b2545] transition-colors"
            >
              View All Tutors
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tutors.map((tutor, index) => (
              <div
                key={index}
                className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-110 w-full bg-[#8da9c4]/20">
                  {tutor.photo ? (
                    <Image
                      src={tutor.photo}
                      alt={tutor.name}
                      fill
                      className="object-cover "
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-5xl text-[#8da9c4]"><FaRegUserCircle /></span>
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <h2 className="text-xl font-bold text-[#0b2545] ">
                    {tutor.name}
                  </h2>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-[#134074]/10 text-[#134074] rounded text-xs font-semibold">
                      {tutor.subject}
                    </span>

                    <span className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500"><GoStarFill /></span> {tutor.rating}
                    </span>

                  </div>
                  <p className="text-sm text-[#13315c] line-clamp-2">
                    {tutor.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#8da9c4]/20">
                    <div>
                      <p className="text-xs text-[#8da9c4]">Hourly Fee</p>
                      <p className="text-xl font-bold text-[#134074]">${tutor.hourlyFee}</p>
                    </div>
                    <Link
                      href={`/tutors/${tutor._id}`}
                      className="px-4 py-2 bg-[#134074] text-[#eef4ed] rounded-lg hover:bg-[#0b2545] transition-colors text-sm font-semibold"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllTutorPage;