import React from 'react'

const Button = (props) => {
  let className;
  if(props.transparent) {
    className = `bg-transparent border-[2px] border-[#645CBB] text-[#645CBB] font-[400] text-[${props.size}px] px-4 py-1 rounded-lg m-0`;
  } else {
    className = `bg-[#645CBB] text-white font-[400] text-[${props.size}px] px-4 py-[6px] rounded-lg m-0`;
  }
  return (
    <button className={className}>
      {props.text}
    </button>
  )
}

export default Button;