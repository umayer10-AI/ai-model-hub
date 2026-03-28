import React from 'react';
import img from "../../assets/logo.png"
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='max-w-[95%] mx-auto flex flex-col lg:flex-row gap-3 justify-between items-center py-3'>
            <div className='flex items-center gap-1.5'>
                <img className='w-12 object-cover' src={img} alt="" />
                <h2 className='text-xl font-bold'>Ai Hub</h2>
            </div>
            <div className='flex items-center text-base lg:text-lg font-semibold gap-10'>
                <h2>Home</h2>
                <h2>About</h2>
                <h2>Services</h2>
                <h2>Contact</h2>
            </div>
            <div className='flex items-center gap-3'>
                <button className='btn text-red-600 rounded-full text-xl font-bold py-2 px-2.5'><LuShoppingCart /></button>
                <button className='btn bg-red-500 text-white font-bold rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default Navbar;