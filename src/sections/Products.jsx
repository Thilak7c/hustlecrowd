// Products.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';
 

const Products = ({title, products}) => {

  return (
    <div className='w-full bg-[#f9f9f9] pb-32 pt-16 px-4'>
        <div className='container'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 text-black'>
                {products.map((product, index)=> <Card key={index} product={product} /> )} 
            </div> 
        </div>
    </div>
  )
}

export default Products


