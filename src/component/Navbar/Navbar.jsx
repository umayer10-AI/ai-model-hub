import React from 'react';
import img from "../../assets/logo.png"
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='max-w-[95%] mx-auto flex flex-col lg:flex-row gap-3 justify-between items-center py-3'>
            <div className='flex items-center gap-1.5'>
                <img className='w-12 object-cover' src={img} alt="" />
                <h2 className='text-xl font-bold'>AI Hub</h2>
            </div>
            <div className='flex items-center text-base lg:text-lg font-semibold gap-5'>
                <h2 className='hover:bg-gray-200 px-3 py-1.5 rounded-sm active:text-white active:bg-black cursor-pointer'>Home</h2>
                <h2 className='hover:bg-gray-200 px-3 py-1.5 rounded-sm active:text-white active:bg-black cursor-pointer'>About</h2>
                <h2 className='hover:bg-gray-200 px-3 py-1.5 rounded-sm active:text-white active:bg-black cursor-pointer'>Services</h2>
                <h2 className='hover:bg-gray-200 px-3 py-1.5 rounded-sm active:text-white active:bg-black cursor-pointer'>Contact</h2>
            </div>
            <div className='flex items-center gap-3'>
                <button className='btn text-red-600 rounded-full text-xl font-bold py-2 px-2.5'><LuShoppingCart /></button>
                <button className='btn bg-red-500 text-white font-bold rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;