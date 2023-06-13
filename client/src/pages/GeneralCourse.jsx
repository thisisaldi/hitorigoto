import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import img1 from '../img/course.png'
import imgcourse1 from '../img/coursen1.png'
import imgcourse2 from '../img/coursen2.png'
import imgcourse3 from '../img/coursen3.png'
import imgcourse4 from '../img/coursen4.png'
import imgcourse5 from '../img/coursen5.png'
import Card from '../components/Card';

const GeneralCourse = () =>{
    return(
        <div className="overflow-hidden font-poppins">
            <NavBar/>
            <div className='flex flex-col'>
                <div className='flex flex-row w-full px-[200px] py-[100px] bg-[#F7EFE5]'>
                    <div className='flex flex-col items-start gap-4 py-[200px] w-[500px]'>
                        <h1 className='font-[700] mb-4 text-[30px] text-black'>Mulai kursus, di mana saja dan kapan saja!</h1>
                        <p>Pilih Course sesuai dengan kemampuan Anda demi proses belajar yang menyenangkan.</p>
                        <Button text='Pilih Course' size='14'/>
                    </div>
                    <img className='w-[600px] ml-[100px]' src={img1} alt="" />
                </div>

                <div className='flex flex-col mt-[50px] mb-[50px]'>
                    <div className='justify-center text-center items-center'>
                        <h1 className='font-[700] mb-4 text-[24px] text-black '>Course yang tersedia</h1>
                    </div>
                    <div className='flex gap-10 justify-center items-center flex-row'>
                        <Card href='/course/n5' imgz={imgcourse1} title="JLPT - N5" text="JLPT N5 adalah tingkatan paling dasar dalam ujian JLPT, dan sangat cocok untuk para siswa yang baru memulai pembelajaran bahasa Jepang."/>
                        <Card href='/course/n4' imgz={imgcourse2} title="JLPT - N4" text="JLPT N4 adalah tingkat berikutnya setelah N5 dan merupakan langkah selanjutnya bagi para siswa dalam memperluas pemahaman bahasa Jepang mereka."/>
                        <Card href='/course/n3' imgz={imgcourse3} title="JLPT - N3" text="JLPT N3 merupakan tingkat menengah dalam ujian JLPT. Pada tingkat ini, siswa diharapkan memiliki pemahaman yang lebih mendalam tentang tata bahasa dan kosakata Jepang"/>
                    </div>

                    <div className='flex mt-[50px] items-center justify-center gap-10 flex-row'>
                        <Card href='/course/n2' imgz={imgcourse4} title="JLPT - N2" text="JLPT N2 menguji kemampuan siswa dalam memahami teks-teks tulisan dan percakapan dalam bahasa Jepang, baik yang bersifat formal maupun informal."/>
                        <Card href='/course/n1' imgz={imgcourse5} title="JLPT - N1" text="JLPT N1 merupakan tingkatan tertinggi dalam ujian JLPT. Tahap ini menekankan kepada pemahaman mendalam tentang tata bahasa, kosakata khusus, serta membaca dan menulis."/>
                    </div>

                </div>
                


            </div>




        <Footer/>
        </div>
    )
}

export default GeneralCourse
