import React from 'react'
import SearchBar from './SearchBar'
import Button from './Button'
import Down from '../img/chevron-down.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

  return (
    <div className='h-[80px] flex justify-between items-center px-[50px] fixed w-screen bg-white shadow-md z-10'>
        <h1 className='font-[700] text-[24px] select-none'>hitorigoto</h1>
        <SearchBar />
        <ul className='flex justify-center gap-20'>
            <li>
                <a className='hover:text-[#645CBB] select-none' href="/aboutus">
                    JLPT
                </a>
            </li>
            <li className='relative inline-block dropdown'>
                <div className='flex'>
                    <button className='flex hover:text-[#645CBB] select-none dropbtn'>
                        <a href="/course">Courses</a>
                    </button>
                    <img className='down-hover' src={Down} alt=''/>
                </div>
                <div className='hidden absolute z-1 dropdown-content bg-white border-[2px] w-32 border-black rounded-md py-2 px-4'>
                    <a href="/#" className='py-2 hover:text-[#645CBB]'>JLPT-N1</a>
                    <a href="/#" className='py-2 hover:text-[#645CBB]'>JLPT-N2</a>
                    <a href="/#" className='py-2 hover:text-[#645CBB]'>JLPT-N3</a>
                    <a href="/#" className='py-2 hover:text-[#645CBB]'>JLPT-N4</a>
                    <a href="/#" className='py-2 hover:text-[#645CBB]'>JLPT-N5</a>
                </div>
            </li>
        </ul>
        <div className='flex justify-between gap-[20px]'>
            <Button onClick={() => navigate('/login')} transparent={true} text='Login' size='16' />
            <Button onClick={() => navigate('/register')} text='Signup' size='16' />
        </div>
    </div>
    // <div className='flex items-center justify-evenly h-[80px] shadow-md z-100 font-poppins'>
    //         <h1 className='font-[700] text-[24px]'>hitorigoto</h1>
    //     <SearchBar />
    //     <div>
    //         <ul className='flex justify-between gap-[30px]'>
    //             <li>
    //                 <a href="/#" className='font-[400] text-[16px]'>JLPT</a>
    //             </li>
    //             <li>
    //                 <a href="/#" className='font-[400] text-[16px]'>Courses</a>
    //             </li>
    //         </ul>
    //     </div>
    //     <div className='flex justify-between gap-[28px] mr-[10%]'>
    //         <button className='bg-transparent border-[2px] border-[#645CBB] text-[#645CBB] font-[400] px-3 py-1 rounded-lg '>
    //             Login 
    //         </button>
    //         <button className='bg-[#645CBB] text-white font-[400] px-3 py-1 rounded-lg'>
    //             Sign up
    //         </button>
    //     </div>
    // </div>
    // <div className="shadow-md w-full fixed top-0 left-0 font-poppins">
    //     <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
    //         <div className='font-bold text-2xl cursor-pointer flex items-center font-poppins text-gray-800'>
    //             <span className='text-3l text-dark mr-1 pt-2'>
    //                 <h1>hitorigoto</h1>
    //             </span>
    //         </div>
    //         <ul className='md:flex md:items-center'>
    //             <li className='md:ml-8 text-xl'>
    //                 <a href="/#" className='text-dark hover:text-gray-400 duration-500'>JLPT</a>
    //             </li>
    //             <li className='md:ml-8 text-xl'>
    //                 <a href="/#" className='text-dark hover:text-gray-400 duration-500'>Courses</a>
    //             </li>
    //             <Button transparent={true} text='Login' />
    //             <Button transparent={false} text='Sign Up' />
    //         </ul>
    //     </div>
    // </div>
  )
}

export default NavBar