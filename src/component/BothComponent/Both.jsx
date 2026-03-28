import React, { useState } from 'react';
import Models from '../Models/Models';
import Cart from '../Cart/Cart';

const Both = () => {

    const [show, setShow] = useState('model')
    const [info, setI] = useState([])

    const h = (id) => {
        setI(c => c.filter(v => v.id !== id))
    }

    return (
        <div className=''>
            <div className='flex justify-center items-center max-w-[90%] mx-auto'>
                <div className='flex gap-4 my-10'>
                    <button onClick={() => setShow("model")} className={`rounded-full ${show === 'model' ? 'bg-pink-600 text-white btn' : 'text-black btn bg-red-100'} px-15 text-lg font-semibold`}>Models</button>
                    <button onClick={() => setShow("cart")} className={`rounded-full ${show === 'cart' ? 'bg-pink-600 text-white btn' : 'text-black btn bg-red-200'} px-15 text-lg font-semibold`}>Cart(<span>{info.length}</span>)</button>
                </div>
            </div>

            {
                show === 'model' && <Models info={info} setI={setI}></Models>
            }

            {
                show === 'cart' && <Cart info={info} h={h}></Cart>
            }


        </div>
    );
};

export default Both;