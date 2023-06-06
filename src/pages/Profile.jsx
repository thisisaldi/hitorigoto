import React from 'react';
import NavBarLogin from '../components/NavBarLogin';
import Card from '../components/Card';
import ProfileHero from '../components/ProfileHero';
import Footer from '../components/Footer';


const Profile = () => {

    return (
        <div>
            <NavBarLogin />
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

export default Profile