import React from 'react'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between h-[80px] shadow-md'>
            <h1 className='font-poppins font-[700] text-[24px] ml-[20%]'>hitorigoto</h1>
        <SearchBar />
        <div>
            <ul className='flex justify-between gap-[30px]'>
                <li>
                    <a href="/#" className='font-[400] text-[16px]'>JLPT</a>
                </li>
                <li>
                    <a href="/#" className='font-[400] text-[16px]'>Courses</a>
                </li>
            </ul>
        </div>
        <div className='flex justify-between gap-[28px] mr-[10%]'>
            <button className='bg-transparent border-[2px] border-[#645CBB] text-[#645CBB] font-[400] px-3 py-1 rounded-lg '>
                Login 
            </button>
            <button className='bg-[#645CBB] text-white font-[400] px-3 py-1 rounded-lg'>
                Sign up
            </button>
        </div>
    </div>
  )
}

export default NavBar