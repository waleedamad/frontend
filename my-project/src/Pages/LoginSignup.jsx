import React from 'react';

export default function LoginSignup() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white border border-gray-200 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 font-serif">
          Register
        </h1>
        <form className="space-y-6">
        
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          
        
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          
          <div className="text-center mt-6">
            <button className="w-full h-12 bg-green-600 text-white font-serif font-semibold rounded-md hover:bg-green-700 transition-all">
              Register
            </button>
          </div>
          
            <p className='font-serif'>Already Have an Account?<button className='text-red-600'> Login here</button></p>
            <p className='flex gap-2 items-center font-serif'>
            <input type="checkbox" name="" id="" className='rounded-full text-base'/>
            I agree with your terms & privacy policy.
            </p>
        </form>
      </div>
    </div>
  );
}
