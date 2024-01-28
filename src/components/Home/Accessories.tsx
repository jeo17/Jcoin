import Banner from "../../assets/productes/Banner.jpg";
import {
  AccessoriesHeader,
  MyAccessories,
} from "../../assets/data/AccessoriesData";
import banner1 from "../../assets/productes/Image2.png";
const Products: React.FC = () => {
  const generateStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63808 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63808 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188V11.9188Z"
                fill="#FA8232"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.275 11.9188L11.425 13.9188C11.8312 14.175 12.3312 13.7938 12.2125 13.325L11.3 9.73752C11.2753 9.63808 11.2792 9.53369 11.3113 9.43638C11.3434 9.33907 11.4023 9.2528 11.4812 9.18752L14.3062 6.83127C14.675 6.52502 14.4875 5.90627 14.0062 5.87502L10.3187 5.63752C10.2181 5.63166 10.1214 5.59663 10.0404 5.53669C9.95935 5.47675 9.89754 5.39451 9.8625 5.30002L8.4875 1.83752C8.4511 1.73745 8.38479 1.65102 8.29758 1.58994C8.21037 1.52886 8.10647 1.49609 8 1.49609C7.89352 1.49609 7.78963 1.52886 7.70241 1.58994C7.6152 1.65102 7.54889 1.73745 7.5125 1.83752L6.1375 5.30002C6.10245 5.39451 6.04064 5.47675 5.95962 5.53669C5.87859 5.59663 5.78186 5.63166 5.68125 5.63752L1.99375 5.87502C1.5125 5.90627 1.325 6.52502 1.69375 6.83127L4.51875 9.18752C4.59771 9.2528 4.65661 9.33907 4.68868 9.43638C4.72075 9.53369 4.72467 9.63808 4.7 9.73752L3.85625 13.0625C3.7125 13.625 4.3125 14.0813 4.79375 13.775L7.725 11.9188C7.8072 11.8665 7.90259 11.8387 8 11.8387C8.09741 11.8387 8.1928 11.8665 8.275 11.9188V11.9188Z"
                fill="white"
                stroke="#ADB7BC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-row-reverse gap-[24px]">
      <div className="  flex flex-col gap-[24px] w-[24%] items-center justify-center">
        <div className="bg-[#F7E99E] roundeed-[4px] px-[28px] py-[25px] flex flex-col gap-[24px] items-stretch justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={banner1} alt="product" />
            <div className="flex flex-col gap-[16px] items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-[8px]">
                <h2 className="text-[#191C1F] text-center text-[28px] font-semibold leading-[32px]">
                  Xiaomi True Wireless Earbuds
                </h2>
                <p className="text-[#475156] text-center leading-[24px]">
                  Escape the noise, It’s time to hear the magic with Xiaomi
                  Earbuds.
                </p>
              </div>
              <div className="flex items-center justify-center gap-[8px]">
                <p className="text-[#475156] text-[14px] leading-[20px]">
                  Only for:
                </p>
                <span className="text-[#191C1F] text-center font-semibold leading-[24px] px-[12px] py-[6px] bg-white rounded-[3px]">
                  $299 USD
                </span>
              </div>
            </div>
          </div>

          <button className="bg-[#FA8232] px-[24px] leading-[48px] text-[14px] flex items-center justify-center gap-[8px] rounded-[2px] text-white font-semibold uppercase">
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

        <div className="px-[24px] py-[36px] flex flex-col items-center justify-center gap-[24px] bg-[#124261] roundeed-[4px]">
           <div className="flex flex-col items-center justify-center gap-[12px]">
              <span className="px-[12px] py-[6px] rounded-[2px] bg-[#2f5974] text-white text-[14px] font-semibold leading-[20px]">SUMMER SALES</span>
              <h3 className="text-white text-[28px] font-semibold leading-[32px]">37% DISCOUNT</h3>
              <p className="text-white text-center text-[18px] font-normal leading-[24px]">only for <span className="font-semibold text-[#EBC80C]">SmartPhone</span> product.</p>
           </div>
           <button className="bg-[#2DA5F3] px-[24px] leading-[48px] text-[14px] flex items-center justify-center gap-[8px] rounded-[2px] text-white font-semibold uppercase">
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
      </div>

      <div className="flex flex-col gap-[24px] flex-grow w-[76%]">
        <header className="flex">
          <h2 className="font-[600] text-[24px] text-[#191C1F]">
            Computer Accessories
          </h2>
          <div className="flex-grow"></div>
          <div className="flex gap-[16px] items-center justify-center">
            <div className="flex">
              {AccessoriesHeader.map((a) => {
                return (
                  <span
                    key={a.id}
                    className={`text-[14px] p-[8px] ${
                      a.active === true
                        ? "text-[#191C1F] font-[600] border-b-[2px] border-[#FA8232]"
                        : "text-[#5F6C72]"
                    } `}
                  >
                    {a.title}
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
        <main className="flex gap-[16px] flex-wrap">
          {MyAccessories.map((Accessorie) => {
            return (
              <div className="border border-[#E4E7E9] rounded-[3px] w-[23.7%] p-[16px] relative">
                <img
                  src={Accessorie.imageUrl}
                  alt="product"
                  className="mb-[24px]"
                />
                <div className=" flex flex-col gap-[8px]">
                  <div className="flex gap-[4px] items-center">
                    <div className="flex">
                      {Accessorie.rating
                        ? generateStars(Accessorie.rating!)
                        : null}
                    </div>
                    <span className="text-[#77878F] text-[12px] font-[400]">
                      ({Accessorie.nbrOfPeople})
                    </span>
                  </div>
                  <p className="text-[#191C1F] text-[13.7px] font-[600]">
                    {Accessorie.desc}
                  </p>

                  {Accessorie.coupon === null ? (
                    <span className="text-[14px] text-[#2DA5F3] font-[600]">
                      ${Accessorie.price}
                    </span>
                  ) : (
                    <div className="flex items-center gap-[4px]">
                      <span className="text-[#ADB7BC] line-through text-[12px]">
                        ${Accessorie.price}
                      </span>
                      <span className="text-[14px] text-[#2DA5F3] font-[600]">
                        $
                        {((100 - Accessorie.coupon) *
                          Number(Accessorie.price)) /
                          100}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-start gap-[8px] absolute top-[14px] left-[14px]">
                  {Accessorie.coupon !== null && (
                    <label
                      htmlFor="coupon"
                      className="bg-[#EFD33D] px-[10px] py-[5px] rounded-[2px] text-[#191C1F] text-[12px] font-[600] leading-[16px]"
                    >
                      {Accessorie.coupon}% OFF
                    </label>
                  )}

                  {Accessorie.state !== null && (
                    <label
                      htmlFor="state"
                      className={`text-white text-[12px] font-[600] leading-[16px] px-[10px] py-[5px] rounded-[2px] ${
                        Accessorie.state === "HOT"
                          ? "bg-[#EE5858]"
                          : Accessorie.state === "SOLD OUT"
                          ? "bg-[#929FA5]"
                          : Accessorie.state === "BEST DEALS"
                          ? "bg-[#2DA5F3]"
                          : Accessorie.state === "SALE"
                          ? "bg-[#2DB224]"
                          : null
                      }`}
                    >
                      {Accessorie.state}
                    </label>
                  )}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Products;
