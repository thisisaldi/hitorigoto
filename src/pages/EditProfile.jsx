import NavBarLogin from "../components/NavBarLogin";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import '../App.css';
import Button from "../components/Button";
import Select from 'react-select'
import Jason from "../img/mhmdjason.jpg"


const EditProfile = () => {

    const optionsGender = [
        { value: 'cowo', label: 'Laki - Laki' },
        { value: 'cewe', label: 'Perempuan' }]

    return (
      <motion.div 
        className="overflow-hidden font-poppins"
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
          <NavBarLogin/>
          <div className="flex flex-row px-[50px] py-[33px] gap-[150px] border-2 border-black rounded-xl mx-12 mt-28 mb-6">
            <div className="w-full">
                <p className="mb-12 font-bold text-xl">Edit Profile Pengguna</p>
                    <div className="flex flex-row mb-2">
                        <div>
                            <img className="w-[200px] border-black border-2 rounded" src={Jason} alt="" />
                        </div>
                        <div className="ml-10 mt-[55px] ">
                            <Button text='Ganti Foto' size='14' />
                            <p className="text-xs mt-2 ml-1">Gambar Profile Anda harus memiliki rasio 1:1</p>
                            <p className="text-xs ml-1">Maksimum ukuran gambar adalah 2MB</p>
                        </div>
                    </div>

                    <form method='post' className='flex flex-col gap-4 py-6 text-[#1D1D1D]'></form>
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
            </div>
          </div>

          <Footer />
      </motion.div>
    )
  }

  export default EditProfile
