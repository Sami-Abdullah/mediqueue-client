import React from 'react';

const SlotMeter = ({tutor}) => {
  return (
    <div className="flex gap-5 ">
      <span className="text-sm text-gray-600">Available Slots:</span>
      <div className="flex items-center gap-2">
        <div className="w-32 bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#134074] rounded-full h-2 transition-all"
            style={{ width: `${(parseInt(tutor.totalSlot) / 20) * 100}%` }}
          ></div>
        </div>
        <span className="font-bold">{tutor.totalSlot}/20</span>
      </div>
    </div>
  );
};

export default SlotMeter;