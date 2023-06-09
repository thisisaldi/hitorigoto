import React from 'react';
import Back from '../icons/back.svg';
import { useNavigate } from "react-router-dom";

const CourseNavBar = () => {

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (
        <div className='h-[80px] flex justify-between items-center px-[50px] fixed w-screen bg-white shadow-md z-10'>
            <div className='flex gap-6'>
                <img onClick={goBack} src={Back} alt="" />
                <p className='font-poppins text-[18px]'>Courses</p>
            </div>
            <p className='font-poppins text-[18px] p-8'>Kanji (1)</p>
        </div>
    )
}

export default CourseNavBar