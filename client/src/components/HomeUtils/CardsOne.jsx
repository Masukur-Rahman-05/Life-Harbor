import React from "react";

import FamilyTwo from "../../assets/photos/family2.jpg";
import FamilyFour from "../../assets/photos/family4.jpg";
import FamilyFive from "../../assets/photos/family5.jpg";

const CardsOne = () => {
  const cardContent = [
    {
      id: 1,
      image: FamilyFive,
      title: "Reconnect with Your Loved Ones",
      content:
        "Discover practical ways to strengthen the relationships that matter most. With guided support, you can build deeper trust, understanding, and love within your family.",
    },
    {
      id: 2,
      image: FamilyTwo,
      title: "Fostering Emotional Balance",
      content:
        "Learn how to manage stress, resolve conflicts, and create a supportive environment where everyone can thrive emotionally.",
    },
    {
      id: 3,
      image: FamilyFour,
      title: "Create Joyful Moments Together",
      content:
        "Life is about the memories we create with those we love. Let us guide you in building traditions and experiences your family will cherish forever.",
    },
  ];

  return (
    <div className="w-screen h-auto flex flex-col gap-5 px-10 lg:px-20 py-10">

        <div className="text-center space-y-10">

            <div className="relative">
            <p className=" text-transparent text-xl font-bold my-5">Our Goals</p>
            <p className="absolute -top-6 left-1/2 transform -translate-x-1/2   text-5xl font-bold  bg-gradient-to-t from-white via-green-300 to-green-600 bg-clip-text text-transparent">OUR GOALS </p>

            </div>

            
            <h1 className="text-5xl font-bold text-gray-500 tracking-wide">LET'S BE THE PART OF THIS WONDERFUL JOURNEY</h1>
            <button className="bg-green-600 text-white font-semibold px-4 py-2  hover:bg-green-700" onClick={()=>{alert("Thanks for connect us")}}>Contact Us</button>

        </div>
        <div className="w-full   py-10 flex flex-col  items-center lg:flex-row lg:justify-evenly gap-10 ">
      {cardContent.map((card) => (
        <div
          key={card.id}
          className="w-full lg:w-1/4 h-[400px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5 text-center">
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              {card.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.content}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardsOne;
