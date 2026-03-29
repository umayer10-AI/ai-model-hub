import React from 'react';
import CartBox from './CartBox';
import { toast,Bounce } from 'react-toastify';

const Cart = ({info,setI,h,total}) => {

    const a = () => {
        setI([])
        toast.success('Payment Successful!', {
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
        <div className='max-w-[70%] mx-auto'>
            <div>
                <h2 className='text-4xl font-bold pb-10'>Your Cart</h2>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    info.map(v => <CartBox key={v.id} p={v} h={h}></CartBox>)
                }
            </div>

            {
                info.length !== 0 && (
                    <div>
                        <div className='flex justify-between items-center p-8 bg-black rounded-3xl my-10'>
                            <h2 className='text-3xl font-bold text-white'>Total</h2>
                            <h2 className='text-red-400 text-3xl font-bold'>$<span>{total}</span></h2>
                        </div>
                        <div onClick={a} className='bg-red-600 rounded-2xl shadow-lg shadow-red-500/50 btn w-full py-9 hover:bg-red-500'>
                            <h2 className='text-2xl font-bold text-white text-center'>Proceed to Checkout</h2>
                        </div>
                    </div>
                )
            }

            {
                info.length === 0 && <h2 className='text-3xl font-semibold text-gray-400 text-center py-20 border rounded-2xl bg-blue-100'>Your cart is empty</h2>
            }

        </div>
    );
};

export default Cart;