import React from 'react';
import FamilyOne from '../../assets/photos/family1.jpg';
import familyTwo from '../../assets/photos/family3.jpg'

const SectionOne = () => {
    return (
        <div className="w-[100%] h-auto flex flex-col gap-10 px-20 py-10 mx-auto">
            <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-10">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left">Building Stronger Families</h1>
                    <p className=" text-lg text-gray-600 leading-relaxed text-justify">
                        Family is the foundation of a happy life. At Life Harbor, we help families heal, reconnect, and grow together. 
                        Whether it’s improving communication, resolving conflicts, or finding joy in everyday moments, our personalized 
                        approach is here to guide you every step of the way.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[300px] flex justify-center">
                    <img 
                        src={FamilyOne} 
                        alt="Family" 
                        className="w-full h-full object-cover rounded-xl shadow-lg" 
                    />
                </div>
            </div>


            <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-10">

                {/* Image Section */}
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[300px] flex justify-center">
                    <img 
                        src={familyTwo} 
                        alt="Family" 
                        className="w-full h-full object-cover rounded-xl shadow-lg" 
                    />
                </div>
                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 text-center md:text-left">
                    <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left">A New Chapter for Your Family</h1>
                    <p className=" text-lg text-gray-600 leading-relaxed text-justify">
                    Every family deserves a fresh start. Through thoughtful guidance and practical tools, we empower families to overcome challenges, rebuild trust, and nurture deeper connections. Let today be the beginning of a brighter future for your loved ones.
                    </p>
                </div>

                
            </div>
        </div>
    );
};

export default SectionOne;
