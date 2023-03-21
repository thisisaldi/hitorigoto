import React from 'react';
import User from '../img/user.svg';
import Mail from '../img/mail.svg';
import Lock from '../img/lock.svg';

const Login = () => {
  return (
    <div className='bg-[#645CBB] font-poppins w-screen h-screen text-white flex flex-col items-center justify-center'>
        <h1 className='font-[700] text-[30px] m-10 tracking-wide'>
            hitorigoto
        </h1>
        <span className='font-bold text-[18px]'>Login to your account.</span>
        <form className='flex flex-col gap-4 py-6 text-[#1D1D1D]'>
            <div>
                <img className='absolute translate-x-[14px] translate-y-[14px]' src={User} alt="" />
                <input className='w-[350px] pl-12 py-3 rounded-md border-black border-[2px]' type="text" placeholder='Username' />
            </div>
            <div>
                <img className='absolute translate-x-[14px] translate-y-[14px]' src={Lock} alt="" />
                <input className='w-[350px] pl-12 py-3 rounded-md border-black border-[2px]' type="password" placeholder='Password' />
            </div>
            <div className='flex flex-row justify-between text-white'>
                <div>
                    <input className='w-[14px] h-[14px] rounded-full mr-2' type="checkbox" id='remember_me' name='remember_me' value='remember me'/>
                    <label htmlFor="remember_me">Remember me</label>
                </div>

                <a className='font-bold' href="/#">Forgot your password?</a>
            </div>
            <button className='w-[350px] bg-black text-white px-5 py-3 rounded-md font-bold'>Login</button>
        </form>
        <p className='text-[14px]'>Don't have an account? <a href="/#" className='font-bold'>Sign up</a></p>
    </div>
  )
}

export default Login;