import NavBarLogin from "../components/NavBarLogin";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import '../App.css';
import Button from "../components/Button";
import Select from 'react-select'
import Jason from "../img/mhmdjason.jpg"
import { useEffect, useState } from "react";

const EditProfile = () => {


    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    const optionsGender = [
        { value: 'cowo', label: 'Laki - Laki' },
        { value: 'cewe', label: 'Perempuan' }]

        function log() {
            const a =document.getElementById("profileimg")
            console.log(a);
          };


        return (
      <motion.div 
        className="overflow-hidden font-poppins"
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
          <NavBarLogin/>
          <div className="flex flex-row px-[50px] py-[33px] gap-[150px] border-2 border-black rounded-xl mx-[300px] mt-28 mb-6">
            <div className="w-full">
                <button onClick={log}></button>
                <p className="mb-12 font-bold text-xl">Edit Profile Pengguna</p>

                    <form method='post' className='flex flex-col gap-4 py-6 text-[#1D1D1D]'>
                    <div className="flex flex-row mb-2">
                        <div>
                            {preview?
                            <img className="w-[200px] h-[200px] border-black border-2 rounded" src={preview} alt="" />
                            :
                            <img className="w-[200px] h-[200px] border-black border-2 rounded" src={Jason} alt="" />
                            }
                        </div>
                        <div className="ml-10 mt-[55px] ">
                            <div className="relative">
                                <label className="bg-[#645CBB] visible text-white font-[400] px-4 w-9/12 py-[6px] rounded-lg m-0 hover:bg-[#A59CFF]" for="files">Select Image</label>
                                <input className="absolute top-0 left-0 invisible " onChange={onSelectFile}  value="" type="file" id="files" name="profileimg"/>
                            </div>
                            <p className="text-xs mt-2 ml-1">Gambar Profile Anda harus memiliki rasio 1:1</p>
                            <p className="text-xs ml-1">Maksimum ukuran gambar adalah 2MB</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[35px]">
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Nama</p>
                            <input className="px-[7px] border-2 border-black h-[40px] rounded w-[700px]" type="text"  id="nama" name="nama"/>
                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Gender</p>
                            <Select className=" border-2 border-black rounded w-[700px] " type="text"  id="gender" name="gender" options={optionsGender}/>
                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Tanggal Lahir</p>
                            <input className="px-[7px] border-2 h-[40px] border-black rounded	w-[700px] " type="date"  id="tanggalLahir" name="tanggalLahir"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Pekerjaan</p>
                            <input className=" px-[7px] border-2 h-[40px] border-black rounded	w-[700px] " type="text"  id="pekerjaan" name="pekerjaan"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Instansi</p>
                            <input className="px-[7px] border-2 h-[40px] border-black rounded	w-[700px] " type="text"  id="instansi" name="instansi"/>

                        </div>
                            <div className="flex gap-4">
                            <p className="w-[120px] mt-2">No. Telp</p>
                        <input className=" px-[7px] border-2 h-[40px] border-black rounded	w-[700px] " type="text"  id="notelp" name="notelp"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">Email</p>
                            <input className=" px-[7px] border-2 h-[40px] border-black rounded	w-[700px] " type="text"  id="email" name="email"/>

                        </div>
                        <div className="flex gap-4">
                            <p className="w-[120px] mt-2">About Me</p>
                            <textarea maxLength="250" className="px-[7px] border-2 resize-none border-black rounded w-[700px] h-[100px] " type="text"  id="aboutMe" name="aboutMe"/>
                        </div>
                        </div>
                        </form> 
                        <div className="mt-2">
                            <Button text='Save Changes' size='14' />
                            <div className="mt-4">
                            <Button text='Delete Account'red={true}  size='14' />
                            </div>
                        </div>
            </div>

          </div>

          <Footer />
      </motion.div>
    )
  }

export default EditProfile
