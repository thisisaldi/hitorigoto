import React from 'react';
import Grey from '../img/grey.png';

const Hero = () => {
  return (
    <div className='flex w-[100%] h-[560px] bg-transparent font-poppins border'>
        <div className='flex flex-col ml-[160px] my-[150px] w-[576px]'>
            <h1 className='font-[700] text-[36px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.</h1>
            <p className='font-[400] text-[16px] my-3 break-words w-[90%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, veritatis! lorem</p>
            <div className='flex justify-start gap-[24px]'>
                <button className='bg-[#645CBB] text-white font-[400] px-3 py-1 rounded-lg text-[24px]'>
                    Lorem Ipsum
                </button>
                <button className='bg-transparent border-[2px] border-[#645CBB] text-[#645CBB] font-[400] text-[24px] px-3 py-1 rounded-lg'>
                    Lorem Ipsum
                </button>
            </div>
        </div>
        <div>
            <img src={Grey} alt="" className='h-[560px] w-[560px]' />
        </div>
    </div>
  )
}

export default Hero