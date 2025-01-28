import React from 'react';
import { RiLeafFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className='absolute top-0 w-full p-4 overflow-x-hidden '>
            <div className='flex justify-between items-center p-3 bg-black/60 rounded-xl backdrop-blur-[2px] overflow-x-hidden px-16'>
            <div className='flex items-center gap-3'>
                <p><RiLeafFill className='text-3xl text-green-500'/></p>
                <p className='text-2xl text-white font-bold'>LIFE-HARBOR</p>
            </div>

            <div className='flex items-center gap-4'>
                <div className='flex gap-4 text-white'>
                <p>Home</p>
                <p>Resources</p>
                <p>Community</p>
                <p>Blog</p>
                <p>Support</p>
                </div>

                <div>
                    <button className='ml-5 bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700'>Contact</button>
                </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Navbar;