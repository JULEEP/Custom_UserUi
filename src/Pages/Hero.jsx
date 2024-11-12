import React from 'react';
import heroImage from '../assets/hero.webp';

const Hero = () => {
  return (
    <div
      className="w-full h-[200px] lg:h-[300px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay with white background */}
      <div className="w-full h-full bg-white bg-opacity-60 flex flex-col justify-center items-center text-center">
        {/* Title Text */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-4">
          Visiting Cards, Notebooks and Diaries
        </h2>

        {/* Button Row */}
        <div className="flex gap-4">
          <button className="bg-black text-white px-4 py-1 rounded-md">Cards</button>
          <button className="bg-black text-white px-4 py-1 rounded-md">Notebooks</button>
          <button className="bg-black text-white px-4 py-1 rounded-md">Diaries</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
