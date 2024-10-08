import React, { useContext, useState } from 'react';
import logo from '../Assests/logo.jpeg';
import addToCart from '../Assests/add-to-cart.jpeg';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {totalCartItems}=useContext(ShopContext)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className='flex items-center justify-between flex-wrap py-1 px-4 md:px-10 shadow-lg font-serif'>
        {/* Logo Section */}
        <div className='flex items-center gap-4'>
          <img src={logo} alt="Logo" className="w-16 h-auto md:w-20" />
          <h1 className='font-bold text-xl md:text-2xl'>SHOPPER</h1>
        </div>

        {/* Navigation Links Section (hidden on mobile) */}
        <div className='hidden md:flex'>
          <ul className='flex gap-6 md:gap-8 text-lg md:text-xl'>
            <div className="group hover:-mt-3 transition-all">
              <li className="cursor-pointer">
                <Link to='/'>Shop</Link>
              </li>
              <div className='w-10 h-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
            <div className="group hover:-mt-3 transition-all">
              <li className="cursor-pointer">
                <Link to='/men'>Men</Link>
              </li>
              <div className='w-10 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
            <div className="group hover:-mt-3 transition-all">
              <li className="cursor-pointer">
                <Link to='/women'>Women</Link>
              </li>
              <div className='w-10 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
            <div className="group hover:-mt-3 transition-all">
              <li className="cursor-pointer">
                <Link to='/kids'>Kids</Link>
              </li>
              <div className='w-10 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className='md:hidden flex items-center'>
          <button className='text-lg font-bold' onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Login and Cart Section */}
        <div className='flex gap-4 items-center relative'>
          <Link to='/loginSignup'>
            <button className='text-sm md:text-lg rounded-full border border-black px-4 py-1 hover:bg-gray-200 transition'>
              Login
            </button>
          </Link>

          <div className="relative">
            <Link to='/cart'>
              <img src={addToCart} alt="Cart" className='w-8 h-auto md:w-10' />
            </Link>
            <div className='absolute top-0 right-0 bg-red-600 text-white text-xs md:text-sm rounded-full w-5 h-5 flex items-center justify-center'>
              {totalCartItems()}
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Mobile Menu (visible when the menu is toggled open) */}
      {isMobileMenuOpen && (
        <div className='block md:hidden'>
          <ul className='flex flex-col gap-4 text-lg mt-4 px-4'>
            <li><Link to='/'>Shop</Link></li>
            <li><Link to='/men'>Men</Link></li>
            <li><Link to='/women'>Women</Link></li>
            <li><Link to='/kids'>Kids</Link></li>
          </ul>
        </div>
      )}
    </>
  );
};
