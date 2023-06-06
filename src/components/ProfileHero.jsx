import React from 'react'
import Grey from '../img/grey.png';
import Button from './Button';
import { useNavigate } from 'react-router-dom';


const ProfileHero = () => {

    const navigate = useNavigate();

    return (
    <div className='flex flex-row px-[150px] pt-[120px] pb-[80px] justify-start items-start gap-10 bg-[#F7EFE5]'>
        <img className='w-[300px] h-[300px] rounded-full border-[2px] border-[#252525]' src={Grey} alt="" />
        <div className='flex flex-col justify-between h-[300px]'>
            <div className='font-poppins text-[12px] flex flex-col gap-4'>
                <div>
                    <h1 className='text-[48px] font-bold'>Muhammad Jason</h1>
                    <div>
                        <h4 className=''>Student at UPN Veteran Jakarta</h4>
                        <span className='text-gray-400'>Joined Since 2022</span>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold'>About Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui nisi saepe officia beatae possimus, molestiae distinctio incidunt, deserunt porro natus repudiandae vel earum? Consequatur maiores beatae odio maxime? Labore?</p>
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