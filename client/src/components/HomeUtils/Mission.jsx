import React from 'react';
import { SlBadge } from "react-icons/sl";

const Mission = () => {
    return (
        <div className='w-full h-[150px] bg-linear-to-r from-green-950 via-green-800 to-green-950 flex flex-col justify-center items-center gap-4 text-center'>
            <h1 className='text-white text-3xl font-bold flex items-center gap-2'>Our Mission <span><SlBadge className='text-yellow-500'/></span></h1>
            <p className='w-[800px] text-white'>At Life Harbor, our mission is to create a safe space for individuals and families to heal and grow. We believe that every person has the potential for transformation, and we are here to guide you on your journey toward inner peace, stronger relationships, and a more fulfilling life.</p>
        </div>
    );
};

export default Mission;