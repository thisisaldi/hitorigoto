import React from 'react';
import {motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import imgmain from '../img/coursen3image.png'
import { useState } from 'react';
import Down from '../img/chevron-down.png';
import Button from '../components/Button';
import { CircularProgress} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';


const CourseLogin = () =>{



    const [open, setOpen] = useState(false);
    const handleDropdown = () => {
        setOpen(!open);
    };

    const [open2, setOpen2] = useState(false);
    const handleDropdown2 = () => {
        setOpen2(!open2);
    };

    const [open3, setOpen3] = useState(false);
    const handleDropdown3 = () => {
        setOpen3(!open3);
    };

    const [open4, setOpen4] = useState(false);
    const handleDropdown4 = () => {
        setOpen4(!open4);

    };
    const kanjiProgressVal = 45;
    const bunpouProgressVal = 40;
    const dokkaiProgressVal = 20;
    const choukaiProgressVal = 60;
    const progressValue = (kanjiProgressVal+bunpouProgressVal+dokkaiProgressVal+choukaiProgressVal)/4;

    return(
        <motion.div 
        className="overflow-hidden font-poppins"
        transition={{ duration: 0.75, ease: "easeOut" }}>
            
            <NavBar/>
            <div className='flex flex-row py-[150px] px-[200px]'>
                <div className='flex w-7/12 flex-col'>
                    <img className='' src={imgmain} alt="" />
                    <h1 className='font-[700] mt-4 mb-4 text-[36px] text-black'>JLPT - N3</h1>
                    <p className='mb-4'>JLPT N3 merupakan tingkat menengah dalam ujian JLPT. Pada tingkat ini, siswa diharapkan memiliki pemahaman yang lebih mendalam tentang tata bahasa dan kosakata Jepang, serta kemampuan berkomunikasi yang lebih baik dalam situasi kehidupan sehari-hari.</p>
                    <div className='flex flex-col mb-4 justify-between   border-2 border-[#645CBB] rounded-lg p-2'>
                    <button onClick={handleDropdown} className='flex font-[700]  text-[24px] text-black hover:text-[#645CBB] select-none' >
                     Kanji

                    {open ? 
                             <img className='mt-[6px] ml-2'src={Down}  alt="" style={{transform: 'rotate(180deg)'}}/> :
                             <img className='mt-[6px] ml-2' src={Down} alt="" style={{transform: 'rotate(0deg)'}}/> 
                            }
                    </button>
                    {
                             open? (
                                <div>
                                <p className='mb-4 mt-2'>JLPT N3 terdiri dari sekitar 650 kanji dari berbagai macam kata yang sering dijumpai baik dalam berita maupun kehidupan sehari-hari. Di materi ini kami sudah merangkum dan menggabungkan beberapa kanji berdasarkan tema dalam kehidupan sehingga memudahkan Anda untuk mempelajari kanji N3 dengan cara yang menyenangkan.</p>
                                <Button text='Lanjutkan' size='16'/>
                                </div>
                                ) : null
                        }
                    </div>
                    <div className='flex flex-col justify-between mb-4  border-2 border-[#645CBB] rounded-lg p-2'>
                    <button onClick={handleDropdown2} className='flex font-[700]  text-[24px] text-black hover:text-[#645CBB] select-none' >
                     Bunpou

                    {open2 ? 
                             <img className='mt-[6px] ml-2'src={Down}  alt="" style={{transform: 'rotate(180deg)'}}/> :
                             <img className='mt-[6px] ml-2' src={Down} alt="" style={{transform: 'rotate(0deg)'}}/> 
                            }
                    </button>
                    {
                             open2? (
                                <div>
                                <p className='mb-4 mt-2'>Dalam JLPT N3, terdapat 182 pola kalimat yang harus diketahui agar anda bisa lulus. Oleh karena itu, di materi ini kami sudah menyiapkan berbagai macam pola kalimat beserta contoh penggunaan dan artinya sesuai dengan bahasa Indonesia yang sering kita gunakan.</p>
                                <Button text='Lanjutkan' size='16'/>
                                </div>   ) : null
                        }
                    </div>
                    <div className='flex flex-col justify-between mb-4  border-2 border-[#645CBB] rounded-lg p-2'>
                    <button onClick={handleDropdown3} className='flex font-[700]  text-[24px] text-black hover:text-[#645CBB] select-none' >
                     Dokkai

                    {open3 ? 
                             <img className='mt-[6px] ml-2'src={Down}  alt="" style={{transform: 'rotate(180deg)'}}/> :
                             <img className='mt-[6px] ml-2' src={Down} alt="" style={{transform: 'rotate(0deg)'}}/> 
                            }
                    </button>
                    {
                             open3? (
                                <div>
                            <p className='mb-4 mt-2'>Dokkai merupakan bagian dalam ujian JLPT yang dirasa cukup sulit bagi sebagian besar peserta karena pada bagian ini diperlukan kemampuan untuk membaca kanji, memahami kata, dan memahami kalimat berdasarkan suatu konteks secara utuh. Pada materi ini terdapat berbagai macam percakapan, poster, dan juga papan atau tulisan yang dapat kita temukan di Jepang.</p>                                    
                            <Button text='Lanjutkan' size='16'/>
                            </div>) : null
                        }
                    </div>
                    <div className='flex flex-col  justify-between border-2 border-[#645CBB] rounded-lg p-2'>
                    <button onClick={handleDropdown4} className='flex font-[700]  text-[24px] text-black hover:text-[#645CBB] select-none' >
                     Choukai

                    {open4 ? 
                             <img className='mt-[6px] ml-2'src={Down}  alt="" style={{transform: 'rotate(180deg)'}}/> :
                             <img className='mt-[6px] ml-2' src={Down} alt="" style={{transform: 'rotate(0deg)'}}/> 
                            }
                    </button>
                    {
                             open4? (
                                <div>
                    <p className='mb-4 mt-2'>JLPT tidak hanya menguji kemampuan peserta untuk membaca dan memahami bahasa Jepang secara tulisan saja, tetapi juga kemampuan mendengar suatu percakapan atau pembicaraan orang Jepang baik di dalam kehidupan sehari-hari maupun di pekerjaan atau sekolah. Materi ini sudah disiapkan bagi Anda yang merasa percaya diri atas kemampuan mendengar percakapan dalam bahasa Jepang ataupun yang ingin melatih kemampuan tersebut.</p>
                    <Button text='Lanjutkan' size='16'/>

                    </div>) : null
                        }
                    </div>
                </div>
                <div className='rounded-lg ml-[40px] text-center w-[400px] h-[550px]  border-2 border-black text-white tracking-wide'>
                    <div className='bg-[#645CBB]'>
                        <h1 className='font-[700] py-[30px] text-[24px] mb-[30px]  tracking-wide'>Course Progress</h1>
                    </div>
                    <div className='bg-white py-2'>
                        <CircularProgress  size={100} variant="determinate" name='progressbar' id='progressbar' 
                        value={progressValue}
                        style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "100%",
                                boxShadow: "inset 0 0 0px 8px #D3D3D3",
                                color: "#645CBB",
                                }
                            }/>
                        <p className='font-[700] text-[16px] text-black'>{progressValue}%</p>
                            <p className='font-[700] text-[14px] mt-2 text-black ml-[75px] mr-[75px] text-start'>Kanji</p>
                            <LinearProgress
                              className="rounded-md ml-[75px] mr-[75px]"
                              variant="determinate"
                              id='kanjiProgress'
                              name='kanjiProgress'
                              value={kanjiProgressVal}
                              sx={{
                                height: "25px",
                                boxShadow: "inset 0px 40px 5px 5px #D3D3D3",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: "#645CBB",
                                }
                              }}
                            />

                            <p className='font-[700] text-[14px] mt-3 text-black ml-[75px] mr-[75px] text-start'>Bunpou</p>
                            <LinearProgress
                              className="rounded-md ml-[75px] mr-[75px]"
                              variant="determinate"
                              id='bunpouProgress'
                              name='bunpouProgress'
                              value={bunpouProgressVal}
                              sx={{
                                height: "25px",
                                boxShadow: "inset 0px 40px 5px 5px #D3D3D3",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: "#645CBB",
                                }
                              }}
                            />

                            <p className='font-[700] text-[14px] mt-3 text-black ml-[75px] mr-[75px] text-start'>Dokkai</p>
                            <LinearProgress
                              className="rounded-md ml-[75px] mr-[75px]"
                              variant="determinate"
                              value={dokkaiProgressVal}
                              id='dokkaiProgress'
                              name='dokkaiProgress'
                              sx={{
                                height: "25px",
                                boxShadow: "inset 0px 40px 5px 5px #D3D3D3",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: "#645CBB",
                                }
                              }}
                            />
                            
                            <p className='font-[700] text-[14px] mt-3 text-black ml-[75px] mr-[75px] text-start'>Choukai</p>
                            <LinearProgress
                              className="rounded-md ml-[75px] mr-[75px]"
                              variant="determinate"
                              value={choukaiProgressVal}
                              id='choukaiProgress'
                              name='choukaiProgress'
                              sx={{
                                height: "25px",
                                boxShadow: "inset 0px 40px 5px 5px #D3D3D3",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: "#645CBB",
                                }
                              }}
                            />
                            
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Footer/>

        </motion.div>
    )
}

export default CourseLogin