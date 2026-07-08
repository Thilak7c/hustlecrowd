import React from 'react'

const Card2 = ({product}) => {
  return (
    <div className='bg-white hover:cursor-pointer rounded-xl overflow-hidden drop-shadow-md font-circular mb-1 mx-1'>
        <img className='h-56 w-full object-cover' src={product.coverImg} />
        <div className='p-8'>
            <h3 className='text-2xl my-1'>{product.title}</h3>
            <p className='text-gray-500 text-xl'>{product.desc}</p>
        </div>
    </div>
  )
}

export default Card2