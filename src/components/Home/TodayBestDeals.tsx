import { Products } from "../../assets/data/TodayBestDealsData";

const TodayBestDeals: React.FC = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <header className="flex justify-between">
        <div className="flex justify-center items-center gap-[12px]">
          <h2 className="font-ps font-[700] text-[24px] text-[#191C1F] mr-[12px]">
            Best Deals
          </h2>
          <span className="font-ps font-semibold text-[14px]">
            Deals ends in
          </span>
          <div className="flex px-[12px] py-[6px] gap-[6px] bg-[#F3DE6D] rounded-[2px]">
            <div className="font-ps font-bold text-[#191C1F]">16d :</div>
            <div className="font-ps font-bold text-[#191C1F]">21h :</div>
            <div className="font-ps font-bold text-[#191C1F]">57m :</div>
            <div className="font-ps font-bold text-[#191C1F]">23s</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[8px]">
          <p className="text-[14px] font-ps font-[600] text-[#2DA5F3]">
            Browse All Product
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.125 10H16.875"
              stroke="#2DA5F3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 4.375L16.875 10L11.25 15.625"
              stroke="#2DA5F3"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </header>
      <main className="flex">
        <div className="flex flex-col p-[22px] gap-[24px] w-[25%] border border-[#E4E7E9] relative">
          <img
            src={Products[0].imageUrl}
            alt="product"
            className="bg-contain"
          />

          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center gap-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.3437 14.8985L14.2812 17.3985C14.7891 17.7188 15.4141 17.2422 15.2656 16.6563L14.125 12.1719C14.0942 12.0476 14.0991 11.9171 14.1391 11.7955C14.1792 11.6738 14.2529 11.566 14.3516 11.4844L17.8828 8.53908C18.3437 8.15627 18.1094 7.38283 17.5078 7.34377L12.8984 7.04689C12.7727 7.03958 12.6518 6.99578 12.5505 6.92086C12.4492 6.84594 12.3719 6.74314 12.3281 6.62502L10.6094 2.29689C10.5639 2.17182 10.481 2.06377 10.372 1.98742C10.263 1.91107 10.1331 1.87012 10 1.87012C9.8669 1.87012 9.73703 1.91107 9.62802 1.98742C9.519 2.06377 9.43612 2.17182 9.39062 2.29689L7.67187 6.62502C7.62807 6.74314 7.5508 6.84594 7.44952 6.92086C7.34824 6.99578 7.22733 7.03958 7.10156 7.04689L2.49218 7.34377C1.89062 7.38283 1.65625 8.15627 2.11718 8.53908L5.64843 11.4844C5.74713 11.566 5.82077 11.6738 5.86085 11.7955C5.90094 11.9171 5.90584 12.0476 5.875 12.1719L4.82031 16.3281C4.64062 17.0313 5.39062 17.6016 5.99218 17.2188L9.65625 14.8985C9.759 14.8331 9.87824 14.7984 10 14.7984C10.1218 14.7984 10.241 14.8331 10.3437 14.8985Z"
                  fill="#EBC80C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.3437 14.8985L14.2812 17.3985C14.7891 17.7188 15.4141 17.2422 15.2656 16.6563L14.125 12.1719C14.0942 12.0476 14.0991 11.9171 14.1391 11.7955C14.1792 11.6738 14.2529 11.566 14.3516 11.4844L17.8828 8.53908C18.3437 8.15627 18.1094 7.38283 17.5078 7.34377L12.8984 7.04689C12.7727 7.03958 12.6518 6.99578 12.5505 6.92086C12.4492 6.84594 12.3719 6.74314 12.3281 6.62502L10.6094 2.29689C10.5639 2.17182 10.481 2.06377 10.372 1.98742C10.263 1.91107 10.1331 1.87012 10 1.87012C9.8669 1.87012 9.73703 1.91107 9.62802 1.98742C9.519 2.06377 9.43612 2.17182 9.39062 2.29689L7.67187 6.62502C7.62807 6.74314 7.5508 6.84594 7.44952 6.92086C7.34824 6.99578 7.22733 7.03958 7.10156 7.04689L2.49218 7.34377C1.89062 7.38283 1.65625 8.15627 2.11718 8.53908L5.64843 11.4844C5.74713 11.566 5.82077 11.6738 5.86085 11.7955C5.90094 11.9171 5.90584 12.0476 5.875 12.1719L4.82031 16.3281C4.64062 17.0313 5.39062 17.6016 5.99218 17.2188L9.65625 14.8985C9.759 14.8331 9.87824 14.7984 10 14.7984C10.1218 14.7984 10.241 14.8331 10.3437 14.8985Z"
                  fill="#EBC80C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.3437 14.8985L14.2812 17.3985C14.7891 17.7188 15.4141 17.2422 15.2656 16.6563L14.125 12.1719C14.0942 12.0476 14.0991 11.9171 14.1391 11.7955C14.1792 11.6738 14.2529 11.566 14.3516 11.4844L17.8828 8.53908C18.3437 8.15627 18.1094 7.38283 17.5078 7.34377L12.8984 7.04689C12.7727 7.03958 12.6518 6.99578 12.5505 6.92086C12.4492 6.84594 12.3719 6.74314 12.3281 6.62502L10.6094 2.29689C10.5639 2.17182 10.481 2.06377 10.372 1.98742C10.263 1.91107 10.1331 1.87012 10 1.87012C9.8669 1.87012 9.73703 1.91107 9.62802 1.98742C9.519 2.06377 9.43612 2.17182 9.39062 2.29689L7.67187 6.62502C7.62807 6.74314 7.5508 6.84594 7.44952 6.92086C7.34824 6.99578 7.22733 7.03958 7.10156 7.04689L2.49218 7.34377C1.89062 7.38283 1.65625 8.15627 2.11718 8.53908L5.64843 11.4844C5.74713 11.566 5.82077 11.6738 5.86085 11.7955C5.90094 11.9171 5.90584 12.0476 5.875 12.1719L4.82031 16.3281C4.64062 17.0313 5.39062 17.6016 5.99218 17.2188L9.65625 14.8985C9.759 14.8331 9.87824 14.7984 10 14.7984C10.1218 14.7984 10.241 14.8331 10.3437 14.8985Z"
                  fill="#EBC80C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.3437 14.8985L14.2812 17.3985C14.7891 17.7188 15.4141 17.2422 15.2656 16.6563L14.125 12.1719C14.0942 12.0476 14.0991 11.9171 14.1391 11.7955C14.1792 11.6738 14.2529 11.566 14.3516 11.4844L17.8828 8.53908C18.3437 8.15627 18.1094 7.38283 17.5078 7.34377L12.8984 7.04689C12.7727 7.03958 12.6518 6.99578 12.5505 6.92086C12.4492 6.84594 12.3719 6.74314 12.3281 6.62502L10.6094 2.29689C10.5639 2.17182 10.481 2.06377 10.372 1.98742C10.263 1.91107 10.1331 1.87012 10 1.87012C9.8669 1.87012 9.73703 1.91107 9.62802 1.98742C9.519 2.06377 9.43612 2.17182 9.39062 2.29689L7.67187 6.62502C7.62807 6.74314 7.5508 6.84594 7.44952 6.92086C7.34824 6.99578 7.22733 7.03958 7.10156 7.04689L2.49218 7.34377C1.89062 7.38283 1.65625 8.15627 2.11718 8.53908L5.64843 11.4844C5.74713 11.566 5.82077 11.6738 5.86085 11.7955C5.90094 11.9171 5.90584 12.0476 5.875 12.1719L4.82031 16.3281C4.64062 17.0313 5.39062 17.6016 5.99218 17.2188L9.65625 14.8985C9.759 14.8331 9.87824 14.7984 10 14.7984C10.1218 14.7984 10.241 14.8331 10.3437 14.8985Z"
                  fill="#EBC80C"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.3437 14.8985L14.2812 17.3985C14.7891 17.7188 15.4141 17.2422 15.2656 16.6563L14.125 12.1719C14.0942 12.0476 14.0991 11.9171 14.1391 11.7955C14.1792 11.6738 14.2529 11.566 14.3516 11.4844L17.8828 8.53908C18.3437 8.15627 18.1094 7.38283 17.5078 7.34377L12.8984 7.04689C12.7727 7.03958 12.6518 6.99578 12.5505 6.92086C12.4492 6.84594 12.3719 6.74314 12.3281 6.62502L10.6094 2.29689C10.5639 2.17182 10.481 2.06377 10.372 1.98742C10.263 1.91107 10.1331 1.87012 10 1.87012C9.8669 1.87012 9.73703 1.91107 9.62802 1.98742C9.519 2.06377 9.43612 2.17182 9.39062 2.29689L7.67187 6.62502C7.62807 6.74314 7.5508 6.84594 7.44952 6.92086C7.34824 6.99578 7.22733 7.03958 7.10156 7.04689L2.49218 7.34377C1.89062 7.38283 1.65625 8.15627 2.11718 8.53908L5.64843 11.4844C5.74713 11.566 5.82077 11.6738 5.86085 11.7955C5.90094 11.9171 5.90584 12.0476 5.875 12.1719L4.82031 16.3281C4.64062 17.0313 5.39062 17.6016 5.99218 17.2188L9.65625 14.8985C9.759 14.8331 9.87824 14.7984 10 14.7984C10.1218 14.7984 10.241 14.8331 10.3437 14.8985Z"
                  fill="#EBC80C"
                />
              </svg>

              <p className="ml-2 text-[14px] font-px text-[#77878F]">
                (52.581){" "}
              </p>
            </div>
            <h4 className="text-[#191C1F] font-semibold">{Products[0].desc}</h4>

            {Products[0].coupon === null ? (
              <span className="text-[18px] text-[#2DA5F3] font-[600]">
                ${Products[0].price}
              </span>
            ) : (
              <div className="flex items-center gap-[4px]">
                <span className="text-[#ADB7BC] line-through">
                  ${Products[0].price}
                </span>
                <span className="text-[18px] text-[#2DA5F3] font-[600]">
                  $
                  {((100 - Products[0].coupon) * Number(Products[0].price)) /
                    100}
                </span>
              </div>
            )}

            <p className="text-[#5F6C72] text-[14px]">
              Games built using the Xbox Series X|S development kit showcase
              unparalleled load times, visuals.
            </p>
          </div>

          <div className="flex gap-[8px]">
            <span className="p-[12px] bg-[#FFE7D6] rounded-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                  stroke="#191C1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <button className="rounded-[2px] font-[600] flex px-[24px] bg-[#FA8232] leading-[48px] gap-[8px] text-white justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M7.75 16.875C7.75 17.1511 7.52614 17.375 7.25 17.375C6.97386 17.375 6.75 17.1511 6.75 16.875C6.75 16.5989 6.97386 16.375 7.25 16.375C7.52614 16.375 7.75 16.5989 7.75 16.875Z"
                  fill="white"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M15.375 18.125C16.0654 18.125 16.625 17.5654 16.625 16.875C16.625 16.1846 16.0654 15.625 15.375 15.625C14.6846 15.625 14.125 16.1846 14.125 16.875C14.125 17.5654 14.6846 18.125 15.375 18.125Z"
                  fill="white"
                />
                <path
                  d="M4.30469 5.625H18.3203L16.2578 12.8438C16.1842 13.1057 16.0266 13.3363 15.8093 13.5C15.5919 13.6638 15.3268 13.7516 15.0547 13.75H7.57031C7.29819 13.7516 7.03308 13.6638 6.81572 13.5C6.59836 13.3363 6.44078 13.1057 6.36719 12.8438L3.53906 2.95313C3.50169 2.82246 3.42275 2.70754 3.3142 2.62578C3.20565 2.54401 3.0734 2.49986 2.9375 2.5H1.625"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Add to card
            </button>

            <span className="p-[12px] bg-[#FFE7D6] rounded-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z"
                  stroke="#191C1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#191C1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col items-start gap-[8px] absolute top-[16px] left-[16px]">
                      {Products[0].coupon !== null && (
                        <label
                          htmlFor="coupon"
                          className="bg-[#EFD33D] px-[10px] py-[5px] rounded-[2px] text-[#191C1F] text-[12px] font-[600] leading-[16px]"
                        >
                          {Products[0].coupon}% OFF
                        </label>
                      )}

                      {Products[0].state !== null && (
                        <label
                          htmlFor="state"
                          className={`text-white text-[12px] font-[600] leading-[16px] px-[10px] py-[5px] rounded-[2px] ${
                            Products[0].state === "HOT"
                              ? "bg-[#EE5858]"
                              : Products[0].state === "SOLD OUT"
                              ? "bg-[#929FA5]"
                              : Products[0].state === "BEST DEALS"
                              ? "bg-[#2DA5F3]"
                              : Products[0].state === "SALE"
                              ? "bg-[#2DB224]"
                              : null
                          }`}
                        >
                          {Products[0].state}
                        </label>
                      )}
                    </div>
        </div>

        <div className="w-[75%] ">
          <div className="flex w-full h-full flex-wrap">
            {Products.map((Product) => {
              if (Product.id !== "1") {
                return (
                  <div className="flex flex-col p-[16px] gap-[8px] border border-[#E4E7E9] w-[25%] relative">
                    <img
                      src={Product.imageUrl}
                      alt="product"
                      className="bg-contain w-[216px] h-[188px]"
                    />

                    <div className="flex flex-col gap-[12px]">
                      <h4 className="text-[#191C1F] font-semibold text-[14px]">
                        {Product.desc}
                      </h4>

                      {Product.coupon === null ? (
                        <span className="text-[14px] text-[#2DA5F3] font-[600]">
                          ${Product.price}
                        </span>
                      ) : (
                        <div className="flex items-center gap-[4px]">
                          <span className="text-[#ADB7BC] line-through text-[12px]">
                            ${Product.price}
                          </span>
                          <span className="text-[14px] text-[#2DA5F3] font-[600]">
                            $
                            {((100 - Product.coupon) * Number(Product.price)) /
                              100}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-start gap-[8px] absolute top-[16px] left-[16px]">
                      {Product.coupon !== null && (
                        <label
                          htmlFor="coupon"
                          className="bg-[#EFD33D] px-[10px] py-[5px] rounded-[2px] text-[#191C1F] text-[12px] font-[600] leading-[16px]"
                        >
                          {Product.coupon}% OFF
                        </label>
                      )}

                      {Product.state !== null && (
                        <label
                          htmlFor="state"
                          className={`text-white text-[12px] font-[600] leading-[16px] px-[10px] py-[5px] rounded-[2px] ${
                            Product.state === "HOT"
                              ? "bg-[#EE5858]"
                              : Product.state === "SOLD OUT"
                              ? "bg-[#929FA5]"
                              : Product.state === "BEST DEALS"
                              ? "bg-[#2DA5F3]"
                              : Product.state === "SALE"
                              ? "bg-[#2DB224]"
                              : null
                          }`}
                        >
                          {Product.state}
                        </label>
                      )}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TodayBestDeals;
