import React, { useState } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import EditProfile from '../pages/EditProfile';
import Profile from '../pages/Profile';

const AnimatedRoutes = () => {

    const location = useLocation();
    const [user,setUser] = useState("");
    // console.log(user)
    return (
        <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home user={user}/>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/editprofile' element={<EditProfile user ={user} setUser={setUser}/>} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/aboutus' element={<About/>} />


            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes