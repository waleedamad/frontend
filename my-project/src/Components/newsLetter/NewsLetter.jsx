import React from 'react';

export default function NewsLetter() {
  return (
    <div className='w-full md:w-11/12 md:ms-12 h-auto py-24 bg-gradient-to-br from-pink-200 mt-12 flex justify-center'>
      <div className='w-full  '>
        <h1 className='text-center font-serif text-2xl md:text-3xl font-bold mb-4'>
          Get Exclusive Offers On Your Email
        </h1>
        <p className='text-center text-sm md:text-base mb-6 font-serif'>
          Subscribe to our newsletter and stay updated
        </p>
        <div className='flex justify-center items-center flex-wrap'>
          <input
            type="email"
            placeholder='Your Email'
            className='w-52 md:w-96 h-10 border border-gray-300 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-pink-500'
          />
          <button className='bg-black text-white md:px-6 px-2 md:py-2 py-2 rounded-full hover:bg-gray-800'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
