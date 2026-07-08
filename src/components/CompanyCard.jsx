import React from 'react'

const CompanyCard = ({product}) => {
  return (
    <div className='bg-white hover:cursor-pointer rounded-xl overflow-hidden drop-shadow-md mb-1 mx-1'>
        <img className='h-64 w-full object-cover' src={product.coverImg} />
    </div>
  )
}

export default CompanyCard