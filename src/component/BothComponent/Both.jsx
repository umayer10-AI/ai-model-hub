import React, { useState } from 'react';
import Models from '../Models/Models';
import Cart from '../Cart/Cart';

const Both = () => {

    const [show, setShow] = useState('model')
    const [info, setI] = useState([])
    const [dollar, setD] = useState(0)

    const h = (e) => {
        setI(c => c.filter(v => v.id !== e.id))
        setD(c => c - Number(e.price))
        console.log(e.price)
    }

    const g = (e) => {
        setD(c => c + Number(e.price))
    }
    console.log(dollar)

    return (
        <div className='mb-10'>
            <div className='flex justify-center items-center max-w-[90%] mx-auto'>
                <div className='flex gap-4 my-10'>
                    <button onClick={() => setShow("model")} className={`rounded-full ${show === 'model' ? 'bg-pink-600 text-white btn' : 'text-black btn bg-red-100'} px-15 text-lg font-semibold`}>Models</button>
                    <button onClick={() => setShow("cart")} className={`rounded-full ${show === 'cart' ? 'bg-pink-600 text-white btn' : 'text-black btn bg-red-200'} px-15 text-lg font-semibold`}>Cart(<span>{info.length}</span>)</button>
                </div>
            </div>

            {
                show === 'model' && <Models info={info} setI={setI} g={g}></Models>
            }

            {
                show === 'cart' && <Cart info={info} setI={setI} h={h} dollar={dollar} setD={setD}></Cart>
            }


        </div>
    );
};

export default Both;