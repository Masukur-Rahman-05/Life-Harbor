import React from "react";
import baby from "../../assets/photos/baby.jpg";

const BannerTwo = () => {
  return (
    <div className="w-screen h-[500px] flex px-5 lg:px-20 my-10 rounded-xl">
      <div className="w-1/2 h-full">
        <img src={baby} alt="baby" className="w-full h-full object-cover  " />
      </div>

      <div className="w-1/2 h-full bg-green-700 flex flex-col justify-center items-center gap-5 px-5">
        <h1 className="text-5xl font-bold text-white text-center tracking-wide ">
          GIVE YOUR CHILD A BETTER START
        </h1>

        <div className="text-center space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-4 border border-gray-300 bg-white"
          />
          <button
            className="bg-green-600 py-2  border-2 border-white text-white px-10 "
            onClick={() => alert("Congratulation")}
          >
            JOIN
          </button>
        </div>

        <p className="text-white underline">Join our Community</p>

        <div className="w-full text-white flex justify-evenly items-center">
          <p className="font-bold text-3xl text-center tracking-wide">
            5M+ <span className="block text-sm">MEMBERS</span>
          </p>
          <p className="font-bold text-3xl text-center tracking-wide">
            60K+ <span className="block text-sm">FAMILIES</span>
          </p>
          <p className="font-bold text-3xl text-center tracking-wide">
            17+ <span className="block text-sm">COUNTRIES</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
