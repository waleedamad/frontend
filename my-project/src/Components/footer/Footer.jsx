import React from 'react'
import Whatsapp_Image from '../Assests/Whatsapp.jpeg'
import Instargam_Image from '../Assests/Instagram.jpeg'
import Pintrest_Image from '../Assests/Pintrest.jpeg'
import Logo from '../Assests/logo.jpeg'

export default function Footer() {
  return (
    <div className='w-full py-12 bg-gradient-to-tl from-gray-100 mt-4'>
        <div className='flex justify-center items-center'>
            <img src={Logo} alt="" className='w-32'/>
            <p className='font-serif font-bold text-2xl'>SHOPPER</p>
        </div>
        
            <ul className='flex justify-center gap-5 font-serif'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex justify-center gap-4 items-center'>
                <div>
                    <img src={Whatsapp_Image} alt="" className='w-12'/>
                </div>
                <div>
                    <img src={Instargam_Image} alt="" className='w-7'/>
                </div>
                <div>
                    <img src={Pintrest_Image} alt="" className='w-7'/>
                </div>
            </div>
        <div className=''>
            <hr />
            <p className='flex justify-center items-center mt-5 font-serif '>&copy;2024 All Right Reserved.</p>
        </div>
    </div>
  )
}
