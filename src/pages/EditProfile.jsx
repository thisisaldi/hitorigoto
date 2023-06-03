import NavBarLogin from "../components/NavBarLogin";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import '../App.css';
import Search from '../icons/search.svg'
import Button from "../components/Button";
import { useRef } from "react";
import Select from 'react-select'
import { useState } from "react";



const EditProfile = () => {
    // const [open, setOpen] = useState(false);
    // const handleDropdown = () => {
    //     setOpen(!open);
    // };
    const optionsGender = [
        { value: 'cowo', label: 'Laki - Laki' },
        { value: 'cewe', label: 'Perempuan' }]
    // const nama = useRef();
    // const gender = useRef();
    // const tanggalLahir = useRef();
    // const pekerjaan = useRef();
    // const instansi = useRef();
    // const notelp = useRef();
    // const email = useRef();
    // const aboutMe = useRef();


    
    
    return (
      <motion.div 
        className="overflow-hidden font-poppins"
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
          <NavBarLogin/>
          <div className="flex flex-row px-[50px] py-[33px] gap-[150px] border-2 border-black rounded-xl mx-12 mt-28 mb-6">
                <div className="w-full">
                    <p className="mb-12 font-bold text-xl">Edit Profile Pengguna</p>
                    <div className="flex flex-row mb-8">
                        <div>
                        <img className="w-[100px] border-black border-2 rounded" src={Search} alt="" />
                        </div>
                        <div className="ml-10 mt-6 ">
                        <Button text='Ganti Foto' size='14' />
                        <p className="text-xs ml-1">Gambar Profile Anda harus memiliki rasio 1:1</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[35px]">
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Nama</p>
                            <input className="border-2 border-black h-[40px] rounded w-[1000px]" type="text"  id="nama" name="nama"/>
                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Gender</p>
                            <Select className="border-2 border-black rounded w-[300px] " type="text"  id="gender" name="gender" options={optionsGender}/>
                            {/* <input className="border-2 border-black rounded	w-[300px] " type="text"  id="gender" name="gender"/> */}
                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Tanggal Lahir</p>
                            <input className="border-2 h-[40px] border-black rounded	w-[300px] " type="text"  id="tanggalLahir" name="tanggalLahir"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Pekerjaan</p>
                            <input className="border-2 h-[40px] border-black rounded	w-[300px] " type="text"  id="pekerjaan" name="pekerjaan"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Instansi</p>
                            <input className="border-2 h-[40px] border-black rounded	w-[300px] " type="text"  id="instansi" name="instansi"/>

                        </div>
                            <div className="flex gap-4">
                            <p className="w-[120px] mt-2">No. Telp</p>
                        <input className="border-2 h-[40px] border-black rounded	w-[300px] " type="text"  id="notelp" name="notelp"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Email</p>
                            <input className="border-2 h-[40px] border-black rounded	w-[300px] " type="text"  id="email" name="email"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">About Me</p>
                            <textarea className="border-2  border-black rounded	w-[1000px] h-[75px] " type="text"  id="aboutMe" name="aboutMe"/>
                        </div>

                    </div>
                    <div className="mt-8">
                    <Button  text='Save Changes' size='16' />
                    </div>
                </div>
                <div className="flex flex-col">

                </div>
                
          </div>
          <Footer />
      </motion.div>
    )
  }

  export default EditProfile
