import { TopCategory, Links, Tags} from "../../assets/data/FooterData";
const Footer = () => {
  return (
    <div className="flex py-[72px] pl-[1.5%] items-start gap-[24px] bg-[#191C1F]">
      <div className="flex flex-col items-start gap-[24px] w-[25%]">
        <div className="flex justify-center items-center gap-[8px]">
          <img className="w-12 h-12" src="https://via.placeholder.com/48x48" />
          <h1 className="text-[32px] text-white font-bold leading-[40px]">
            JCOIN
          </h1>
        </div>
        <div className="flex flex-col items-start gap-[12px]">
          <div className="flex flex-col items-start gap-[4px]">
            <label className="text-[#77878F] text-[14px] leading-[20px]">
              Customer Supports:
            </label>
            <p className="text-white text-[18px] leading-[24px]">
              (629) 555-0129
            </p>
          </div>
          <p className="text-[#ADB7BC] leading-[24px]">
            4517 Washington Ave. <br /> Manchester, Kentucky 39495
          </p>
          <p className="text-white leading-[24px]">
            abdeldjalildh990@gmail.com
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[12px] w-[16%]">
        <div className="flex flex-col items-start gap-[18px]">
          <h5 className="text-white leading-[24px] uppercase">Top Category</h5>
          <div className="flex flex-col items-start gap-[12px]">
            {TopCategory.categories.map((category,index) => {
              return (
                <span key={index} className="text-[#929FA5] text-[14px] leading-[20px]">
                  {category}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-start gap-[12px]">
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#EBC80C] w-[24px] h-[2px]"></div>
            <h5 className="text-white leading-[20px] text-[14px]">
              Accessories
            </h5>
          </div>

          <div className="flex flex-col items-start gap-[12px]">
            {TopCategory.Accessories.map((accessorie,index) => {
              return (
                <span key={index} className="text-[#929FA5] text-[14px] leading-[20px]">
                  {accessorie}
                </span>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="flex py-[6px] items-center gap-[8px] text-[14px] text-[#EBC80C] leading-[20px]"
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
              stroke="#EBC80C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 4.375L16.875 10L11.25 15.625"
              stroke="#EBC80C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-start gap-[18px] w-[16%]">
        <h5 className="text-white leading-[24px] uppercase">Quick links</h5>
        <div className="flex flex-col items-start gap-[12px]">
          {Links.items.map((link,index) => {
            return (
              <span key={index} className="text-[#929FA5] text-[14px] leading-[20px]">
                {link}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[18px] w-[18%]">
        <h5 className="text-white leading-[24px] uppercase">Download APp</h5>
        <div className="flex flex-col items-start gap-[12px]">
           <div className="flex py-[16px] px-[20px] items-center justify-center gap-[16px] bg-[#303639] rounded-[3px]">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <g clipPath="url(#clip0_2503_13933)">
    <path d="M20.087 15.8129L6.29177 1.9793L23.8438 12.0561L20.087 15.8129ZM2.69017 1.1665C1.87737 1.5921 1.33337 2.3665 1.33337 3.3745V30.9585C1.33337 31.9665 1.87737 32.7409 2.69017 33.1665L18.7334 17.1633L2.69017 1.1665ZM29.271 15.2689L25.5894 13.1377L21.4822 17.1697L25.5894 21.2017L29.3462 19.0705C30.471 18.1761 30.471 16.1633 29.271 15.2689ZM6.29177 32.3601L23.8438 22.2833L20.087 18.5265L6.29177 32.3601Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_2503_13933">
      <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>

            <div className="flex flex-col items-start gap-[4px]">
                <p className="text-white text-[11px] leading-[13px]">Get it now</p>
                <span className="text-white text-[14px] semibold leading-[20px]">Google Play</span>
            </div>
           </div>


           <div className="flex py-[16px] px-[20px] items-center justify-center gap-[16px] bg-[#303639] rounded-[3px]">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <g clipPath="url(#clip0_2503_13940)">
    <path d="M29.056 25.438C28.5893 26.5249 28.013 27.5614 27.336 28.5313C26.4306 29.8213 25.69 30.714 25.1193 31.21C24.2346 32.0233 23.286 32.4407 22.2706 32.464C21.542 32.464 20.6633 32.2567 19.64 31.836C18.6133 31.4173 17.67 31.2093 16.8073 31.2093C15.9026 31.2093 14.9326 31.4173 13.8946 31.836C12.8553 32.2567 12.018 32.476 11.378 32.4973C10.4046 32.5393 9.43396 32.1107 8.46463 31.21C7.84663 30.67 7.07396 29.746 6.14729 28.4367C5.15329 27.038 4.33596 25.4167 3.69596 23.5673C3.01063 21.5707 2.66663 19.6367 2.66663 17.7647C2.66663 15.62 3.12996 13.7707 4.05796 12.2207C4.78796 10.9753 5.75796 9.994 6.97263 9.27267C8.16428 8.55956 9.52398 8.17581 10.9126 8.16067C11.686 8.16067 12.7 8.4 13.9606 8.87C15.2173 9.34133 16.024 9.58067 16.378 9.58067C16.642 9.58067 17.5386 9.30067 19.058 8.74333C20.4953 8.226 21.708 8.012 22.7013 8.09667C25.394 8.314 27.4166 9.37533 28.7613 11.2873C26.354 12.746 25.1626 14.7893 25.1866 17.4107C25.208 19.4527 25.9486 21.152 27.4046 22.5007C28.0646 23.1273 28.8013 23.6113 29.6206 23.9547C29.4488 24.4552 29.2605 24.9499 29.056 25.438ZM22.8813 1.14067C22.8813 2.74067 22.2966 4.23533 21.1313 5.618C19.7246 7.26267 18.024 8.21267 16.1793 8.06267C16.1545 7.86139 16.142 7.65879 16.142 7.456C16.142 5.92 16.8106 4.276 17.9986 2.93133C18.592 2.25067 19.3453 1.68467 20.26 1.23333C21.1733 0.788667 22.036 0.542667 22.848 0.5C22.8713 0.714 22.8813 0.928 22.8813 1.14V1.14067Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_2503_13940">
      <rect width="32" height="32" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>

            <div className="flex flex-col items-start gap-[4px]">
                <p className="text-white text-[11px] leading-[13px]">Get it now</p>
                <span className="text-white text-[14px] semibold leading-[20px]">Google Play</span>
            </div>
           </div>
        </div>
      </div>


      <div className="flex flex-col items-start gap-[18px] w-[25%]">
        <h5 className="text-white leading-[24px] uppercase">Popular Tag</h5>
        <div className="flex items-start gap-[8px] flex-wrap">
           {
            Tags.items.map((tag,index) => {
                return(
                    <span key={index} className="px-[12px] py-[6px] rounded-[2px] border border-[#303639] text-white text-[14px] leading-[20px]">{tag}</span>
                )
            })
           }
        </div>
      </div>


    </div>
  );
};

export default Footer;
