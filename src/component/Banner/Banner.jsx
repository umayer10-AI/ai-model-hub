import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import img from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-10'>
            <div className='space-y-4 lg:space-y-6 order-2 lg:order-1'>
                <button className='py-2 px-4 font-semibold text-red-500 text-sm bg-red-100 border border-red-500 rounded-full'>✨ Frontier AI Models</button>
                <h2 className='text-4xl font-bold text-red-600'>One Subscription.</h2>
                <h2 className='text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent'>All the AIs You Need</h2>
                <p className='text-lg font-semibold'>Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.</p>
                <button className='flex items-center btn font-semibold bg-red-600 py-7 rounded-2xl px-5 text-base text-white'>Get Unlimited Access <span className='text-xl'><FaLongArrowAltRight /></span></button>
                <div className='flex lg:items-center flex-col lg:flex-row gap-2 lg:gap-5'>
                    <h2 className='flex items-center gap-1 font-semibold'><span className='text-lg'><MdDone /></span>50+ Frontier Models</h2>
                    <h2 className='flex items-center gap-1 font-semibold'><span className='text-lg'><MdDone /></span>No Usage Limits</h2>
                    <h2 className='flex items-center gap-1 font-semibold'><span className='text-lg'><MdDone /></span>Cancel Anytime</h2>
                </div>
            </div>
            <div className='flex justify-center lg:justify-end order-1 lg:order-2'>
                <img className='w-70 lg:w-85 image' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;