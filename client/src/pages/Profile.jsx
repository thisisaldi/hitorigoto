import React from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import ProfileHero from '../components/ProfileHero';
import Footer from '../components/Footer';

const Profile = () => {

    return (
        <div>
            <NavBar />
            <ProfileHero />
            <div className='p-[72px]'>
                <h1 className='font-bold text-[24px]'>Latest Activity</h1>
                <div className='flex flex-row justify-center gap-10 mt-[24px]'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile;