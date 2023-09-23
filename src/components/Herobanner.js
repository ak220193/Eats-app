import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Herobanner = () => {
  const sliders = [
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const PrevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const NextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveFirstSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1520] h-[500px] w-full py-4 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 left-5 text-2xl rounded-full bg-orange-500 p-1'>
        <BsChevronCompactLeft onClick={PrevSlider} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] transform -translate-y-1/2 right-5 text-2xl rounded-full bg-orange-500 p-1'>
        <BsChevronCompactRight onClick={NextSlider} />
      </div>
      <div className='flex justify-center py-2'>
        {sliders.map((sliderItem, slideIndex) => (
          <div
            key={slideIndex}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? 'text-orange-500' : 'text-gray-300'
            }`}
            onClick={() => moveFirstSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Herobanner;
