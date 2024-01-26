import React from "react";

const Annonce: React.FC = () => {
  return (
    <nav className="w-full h-[80px] bg-[#191C1F] flex items-center justify-between">
      <div className="flex gap-[10px] h-full items-center justify-center ml-5">
        <div className="font-ps py-[6px] px-[10px] rotate-[-3deg] bg-[#F3DE6D] text-[#191C1F] text-[20px] font-[600]">
          Black
        </div>
        <p className="text-[24px] font-[600] text-white font-ps">Friday</p>
      </div>
      <div className="flex gap-[8px] h-full items-center justify-center">
        <p className="text-[14px] text-white font-[500] font-ps">Up to</p>
        <p className="text-[40px] text-[#EBC80C] font-[600] font-ps">59%</p>
        <p className="text-[20px] text-white font-[600] font-ps">OFF</p>
      </div>
      <button className="rounded-[2px] font-ps flex justify-center items-center gap-[8px] px-[24px] bg-[#EBC80C] text-[14px] font-[700] uppercase leading-[48px] mr-5 text-[#191C1F]">
        Shop now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M3.625 10H17.375"
            stroke="#191C1F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.75 4.375L17.375 10L11.75 15.625"
            stroke="#191C1F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Annonce;
