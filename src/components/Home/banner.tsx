import Banner1w from "../../assets/productes/Banner1-w.png";
import Banner1b from "../../assets/productes/Banner1-b.png";

const Banner: React.FC = () => {
  return (
    <div className="flex gap-[24px] items-start">
      <div className="flex p-[44px] gap-[40px] justify-center items-center rounded-[4px] bg-[#F2F4F5]">
        <div className="flex flex-col gap-[20px] items-start">
          <div className="flex flex-col gap-[12px] items-start">
            <div className="flex flex-col gap-[8px] items-start">
              <span className="px-[12px] py-[6px] text-white text-[14px] leading-[20px] bg-[#2DA5F3] rounded-[2px]">
                INTRODUCING
              </span>
              <h2 className="text-[32px] text-[#191C1F] font-[600] leading-[40px]">
                New Apple Homepod Mini
              </h2>
            </div>
            <p className="text-[#475156] leading-[24px]">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
          </div>
          <button className="flex px-[24px] gap-[8px] items-center justify-center bg-[#FA8232] rounded-[2px] text-white text-[14px] font-[600] leading-[48px] uppercase">
            Shop now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.125 10H16.875"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <img src={Banner1w} alt="product" />
      </div>
      <div className="flex gap-[12px] justify-center items-end rounded-[4px] bg-[#191C1F]">
        <div className="flex flex-col gap-[20px] items-start pl-[44px] py-[44px]">
          <div className="flex flex-col gap-[12px] items-start">
            <div className="flex flex-col gap-[8px] items-start">
              <span className="px-[12px] py-[6px] text-white text-[14px] leading-[20px] bg-[#EFD33D] rounded-[2px]">
              INTRODUCING NEW
              </span>
              <h2 className="text-[32px] text-white font-[600] leading-[40px]">
                Xiaomi Mi 11 Ultra 12GB+256GB
              </h2>
            </div>
            <p className="text-[#ADB7BC] leading-[24px]">
              *Data provided by internal laboratories. Industry measurment.
            </p>
          </div>
          <button className="flex px-[24px] gap-[8px] items-center justify-center bg-[#FA8232] rounded-[2px] text-white text-[14px] font-[600] leading-[48px] uppercase">
            Shop now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.125 10H16.875"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="white"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <img src={Banner1b} alt="product" />
      </div>
    </div>
  );
};

export default Banner;
