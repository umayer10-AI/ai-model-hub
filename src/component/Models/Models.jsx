import React, { useEffect, useState } from 'react';
import ModelsCart from './ModelsCart';
import axios from "axios"

const Models = () => {

    const [model, setM] = useState([])
    const [loading, setL] = useState(true)

    useEffect(() => {
        const a = async() => {
            try{
                setL(true)
                const b = await axios.get("models.json")
                setM(b.data)
            }
            finally{
                setL(false)
            }
        }
        a()
    },[])
    
    if(loading) return <span className="loading loading-infinity loading-xl"></span>

    return (
        <div>
            <div className='space-y-3 mb-10'>
                <h2 className='text-4xl font-bold text-center'>Choose Your AI Model</h2>
                <h2 className='text-xl font-semibold text-center text-gray-400'>One subscription gives you access to all frontier AI models</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    model.map(v => <ModelsCart key={v.id} p={v}></ModelsCart>)
                }
            </div>
        </div>
    );
};

export default Models;