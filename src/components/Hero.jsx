import React from 'react';
import Button from './Button';
import { Parallax } from 'react-parallax';
import IMG from '../img/hero-bg.png';

const Hero = () => {
  return (
    <Parallax className='z-0' bgImage={IMG} strength={250}>
      <div className='flex flex-row-reverse bg-cover py-[100px] px-[200px] max-lg:flex-col w-screen h-screen font-poppins items-center justify-end gap-4'>
          <div className='flex flex-col w-[576px] gap-2 text-white'>
              <h1 className='font-[700] text-[36px] selection:text-white selection:bg-[#1D1D1D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.</h1>
              <p className='font-[400] text-[16px] my-3 break-words w-[90%] selection:text-white selection:bg-[#1D1D1D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veritatis! lorem</p>
              <div className='flex justify-start gap-[10px]'>
                  <Button transparent={false} text='Register Now' size='24' />
                  <Button transparent={true} text='Contact Us' size='24' />
              </div>
          </div>
      </div>
    </Parallax>
  )
}

export default Hero