import React from 'react'
import Grey from '../img/grey.png';


const Card = (props) => {
  return (
    <div className='w-[300px] h-[500px] p-[25px] shadow-2xl flex flex-col  gap-4 items-center justify-start rounded-lg font-poppins'>
        <img className='w-[250px] rounded-lg  h-[250px]' src={props.imgz} alt="" />
        <p className='w-[250px] text-[12px]'>Oleh Hitorigoto Team</p>
        <h1 className='w-[250px] font-bold text-[24px]'>{props.title}</h1>
        <p className='w-[250px] text-[12px]'>{props.text}</p>
    </div>
  )
}

export default Card