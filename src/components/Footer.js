import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaInstagramSquare, FaYoutube, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
            <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-orange-500'>  Spice Bistro </h1>
                    <p className='py-2 font-medium'>
                    Experience Culinary Delights at Spice Bistro
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6 cursor pointer'>
                    <FaFacebookSquare className='' size={35} />
                    <FaDribbbleSquare className='' size={35} />
                    <FaYoutube className='' size={35}  />
                    <FaInstagramSquare  className='' size={35} />
                    <FaGithub   className=' 'size={35} />
                    
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                <div> 
                <h1 className='font-medium text-orange-500'> Location </h1> 
                <ul>
                <li className='py-2 text-sm'>NewYork</li>
                <li className='py-2 text-sm'>London</li>
                <li className='py-2 text-sm'>USA</li>
                <li className='py-2 text-sm'>India</li>
                </ul>
                </div>
                <div> 
                <h1 className='font-medium text-orange-500'> Quick Links </h1> 
                <ul>
                <li className='py-2 text-sm'>About US</li>
                <li className='py-2 text-sm'>Account</li>
                <li className='py-2 text-sm'>Terms & Conditons</li>
                <li className='py-2 text-sm'>Refund policy</li>
                </ul>
                </div>
                <div> 
                <h1 className='font-medium text-orange-500'> Feedback </h1> 
                <ul>
                <li className='py-2 text-sm'>Support</li>
                <li className='py-2 text-sm'>Grievances</li>
                <li className='py-2 text-sm'>Compliants</li>
                <li className='py-2 text-sm'>Chat Support</li>
                </ul>
                </div>
               
                </div>
                <div>
                <p className='font-medium text-white'>  © CopyRight 2023 <span> All Rights Reserved</span> </p>
               </div>
            </div>

        </div>
    )
}

export default Footer