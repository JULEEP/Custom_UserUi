import React from 'react';

const Cat = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md flex justify-center gap-8 mt-2 py-2">
      <span className="text-lg font-normal text-center relative cursor-pointer group">
        Bestsellers
        <span className="absolute left-0 bottom-[-8px] w-full h-0.5 bg-black"></span>
      </span>
      <span className="text-lg font-normal text-center relative cursor-pointer group">
        Calendars
        <span className="absolute left-1/2 bottom-[-8px] w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
      </span>
      <span className="text-lg font-normal text-center relative cursor-pointer group">
        Diaries
        <span className="absolute left-1/2 bottom-[-8px] w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
      </span>
      <span className="text-lg font-normal text-center relative cursor-pointer group">
        Notebooks
        <span className="absolute left-1/2 bottom-[-8px] w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
      </span>
      <span className="text-lg font-normal text-center relative cursor-pointer group">
        Gift Hampers
        <span className="absolute left-1/2 bottom-[-8px] w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:-translate-x-1/2"></span>
      </span>
    </div>
  );
};

export default Cat;
