import React from 'react'
import Grey from '../img/grey.png';

const Card = () => {
  return (
    <div className='w-[300px] h-[600px] p-[25px] shadow-2xl flex flex-col gap-4 items-center justify-start rounded-lg font-poppins'>
        <img className='w-[250px] h-[250px]' src={Grey} alt="" />
        <p className='w-[250px] text-[12px]'>Oleh Hitorigoto Team</p>
        <h1 className='w-[250px] font-bold text-[24px]'>Title</h1>
        <p className='w-[250px] text-[12px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis placeat sed rem consectetur! Numquam, velit rem consequuntur eligendi debitis blanditiis quos temporibus omnis, praesentium quisquam nisi sed, perspiciatis facilis quam.
        </p>
    </div>
  )
}

export default Card;