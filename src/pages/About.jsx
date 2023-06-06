import React from 'react';
import { motion } from 'framer-motion';
import NavBarLogin from '../components/NavBarLogin';
import img1 from '../img/image 2.png'
import img2 from '../img/sejarah.png'
import Footer from '../components/Footer';

const About = () => {
  return (

    <motion.div 
        className="overflow-hidden font-poppins"
        transition={{ duration: 0.75, ease: "easeOut" }}>
        
        <NavBarLogin/>
        <div className='flex  flex-col'>

            {/* first element */}
            <div className='flex justify-between h-[700px]  px-[250px] flex-row'> 

                <div className='flex flex-col py-[300px] w-[550px]'>
                    <h1 className='font-[700] mb-4 text-[36px]  tracking-wide'>Apa itu JLPT</h1>
                    <p>JLPT adalah singkatan dari Japanese Language Proficiency Test atau dalam bahasa Jepangnya disebut 
                        日本語能力試験 (nihongo nouryoku shiken). Ujian kemampuan bahasa Jepang yang 
                        ditujukan untuk orang-orang yang memiliki bahasa ibu bukan bahasa Jepang.</p>
                </div>
                <div className=''>
                    <img className='w-[300px] py-[220px]' src={img1} alt="" />
                </div>

            </div>

            {/* second element */}
            <div className='w-full h-[400px] justify-center  text-white flex flex-col items-center bg-[#645CBB]'>
                <h1 className='font-[700] text-[30px] mb-[40px] tracking-wide'>Tujuan</h1>
                <p>JLPT diadakan di seluruh dunia untuk mengevaluasi dan</p>
                <p>mengesahkan kemahiran berbahasa Jepang dari penutur asing.</p>
            </div>

            {/* third element */}

            <div className='flex justify-between h-[400px] w-auto  px-[250px] flex-row'>

                <div className='w-[300px] py-[50px]'>
                    <img className='' src={img2} alt="" />
                </div>

                <div className='flex flex-col py-[70px] w-[550px]'>
                    <h1 className='font-[700] text-[30px] mb-4 tracking-wide'>Sejarah JLPT</h1>
                    <p>JLPT pertama kali diselenggarakan pada tahun 1984 
                        sebagai tanggapan atas meningkatnya permintaan sertifikasi
                         bahasa Jepang yang terstandar. Awalnya 7.000 orang mengikuti
                          tes. Hingga tahun 2003, JLPT merupakan salah satu syarat bagi or
                          ang asing untuk masuk universitas Jepang. Sejak 2003, Examination for Japanese 
                          University Admission for International Students (EJU) digunakan oleh sebagian b
                          esar universitas untuk tujuan ini; tidak seperti JLPT, yang hanya merupakan ujian pili
                          han ganda, EJU berisi bagian yang mengharuskan peserta ujian menulis dalam bahasa Jepang..</p>
                </div>

            </div>

            {/* forth element */}

            <div className='flex justify-center items-center  flex-col shadow-lg bg-[#F7EFE5] px-[120px] gap-[20px] w-90% rounded-xl mx-[250px] mt-28 mb-[120px]'>
                <h1 className='font-[700] text-[30px]  tracking-wide mt-16'>Level JLPT</h1>
                
                <div className='flex mt-4 w-11/12 flex-row '>
                    <div className='mt-[20px] '>
                        <h1 className='rounded-lg mt-4 w-[125px] bg-[#645CBB] font-[700] text-[42px] text-white tracking-wide py-[30px] px-[40px]'>N5</h1>
                    </div>
                    <div className='flex flex-col ml-[100px]'>
                        <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Bacaan</h1>
                        <p className='text-[16px]'>Selain hiragana dan katakana, dapat membaca dan memahami frasa, kalimat, paragraf pendek menggunakan kanji dasar.</p>
                        <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Pendengaran</h1>
                        <p className='text-[16px]'>Dapat memahami dan mendengarkan informasi yang diperlukan, Dapat mendengarkan percakapan dengan kecepatan normal tentang topik kehidupan sehari-hari.</p>

                    </div>
                </div>
            <hr className="w-full h-0.5 my-8 bg-black-200 border-0 rounded dark:bg-gray-700"/>
                <div className='flex w-11/12 flex-row '>
                        <div className='mt-[20px] '>
                            <h1 className='rounded-lg mt-4 w-[125px] bg-[#645CBB] font-[700] text-[42px] text-white tracking-wide py-[30px] px-[40px]'>N4</h1>
                        </div>
                        <div className='flex flex-col ml-[100px]'>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Bacaan</h1>
                            <p className='text-[16px]'>Dapat memahami dan membaca kalimat yang ditulis tentang topik familiar dengan menggunakan kosa kata dasar kanji.</p>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Pendengaran</h1>
                            <p className='text-[16px]'>Dapat memahami isi dari percakapan sehari-hari apabila berbicara dengan perlahan.</p>
                        </div>
                </div>

                    <hr className="w-full h-0.5 my-8 bg-black-200 border-0 rounded dark:bg-gray-700"/>
                <div className='flex w-11/12 flex-row '>
                        <div className='mt-[20px] '>
                            <h1 className='rounded-lg mt-4 w-[125px] bg-[#645CBB] font-[700] text-[42px] text-white tracking-wide py-[30px] px-[40px]'>N3</h1>
                        </div>
                        <div className='flex flex-col ml-[100px]'>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Bacaan</h1>
                            <p className='text-[16px]'>Dapat membaca dan memahami sebuah kalimat mengenai isi spesifik yang ditulis tentang tema kehidupan sehari-hari.</p>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Pendengaran</h1>
                            <p className='text-[16px]'>Dalam kehidupan sehari - hari, dapat mendengarkan percakapan dengan kecepatan normal, dan dapat memahami aliran cerita dan isi utama kalimat.</p>
                        </div>
                </div>

                    <hr className="w-full h-0.5 my-8 bg-black-200 border-0 rounded dark:bg-gray-700"/>
                <div className='flex w-11/12 flex-row '>
                        <div className='mt-[20px] '>
                            <h1 className='rounded-lg mt-4 w-[125px] bg-[#645CBB] font-[700] text-[42px] text-white tracking-wide py-[30px] px-[40px]'>N2</h1>
                        </div>
                        <div className='flex flex-col ml-[100px]'>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Bacaan</h1>
                            <p className='text-[16px]'>Dapat memahami dengan jelas tesis utama dan isi artikel dalam membaca surat kabar dan majalah.</p>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Pendengaran</h1>
                            <p className='text-[16px]'>Dalam kehidupan sehari - hari, dapat mendengarkan percakapan dengan kecepatan normal, dan dapat memahami aliran cerita dan isi utama kalimat.</p>
                        </div>
                </div>
                    <hr className="w-full h-0.5 my-8 bg-black-200 border-0 rounded dark:bg-gray-700"/>
                <div className='flex w-11/12 flex-row '>
                        <div className='mt-[20px] '>
                            <h1 className='rounded-lg mt-4 w-[125px] bg-[#645CBB] font-[700] text-[42px] text-white tracking-wide py-[30px] px-[40px]'>N1</h1>
                        </div>
                        <div className='flex flex-col ml-[100px]'>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Bacaan</h1>
                            <p className='text-[16px]'>Tingkat dapat membaca surat kabar dan mengkritik. Struktur kalimat yang kompleks dan isinya akan ditanya apakah logis dan bisa mengerti. Dan, Anda akan diminta untuk membaca antar baris dari isi kalimat.</p>
                            <h1 className='font-[700] text-[20px]  tracking-wide mt-4'>Pendengaran</h1>
                            <p className='text-[16px]'>Mampu mendengarkan dan memahami berbagai jenis percakapan yang diucapkan dengan kecepatan alami, dapat memahami secara detail isi pembicaraan dan karakter, Tingkat ini sesuai dengan pemahaman penuh dari bahasa Jepang.</p>
                        </div>
                </div>
                    <p className='py-[25px]'></p>
                </div>
                
            {/* fifth element */}
            <div className='w-full justify-center text-white flex flex-col items-center py-[40px] bg-[#F7EFE5]'>
                <div>
                    <h1 className='font-[700] text-[30px] text-black tracking-wide'>Tahap Pelaksanaan JLPT</h1>
                </div>
                <div className='rounded-lg text-center w-4/12 bg-[#645CBB] mt-16 text-[16px] text-white tracking-wide py-[30px] px-[40px]'>
                    <p>Periksa tanggal ujian di situs web Japan</p>
                    <p>Educational Exchanges and Services (JEES)</p>
                </div>
                <div className='rounded-lg text-center bg-[#645CBB] w-4/12 mt-8 text-[16px] text-white tracking-wide py-[30px] px-[40px]'>
                    <p>Daftar ke MyJLPT di situs web JEES (daftar kapan saja)</p>
                </div>
                <div className='rounded-lg text-center bg-[#645CBB] w-4/12 mt-8 text-[16px] text-white tracking-wide py-[30px] px-[40px]'>
                    <p>Terapkan melalui situs web JEES dan bayar biaya aplikasi</p>
                </div>
                <div className='rounded-lg text-center bg-[#645CBB] w-4/12 mt-8 text-[16px] text-white tracking-wide py-[30px] px-[40px]'>
                    <p>Terima voucher tes dari JEES</p>
                </div>
                <div className='rounded-lg text-center bg-[#645CBB] w-4/12 mt-8 text-[16px] text-white tracking-wide py-[30px] px-[40px]'>
                    <p>Ambil Tes</p>
                </div>
                <div className='rounded-lg items-center w-4/12 text-center justify-center bg-[#645CBB] mt-8 text-[16px] text-white tracking-wide py-[30px] px-[40px]'>
                    <p>Menerima hasil tes dari JEES</p>
                    <br />
                    <p>Semua peserta ujian di setiap level akan menerima Laporan Skor.  </p>
                    <p>Peserta ujian dapat melihat hasil tes dengan masuk ke MyJLPT.</p>
                   
                        <p>Peserta ujian yang berhasil akan menerima Certificate of Proficiency.</p>
                </div>

            </div>





        </div>
        <Footer/>
    </motion.div>
  )
}
export default About
