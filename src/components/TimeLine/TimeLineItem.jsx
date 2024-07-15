// TimelineItem.jsx
import React from 'react';

const TimelineItem = ({ title, date, children }) => {


  return (
    <div className="flex lg:flex-col items-start text-start w-1/4 gap-4 font-sans">
        <div className='flex justify-start items-start w-full'>
            <h4 className="font-semibold">{title}</h4>
        </div>
        <div className="w-full relative flex justify-start items-start mb-4">
            <div className="relative w-5 h-5 bg-gradient-to-r from-[#5c696b] via-[#6978D1] via- to-[#945DD6] rounded-full z-10"></div>
        </div>

        <div className="">
            <p className="text-sm text-gray-500">{date}</p>
            <div className="p-2 overflow-hidden">
                {children}
            </div>
        </div>
  </div>
  );
};

export default TimelineItem;
