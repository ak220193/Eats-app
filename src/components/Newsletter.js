import React from 'react'

const Newsletter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
    <div className='mx-auto grid lg:grid-cols-3'>
    
    <div className='lg:col-span-2 my-4'>
    <h1 className='mx-auto flex flex-wrap text-white font-bold'> Stay Updated With Our Resturant Offers and Discounts</h1>
    <p className='text-white-500 px-2 py-2 m-2 font-bold'> Subscribe to Our Newsletter for More Beneifts </p>
    </div>
    <div className='my-4'>
    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
    <input 
    type='Email'
    placeholder='Email'
    className='p-3 flex w-full rounded-md text-black'
    />
    <button className='bg-orange-500 text-white rounded-md font-medium w-[190px] h-[45px] ml-4 my-6 px-6 border-none'> Subscribe </button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Newsletter