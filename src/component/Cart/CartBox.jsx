import React from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { toast,Bounce } from 'react-toastify';

const CartBox = ({p,h}) => {

    const a = () => {
        h(p)
        toast.success('Item removed from the cart', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-3 hover:border-red-500 border border-gray-300 p-4 rounded-2xl bg-gray-100'>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='bg-white p-3 rounded-2xl'>
                    <img className='w-15 h-15 object-contain' src={p.image} alt="Photo" />
                </div>
                <div className='space-y-1'>
                    <h2 className='text-2xl font-bold text-center lg:text-left'>{p.title}</h2>
                    <p className='text-sm text-gray-400 text-center lg:text-left'>{p.description}</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <div>
                    <h2 className='text-3xl font-bold'>$<span>{p.price}</span></h2>
                    <p className='text-sm text-gray-500'>per month</p>
                </div>
                <h2 onClick={a} className='text-red-500 text-4xl lg:text-2xl'><IoMdCloseCircle /></h2>
            </div>
        </div>
    );
};

export default CartBox;