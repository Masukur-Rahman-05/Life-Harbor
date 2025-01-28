import React from 'react';
import Navbar from './Navbar.jsx';
import banner from '../../assets/photos/bannerTop.jpg'
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiUnbalanced } from "react-icons/gi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { GiHumanPyramid } from "react-icons/gi";

const Banner = () => {

    const icons = [FaHandshakeSimple,FaHandHoldingHeart,GiUnbalanced,RiEmotionHappyLine,GiHumanPyramid]
    return (
        <div className='relative w-screen h-[500px] '>
            <img src={banner} alt="banner" className='w-full h-full object-cover '/>
            <div className='absolute inset-0 bg-linear-to-t from-black  to-black/1 opacity-90 '></div>
            <Navbar/>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3'>
                <h1 className=' text-5xl font-bold text-white tracking-widest text-center'>Anchor Your Life in Peace and Purpose</h1>
                <p className='text-white text-center'>“Life can be overwhelming, but you don’t have to face it alone. At Life Harbor, we offer a sanctuary of healing, guiding you to stronger relationships and inner peace. Our mission is to help families reconnect and individuals find hope, so they can live their fullest lives. Take the first step towards a beautiful, balanced life today.”</p>
            </div>

            <div className='absolute w-full h-full bottom-5 left-0 flex justify-center items-end gap-5 lg:gap-16 overflow-x-hidden '>
                {
                    icons.map((Icon,index)=>{
                        return(
                            <div key={index} className='w-20 h-20 flex  justify-center items-center text-white text-3xl border-2 rounded-full'>
                                <Icon className='w-10 h-10'/>
                            </div>
                        )
                    })
                }

            </div>

            
        </div>
    );
};

export default Banner;





