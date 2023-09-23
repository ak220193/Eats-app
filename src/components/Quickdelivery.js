import React from 'react';

const Quickdelivery = () => {
    return (
        <div className='w-full bg-white py-8 px-4 md:py-16 md:px-16'>
            <h3 className='text-orange-500 font-bold text-xl md:text-2xl text-center'>
                Lighting - Fast Delivery
            </h3>
            <div className='w-full md:max-w-6xl mx-auto md:flex md:items-center'>
                <img
                    className='w-full md:w-1/2 my-4 md:my-0 md:pr-4'
                    src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
                    alt='Mobile App'
                />
                <div className='md:w-1/2'>
                    <p className='text-[#00df9a] font-bold text-center md:text-left md:ml-2'>
                        Get the App
                    </p>
                    <h1 className='text-xl md:text-4xl font-bold py-2 text-center md:text-left'>
                        Faster & Best Services For You.
                    </h1>
                    <div className='max-h-[250px] overflow-y-auto'>
                        <p className='text-center md:text-left m-1 p-2'>
                            At Delicoius, we're dedicated to bringing you the fastest and most
                            convenient food delivery service. With our easy-to-use mobile app,
                            you can enjoy a wide variety of delicious dishes delivered right to
                            your doorstep. Whether you're craving pizza, burgers, salads, or
                            more, we've got you covered. Join the Delicoius community today and
                            experience the future of food delivery.
                        </p>
                    </div>
                    <div className='text-center md:text-left mt-4'>
                        <button className='bg-black text-[#00df9a] w-full md:w-[200px] rounded-md font-medium py-2 md:py-3'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quickdelivery;
