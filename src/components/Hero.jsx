import React from 'react';
import Grey from '../img/illust-1.png';
import Button from './Button';

const Hero = () => {
  return (
    <div className='flex flex-row-reverse pt-[100px] max-lg:flex-col w-screen h-[560px] bg-transparent font-poppins border items-center justify-center gap-4'>
        <div>
            <img src={Grey} alt="" className='h-[560px] w-[560px] object-fill' draggable='false' />
        </div>
        <div className='flex flex-col w-[576px] gap-2'>
            <h1 className='font-[700] text-[36px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.</h1>
            <p className='font-[400] text-[16px] my-3 break-words w-[90%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veritatis! lorem</p>
            <div className='flex justify-start gap-[10px]'>
                <Button transparent={false} text='Register Now' size='24' />
                <Button transparent={true} text='Contact Us' size='24' />
            </div>
        </div>
    </div>
  )
}

export default Hero