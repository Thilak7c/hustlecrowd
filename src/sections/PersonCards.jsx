import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';
 

const PersonCards = ({items}) => {

  return (
    <div className='w-full bg-[#f9f9f9] pb-32'>
        <div className='flex justify-center'>
            <div className='place-content-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 text-black'>
                {items.map((item, index) => 
                    <a href={item.url} target='blank' className='max-w-[300px] bg-white hover:cursor-pointer rounded-xl overflow-hidden drop-shadow-md hover:drop-shadow-lg font-circular mb-1 mx-1'>
                        <img className='h-64 w-full object-cover' src={item.coverImg} />
                        <div className='p-8'>
                            <h3 className='text-2xl my-1'>{item.title}</h3>
                            <p className='text-gray-500 text-xl'>{item.desc}</p>
                        </div>
                    </a>
                )} 
            </div> 
        </div>
    </div>
  )
}

export default PersonCards


