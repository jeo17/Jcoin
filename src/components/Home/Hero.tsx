import Xbox360 from "../../assets/productes/Image.png";
import Pixel6 from "../../assets/productes/image 5.png";
import Airpodes from "../../assets/productes/image 4.png";
import { Feutures } from "../../assets/data/HomeData";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex mt-[28px] h-[540px] gap-[24px]">
        <div className="bg-[#F2F4F5] rounded-[6px] h-full w-[68%] relative flex items-center gap-[30px]">
          <div className="flex flex-col items-start w-[360px] ml-[56px]">
            <div className="flex justify-start items-center gap-[8px]">
              <div className="w-[24px] h-[2px] bg-[#2DA5F3]" />
              <p className="text-[14px] font-[600] font-ps text-[#2DA5F3]">
                THE BEST PLACE TO PLAY
              </p>
            </div>
            <h1 className="font-ps font-[600] text-[48px] texy-[#191C1F]">
              Xbox Consoles
            </h1>
            <p className="font-ps font-[400] text-[18px] text-[#475156] mt-[16px]">
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
              for $2 USD.
            </p>
            <button className="rounded-[3px] mt-[24px] font-ps flex justify-center items-center gap-[12px] px-[32px] bg-[#FA8232] font-[600] uppercase leading-[56px] mr-5 text-[#fff]">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 5.25L20.25 12L13.5 18.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-[8px] absolute left-[56px] bottom-[56px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#191C1F" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#ADB7BC" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <circle cx="5" cy="5" r="5" fill="#ADB7BC" />
            </svg>
          </div>
          <img src={Xbox360} alt="producte" />
          <div className="px-[24px] bg-[#2DA5F3] rounded-[50%] text-white text-[23px] font-[600] leading-[100px] absolute top-[60px] right-[60px]">
            $299
          </div>
        </div>

        <div className="flex flex-col h-full w-[32%] gap-[20px]">
          <div className="bg-[#191C1F] rounded-[6px] w-full flex items-start relative">
            <div className="my-[46px] ml-[30px] w-[180px]">
              <span className="font-ps text-[14px] text-[#EBC80C] uppercase">
                Summer Sales
              </span>
              <h2 className="text-[24px] text-white font-ps font-[500]">
                New Google Pixel 6 Pro
              </h2>
              <button className="rounded-[2px] mt-[24px] font-ps flex justify-center items-center gap-[8px] px-[24px] bg-[#FA8232] text-[14px] font-[600] uppercase leading-[48px] mr-5 text-[#fff]">
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 right-0 flex flex-col items-center">
              <span className="px-[16px] py-[8px] bg-[#EFD33D] rounded-[2px] font-[600] font-ps translate-x-10 translate-y-4">
                29% OFF
              </span>
              <img src={Pixel6} alt="pdroduct" className="" />
            </div>
          </div>

          <div className="bg-[#F2F4F5] rounded-[6px] w-full relative flex items-center gap-[20px]">
            <img src={Airpodes} alt="producte" className="ml-[32px]" />
            <div className="flex flex-col items-start my-[40px]">
              <h1 className="font-ps font-[600] text-[24px] texy-[#191C1F]">
                Xiaomi <br /> FlipBuds Pro
              </h1>
              <p className="font-ps font-[600] text-[18px] mt-[12px] text-[#2DA5F3]">
                $299 USD
              </p>
              <button className="rounded-[2px] mt-[20px] font-ps flex justify-center items-center gap-[8px] px-[24px] bg-[#FA8232] text-[14px] font-[600] uppercase leading-[48px] mr-5 text-[#fff]">
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex border-[#E4E7E9] border p-[16px] justify-center items-center gap-[28px]">
        {Feutures.map((feuture, index) => {
          return (
            <div
              key={index}
              className="flex gap-[16px] justify-center items-center p-[16px]"
            >
              <span className="text-[40px]">{feuture.icon(feuture)}</span>
              <div className="flex flex-col gap-[4px] items-start w-[192px]">
                <h3 className="font-ps text-[14px] text-[#191C1F] uppercase font-[600]">
                  {feuture.title}
                </h3>
                <p className="font-ps text-[14px] text-[#5F6C72] font-[400]">
                  {feuture.desc}
                </p>
              </div>
              {++index !== Feutures.length ? (
                <div className="bg-[#E4E7E9] w-[1px] h-[56px]"></div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
