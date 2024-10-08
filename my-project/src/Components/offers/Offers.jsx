import React from 'react';
import Exclusive from '../Assests/exclusive.jpeg';

export default function Offers() {
  return (
    <div className='w-full font-serif mt-24'>
      <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start bg-gradient-to-br from-pink-200 p-6 md:p-10 mx-auto max-w-6xl rounded-lg shadow-lg'>
        
        
        <div className='flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4'>
          <h1 className='text-xl md:text-3xl font-bold md:ms-52 md:mt-24'>Exclusive</h1>
          <h1 className='text-lg md:text-3xl font-bold md:ms-44'>Offers For You</h1>
          <p className='text-base md:text-xl md:ms-32'>ONLY ON BEST SELLERS PRODUCTS</p>
          <button className='rounded-full px-6 py-2 bg-red-700 text-white mt-4 md:ms-56'>
            Check Now
          </button>
        </div>
        
        
        <div className='flex justify-center md:justify-end mt-8 md:mt-0 md:w-1/2'>
          <img src={Exclusive} alt="Exclusive" className='md:w-80 w-64 md:me-36 object-cover rounded-lg shadow-2xl transition-transform transform-gpu scale-105 rotate-2 translate-y-2 duration-500' />
        </div>
      </div>
    </div>
  );
}
