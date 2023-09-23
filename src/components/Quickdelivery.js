import React from 'react';

const Quickdelivery = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <h3 className='text-orange-500 font-bold text-2xl text-center'>
                Lighting - Fast Delivery
            </h3>
            <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
                <img
                    className='w-[550px] max-auto my-4'
                    src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
                    alt='Mobile App'
                />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>Get the App</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Faster And Best Services For You
                    </h1>
                    <div className='max-h-[250px] overflow-y-auto'>
                        <p className='flex jutify-center text-center m-1 p-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            molestiae delectus culpa hic assumenda, voluptate reprehenderit
                            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
                            voluptate reprehenderit dolore autem cum ullam sed odit
                            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            molestiae delectus culpa hic assumenda,

                        </p>
                    </div>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quickdelivery;
