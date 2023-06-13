/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import User from '../img/user.svg';
import Lock from '../img/lock.svg';
import { useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const Login = ({ setUserData }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            username: username,
            password: password,
        };

        // Send a POST request to the authentication API endpoint
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
        },
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === "OK") {
                // Authentication successful
                // Store the user data in local storage
                const userData = JSON.stringify({
                    username :data.username,
                    img: data.img.data
                });
                sessionStorage.setItem('userData', userData);
                console.log(userData.img)
                // Redirect to the home page
                navigate('/');
            } else {
                // Authentication failed
                console.log(data);
                // alert(data);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

  return (
    <div className='bg-[#645CBB] font-poppins w-screen h-screen overflow-hidden text-white flex flex-col items-center justify-center'>
        <h1 className='font-[700] text-[30px] m-10 tracking-wide'>
            hitorigoto
        </h1>
        <span className='font-bold text-[18px]'>Login to your account.</span>
        <form method='post' className='flex flex-col gap-4 py-6 text-[#1D1D1D]' onSubmit={submitHandler}>
            <div>
                <img className='absolute translate-x-[14px] translate-y-[14px]' src={User} alt="" />
                <input className='w-[350px] pl-12 py-3 rounded-md border-black border-[2px] focus:outline-none' type="text" placeholder='Username' value={username} name='username' onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <img className='absolute translate-x-[14px] translate-y-[14px]' src={Lock} alt="" />
                <input className='w-[350px] pl-12 py-3 rounded-md border-black border-[2px] focus:outline-none' type="password" placeholder='Password' value={password} name='password' onChange={(e) => setPassword(e.target.value)}/>
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
        <p className='text-[14px]'>Don't have an account? <a href="/register" className='font-bold'>Sign up</a></p>
    </div>
  )
}

export default Login;