import React from 'react'

const Card = (props) => {

  let cl;
  if(props.href) {
    cl = 'w-[300px] h-[500px] p-[25px] shadow-xl flex flex-col  gap-4 items-center justify-start rounded-lg font-poppins hover:shadow-2xl';
  } else {
    cl = 'w-[300px] h-[500px] p-[25px] shadow-xl flex flex-col  gap-4 items-center justify-start rounded-lg font-poppins';
  }

  return (
    <a href={props.href}>
      <div className={cl}>
          <img className='w-[250px] rounded-lg  h-[250px]' src={props.imgz} alt="" />
          <p className='w-[250px] text-[12px]'>Oleh Hitorigoto Team</p>
          <h1 className='w-[250px] font-bold text-[24px]'>{props.title}</h1>
          <p className='w-[250px] text-[12px]'>{props.text}</p>
      </div>
    </a>
  )
}

export default Card