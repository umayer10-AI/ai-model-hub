import React, { useState } from 'react';
import { toast,Bounce } from 'react-toastify';

const ModelsCart = ({p,info,setI,g}) => {

    const [f, setF] = useState(false)

    const a = () => {
        setI(c => c.includes(p) ? c : [...c,p])
        setF(true)
        g(p)
        if(info.includes(p)){
            toast.error('Item already in cart!', {
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
        else{
            toast.success('Item added to cart!', {
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
    }
    
    return (
        <div className='rounded-2xl overflow-hidden shadow-xl h-full group border border-zinc-300'>
            <div className='bg-gray-200 p-7 flex justify-center relative'>
                <img className='w-30 h-30 object-center object-contain transition duration-500 group-hover:scale-110' src={p.image} alt="logo" />
                <span className={`absolute text-xs top-4 right-7 ${p.status === "popular" && 'bg-red-500'}
                ${p.status === "favourite" && 'bg-orange-500'} ${p.status === "mostwanted" && 'bg-green-500'} rounded-full font-semibold text-white px-3 py-1`}>{p.status === "popular" && '🔥 POPULAR' || p.status === "favourite" && '❤️ FAVAOURITE' || p.status === "mostwanted" && '⭐ MOST WANTED'}</span>
            </div>
            <div className='p-5 space-y-4 h-full'>
                <h2 className='text-2xl font-semibold'>{p.title}</h2>
                <p className='text-sm text-gray-400'>{p.description}</p>
                <p className={`text-3xl font-bold ${p.price === 0 && 'text-green-500'}`}>{p.price === 0 ? `Free` : (
                    <>
                        ${p.price}
                        <span className="text-base font-semibold"> /month</span>
                    </>
                    )}</p>
                <button onClick={a} className='btn w-full font-semibold bg-red-600 py-7 hover:bg-red-500 rounded-2xl text-lg text-white'>{f ? "Subscribed" : "Subscribe Now"}</button>
            </div>
        </div>
    );
};

export default ModelsCart;