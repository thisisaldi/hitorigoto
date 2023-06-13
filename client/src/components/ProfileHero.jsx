import React, { useState } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Jason from '../img/mhmdjason.jpg'


const ProfileHero = () => {

    let imageData;

    const arrayBufferToBase64 = (buffer) => {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    const navigate = useNavigate();
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    
    let base64Flag = 'data:' + userData.img.metadata + ';base64,';
    let imageStr = arrayBufferToBase64(userData.img.data);
    
    imageData = base64Flag + imageStr;
    console.log('imageData: ' + imageData)

    return (
    <div className='flex flex-row px-[150px] pt-[120px] pb-[80px] justify-start items-start gap-10 bg-[#F7EFE5]'>
        <img className='w-[300px] h-[300px] rounded-full border-[2px] border-[#252525]' src={Jason} alt="" />
        <div className='flex flex-col justify-between h-[300px]'>
            <div className='font-poppins text-[12px] flex flex-col gap-4'>
                <div>
                    <h1 className='text-[48px] font-bold'>
                        {userData.full_name ? userData.full_name : userData.username}
                        </h1>
                    <div>
                        <h4 className=''>Student at UPN Veteran Jakarta</h4>
                        <span className='text-gray-400'>Joined Since 2022</span>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold'>About Me</h3>
                    <p>Saya suka ngoding :)</p>
                </div>
            </div>
            <div>
                <Button onClick={() => navigate('/editProfile')} text='Edit Profile' />
            </div>
        </div>
    </div>
    )
}

export default ProfileHero