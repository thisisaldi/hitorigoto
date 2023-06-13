import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import NavBar from "../components/NavBar";
import Illust from "../img/illust-2.png";
import Footer from '../components/Footer';
import Cookies from 'js-cookie';

const Home = () => {
  const cookieValue = Cookies.get('cookieName');
  if (cookieValue) {
    console.log('Cookie exists:', cookieValue);
  } else {
    console.log('Cookie does not exist');
  }
  return (
    <div className='overflow-hidden font-poppins'>
        <NavBar />
        <Hero />
        <div className='flex px-[150px] py-[100px] gap-[150px] items-center'>
            <img src={Illust} alt="Web Course" className='w-[500px] select-none pointer-events-none' draggable={false}/>
            <div className='flex flex-col w-[576px] gap-2 text-[#1D1D1D] text-right'>
                <h1 className='font-[700] text-[36px] selection:text-white selection:bg-[#1D1D1D]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.</h1>
                <p className='font-[00] text-[16px] break-words selection:text-white selection:bg-[#1D1D1D]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia dolorum quod deleniti a vero pariatur ratione fugiat laudantium delectus, ad veniam, dicta natus dignissimos! Id hic officiis labore voluptate reiciendis minima soluta, temporibus numquam. Eveniet quidem harum, et adipisci praesentium debitis illo quas sunt nemo ipsa fuga dolor necessitatibus?</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home