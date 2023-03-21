import React from 'react';
import User from '../img/user.svg';
import Mail from '../img/mail.svg';
import Lock from '../img/lock.svg';

const Register = () => {
  return (
    <div className='bg-[#645CBB] font-poppins w-screen h-screen text-white flex flex-col items-center justify-center'>
        <h1 className='font-[700] text-[30px] m-10 tracking-wide'>
            hitorigoto
        </h1>
        <span className='font-bold text-[18px]'>Create a new account.</span>
        <form className='flex flex-col gap-4 py-6 text-[#1D1D1D]'>
            <div>
                <img className='absolute translate-x-[14px] translate-y-[14px]' src={User} alt="" />
                <input className='w-[350px] pl-12 py-3 rounded-md border-black border-[2px] focus:none' type="text" placeholder='Username' />
            </div>
            <div>
                <img className='absolute translate-x-[14px] translate-y-[14px]' src={Mail} alt="" />
                <input className='w-[350px] pl-12 py-3 rounded-md border-black border-[2px]' type="email" placeholder='E-mail' />
            </div>
            <div>
                <img className='absolute translate-x-[14px] translate-y-[14px]' src={Lock} alt="" />
                <input className='w-[350px] pl-12 py-3 rounded-md border-black border-[2px]' type="password" placeholder='Password' />
            </div>
            <button className='w-[350px] bg-black text-white px-5 py-3 rounded-md font-bold'>Sign Up</button>
        </form>
        <p className='text-[14px]'>Already have an account? <a href="/#" className='font-bold'>Login</a></p>
    </div>
  )
}

export default Register