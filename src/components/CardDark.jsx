const CardDark = ({product}) => {
  return (
    <a href={product.url} target='blank' className='bg-[#353739] hover:cursor-pointer rounded-lg overflow-hidden drop-shadow-md hover:drop-shadow-lg font-circular mb-1 mx-1'>
        <img className='h-40 w-full object-cover' src={product.coverImg} />
        <div className='p-4'>
            <h3 className='text-lg my-1 text-white'>{product.title}</h3>
            <p className='text-gray-500 text-sm'>{product.desc}</p>
        </div>
    </a>
  )
}

export default CardDark