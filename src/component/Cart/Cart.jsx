import React from 'react';
import CartBox from './CartBox';

const Cart = ({info,h}) => {
    return (
        <div className='mb-10 max-w-[70%] mx-auto'>
            <div>
                <h2 className='text-4xl font-bold pb-10'>Your Cart</h2>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    info.map(v => <CartBox key={v.id} p={v} h={h}></CartBox>)
                }
            </div>

            {
                info.length === 0 && <h2 className='text-3xl font-semibold text-gray-400 text-center my-10'>Your cart is empty</h2>
            }

        </div>
    );
};

export default Cart;