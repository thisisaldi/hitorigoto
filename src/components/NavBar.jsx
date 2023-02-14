import React from 'react'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div className='flex items-center justify-evenly h-[80px]'>
        <div>
            <h1 className='font-poppins font-[700] text-[24px] mx-10'>hitorigoto</h1>
        </div>
        <SearchBar />
        <ul className='flex justify-between'>
            <li>
                <a href="/#" className='font-[400] text-[16px] mx-[48px]'>JLPT</a>
            </li>
            <li>
                <a href="/#" className='font-[400] text-[16px] mx-[48px]'>Courses</a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar