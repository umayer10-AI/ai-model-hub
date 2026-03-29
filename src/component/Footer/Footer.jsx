import React from 'react';
import img from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 text-center lg:text-left lg:grid-cols-5 gap-5 py-15'>
                <div className='space-y-3 col-span-2 md:col-span-3 lg:col-span-2'>
                    <div className='flex justify-center lg:justify-start items-center gap-3'>
                        <img className='w-12 object-cover' src={img} alt="" />
                        <h2 className='text-2xl font-bold'>AI Hub</h2>
                    </div>
                    <p className='text-gray-400 text-lg'>One subscription. Access to all frontier AI models in a single powerful platform.</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-red-400 font-bold text-lg'>Product</h2>
                    <ul className='text-gray-400 font-semibold space-y-3'>
                        <li><a href="#" className='hover:text-white'>Models</a></li>
                        <li><a href="#" className='hover:text-white'>Pricing</a></li>
                        <li><a href="#" className='hover:text-white'>Features</a></li>
                        <li><a href="#" className='hover:text-white'>API</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-red-400 font-bold text-lg'>Company</h2>
                    <ul className='text-gray-400 font-semibold space-y-3'>
                        <li><a href="#" className='hover:text-white'>About Us</a></li>
                        <li><a href="#" className='hover:text-white'>Blog</a></li>
                        <li><a href="#" className='hover:text-white'>Careers</a></li>
                        <li><a href="#" className='hover:text-white'>Contact</a></li>
                    </ul>
                </div>
                <div className='space-y-4'>
                    <h2 className='text-red-400 font-bold text-lg'>Legal</h2>
                    <ul className='text-gray-400 font-semibold space-y-3'>
                        <li><a href="#" className='hover:text-white'>Privacy Policy</a></li>
                        <li><a href="#" className='hover:text-white'>Terms of Service</a></li>
                        <li><a href="#" className='hover:text-white'>Cookie Settings</a></li>
                    </ul>
                </div>
            </div>
            <hr className='text-gray-700'/>
            <div className='flex flex-col lg:flex-row lg:justify-between items-center max-w-[90%] mx-auto py-8'>
                <h2 className='text-sm text-gray-400'>© 2026 AI Hub. All rights reserved.</h2>
                <h2 className='text-sm text-gray-400 hover:text-red-400'><a href="#">Made with ❤️ for AI enthusiasts</a></h2>
            </div>
        </div>
    );
};

export default Footer;