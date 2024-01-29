import BannerImg from "../../assets/productes/Banner2.png";

const Banner2 = () => {
  return (
    <div className="w-full flex gap-[250px] bg-[#FFE7D6] items-center px-[46px]">
      <div className="inline-flex flex-col items-start gap-[22px] ml-[26px]">
        <div className="flex flex-col items-start gap-[12px]">
          <span className="px-[12px] py-[6px] bg-[#2DA5F3] rounde-[2px] text-white text-[14px] font-[600] leading-[20px]">
            SAVE UP TO $200.00
          </span>
          <h2 className="text-[#191C1F] text-[48px] font-[600] leading-[56px]">
            Macbook Pro
          </h2>
        </div>
        <p className="text-[#191C1F] text-[24px] font-medium leading-[32px]">
          Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
        </p>
        <button
          type="button"
          className="bg-[#FA8232] px-[32px] leading-[56px] flex items-center justify-center gap-[12px] rounded-[3px] text-white font-bold uppercase"
        >
          Shop now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.75 12H20.25"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 5.25L20.25 12L13.5 18.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="relative">
        <img src={BannerImg} alt="Product" />
        <span className=" absolute left-[-20px] top-[20px] py-[41px] px-[25px] rounded-[50%] border-[6px] border-white bg-[#FFCEAD] text-[#191C1F] text-[20px] font-semibold leading-[28px]">$1999</span>
      </div>
      

    </div>
  );
};

export default Banner2;
