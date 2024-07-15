// Timeline.jsx
import React from 'react';

const Timeline = ({ children }) => {
  return (
    <div className="font-sans">
      <div className="absolute lg:w-[50%] lg:h-1 w-1 h-full bg-gray-300 left-[26%] top-12  transform lg:-translate-x-[50%] -translate-y-[50%]"></div>
      <div className="flex flex-col lg:flex justify-start items-start">
        {children}
      </div>
    </div>
  );
};

export default Timeline;
