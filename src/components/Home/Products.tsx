import Banner from "../../assets/productes/Banner.jpg";
import { ProductHeader } from "../../assets/data/Products";
const Products = () => {
  return (
    <div className="flex gap-[24px]">
      <div className="bg-[#F3DE6D] roundeed-[3px] flex flex-col gap-[16px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[12px] my-[32px] mx-[18px] items-center justify-center">
            <div className="flex flex-col gap-[8px] items-center justify-center">
              <h6 className="font-[600] text-[14px] text-[#BE4646]">
                COMPUTER & ACCESSORIES
              </h6>
              <h1 className="font-[600] text-[32px] text-[#191C1F]">
                32% Discount
              </h1>
            </div>
            <div className="flex flex-col gap-[16px] items-center justify-center">
              <p className="font-[400] text-[#475156]">
                For all ellectronics products
              </p>
              <div className="flex gap-[8px] items-center">
                <span className="font-[600] text-[14px] text-[#191C1F]">
                  Offers ends in:
                </span>
                <div className="bg-white rounded-[2px] px-[12px] py-[6px]">
                  <span className="font-[600] text-[14px] text-[#191C1F]">
                    ENDS OF CHRISTMAS
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#FA8232] px-[32px] leading-[56px] flex items-center justify-center gap-[12px] rounded-[3px] text-white font-[700] uppercase">
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
        <img src={Banner} alt="Banner" />
      </div>

      <div className="flex flex-col gap-[24px] flex-grow">
        <header className="flex">
          <h2 className="font-[600] text-[24px] text-[#191C1F]">
            Featured Products
          </h2>
          <div className="flex-grow"></div>
          <div className="flex gap-[16px] items-center justify-center">
            <div className="flex">
              {ProductHeader.map((p) => {
                return (
                  <span
                    key={p.id}
                    className={`text-[14px] p-[8px] ${
                      p.active === true
                        ? "text-[#191C1F] font-[600] border-b-[2px] border-[#FA8232]"
                        : "text-[#5F6C72]"
                    } `}
                  >
                    {p.title}
                  </span>
                );
              })}
            </div>
            <button
              type="button"
              className="font-[600] text-[14px] text-[#FA8232] flex items-center gap-[8px]"
            >
              Browse All Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.125 10H16.875"
                  stroke="#FA8232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.25 4.375L16.875 10L11.25 15.625"
                  stroke="#FA8232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Products;
