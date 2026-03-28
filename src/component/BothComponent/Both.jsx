import React from 'react';
import Models from '../Models/Models';

const Both = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <div className='flex justify-center items-center'>
                <div className='flex gap-4 my-10'>
                    <button className='btn rounded-full bg-pink-600 px-15 font-semibold text-white'>Models</button>
                    <button className='btn rounded-full bg-pink-600 px-15 font-semibold text-white'>Cart(<span>0</span>)</button>
                </div>
            </div>
            <div>
                <Models></Models>
            </div>
        </div>
    );
};

export default Both;