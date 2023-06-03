import React from 'react'
import SearchBar from './SearchBar'
// import Button from './Button'
import { useState } from 'react';
import Down from '../img/chevron-down.png';
import Search from '../icons/search.svg'

import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false); 
    const navigate = useNavigate();
    const handleDropdown = () => {
        setOpen(!open);
    };
    const handleDropdown2 = () => {
        setOpen2(!open2);
    };

  return (
    <div className='h-[80px] flex justify-between items-center px-[50px] fixed w-screen bg-white shadow-md z-10'>
        <h1 onClick={()=>{
            navigate("/")
        }}  className='font-[700] text-[24px] select-none'>hitorigoto</h1>
        <SearchBar />
        <ul className='flex justify-center gap-20'>
            <li>
                <a className='hover:text-[#645CBB] select-none' href="/#">
                    JLPT
                </a>
            </li>
            <li>
                <button onClick={handleDropdown} className='flex hover:text-[#645CBB] select-none' >
                    Courses

                    {open ? 
                    <img src={Down} alt="" style={{transform: 'rotate(180deg)'}}/> :
                    <img src={Down} alt="" style={{transform: 'rotate(0deg)'}}/> 
                    }
                </button>
                {
                    open? (
                        <ul className='absolute flex flex-col gap-2 bg-white border-[2px] border-black rounded-md py-2 px-6'>
                           <li>
                                <a className='hover:text-[#645CBB] select-none'  href="/#">JLPT-N1</a>
                            </li> 
                           <li>
                                <a className='hover:text-[#645CBB] select-none' href="/#">JLPT-N2</a>
                            </li> 
                           <li>
                                <a className='hover:text-[#645CBB] select-none' href="/#">JLPT-N3</a>
                            </li> 
                           <li>
                                <a className='hover:text-[#645CBB] select-none' href="/#">JLPT-N4</a>
                            </li> 
                           <li>
                                <a className='hover:text-[#645CBB] select-none' href="/#">JLPT-N5</a>
                            </li> 
                        </ul>
                    ) : null
                }
            </li>
        </ul>
        <div className='flex justify-between gap-[20px] border-2 border-indigo-500/50 rounded-lg p-2'>
            <img src={Search} alt="" />
            <button onClick={handleDropdown2} className='flex hover:text-[#645CBB] select-none' >
            Muhammad Jason

            {open2 ? 
                    <img src={Down} alt="" style={{transform: 'rotate(180deg)'}}/> :
                    <img src={Down} alt="" style={{transform: 'rotate(0deg)'}}/> 
                    }
            </button>
            {
                    open2? (
                        <ul className='absolute flex flex-col gap-2 bg-white border-[2px] border-black rounded-md py-2 px-6 mt-8  ml-24'>
                           <li>
                                <a className='hover:text-[#645CBB] select-none' href="/#">My Profile</a>
                            </li> 
                           <li>
                                <a className='hover:text-[#645CBB] select-none' href="/#">Edit Profile</a>
                            </li> 
                           <li>
                                <a className='hover:text-[#645CBB] select-none' href="/editprofile">Log Out</a>
                            </li> 
                        </ul>
                    ) : null
                }
            {/* <Button onClick={() => navigate('/login')} transparent={true} text='Login' size='16' />
            <Button onClick={() => navigate('/register')} text='Signup' size='16' /> */}
        </div>
    </div>

  )
}

export default NavBar