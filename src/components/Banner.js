import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  }

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div className='w-[400vw] h-full flex transition-transform duration-1000' style={{transform:`translate(-${currentSlide * 100}vw)`}}>
          <img src={data[0]} alt="imgone" className='w-screen h-full object-cover' loading='priority' />
          <img src={data[1]} alt="imgone" className='w-screen h-full object-cover' loading='priority' />
          <img src={data[2]} alt="imgone" className='w-screen h-full object-cover' loading='priority' />
          <img src={data[3]} alt="imgone" className='w-screen h-full object-cover' loading='priority' />
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowLeft/>
          </div>
          <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowRight/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;