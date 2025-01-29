import React from 'react';
import Banner from '../../components/HomeUtils/Banner.jsx';
import Mission from '@/components/HomeUtils/Mission.jsx';
import SectionOne from '@/components/HomeUtils/SectionOne.jsx';
import CardsOne from '@/components/HomeUtils/CardsOne.jsx';

const Home = () => {
    return (
        <div className='w-screen min-h-screen'>
            <Banner/>
            <Mission/>
            <SectionOne/>
            <CardsOne/>
        </div>
    );
};

export default Home;