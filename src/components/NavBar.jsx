import React from 'react'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div className='flex items-center justify-evenly h-[80px] shadow-md'>
        <div>
            <h1 className='font-poppins font-[700] text-[24px] ml-[10px]'>hitorigoto</h1>
        </div>
        <SearchBar />
        <div>
            <ul className='flex justify-between gap-[48px]'>
                <li>
                    <a href="/#" className='font-[400] text-[16px] px-[25px]'>JLPT</a>
                </li>
                <li>
                    <a href="/#" className='font-[400] text-[16px] px-[25px]'>Courses</a>
                </li>
            </ul>
        </div>
        <div className='flex justify-between gap-[28px]'>
            <button className='bg-transparent border-2 border-[#645CBB] px-2 py-1 rounded-md '>
                Login 
            </button>
            <button>
                Sign up
            </button>
        </div>
    </div>
  )
}

export default NavBar