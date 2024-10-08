import React from 'react';
import byeeHand from '../Assests/byee-hand.jpeg';
import HeroImage from '../Assests/Heroimg.jpg'; // Import the new HD image

export default function Hero() {
  return (
    <>
      {/* Add the gradient background */}
      <div className='w-full min-h-screen flex flex-col-reverse md:flex-row justify-between items-center bg-gradient-to-b from-pink-200 p-8'>
        
        {/* Text Section */}
        <div className='md:w-1/2 mt-16 md:mt-0 text-center md:text-left md:ms-48'>
          <p className='font-serif text-lg md:text-xl mt-6 md:mt-0'>NEW ARRIVALS ONLY</p>
          <p className='flex justify-center md:justify-start mb-2 font-bold font-serif text-4xl md:text-4xl mt-2'>
            New
            <span><img src={byeeHand} alt="Bye Hand" className='ml-2' width={40} /></span>
          </p>
          <p className='font-bold font-serif text-3xl md:text-4xl'>
            Collections For <br />Everyone
          </p>
          <button className='rounded bg-red-700 text-white px-6 py-2 mt-6 font-serif'>
            Latest Collection
          </button>
        </div>

        {/* Image Section with 3D Effect */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <img
            src={HeroImage}
            alt="HD Hero"
            className='md:w-80 w-64 md:me-36 object-cover rounded-lg shadow-2xl transition-transform transform-gpu scale-105 rotate-2 translate-y-2 duration-500'
          />
        </div>

      </div>
    </>
  );
}
