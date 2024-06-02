import NavBar from "../components/navigation/NavBar";
import Footer from "../components/Home/Footer";
import NavigationTab from "../components/navigation/NavigationTab";
const Track = () => {
  return (
    <>
      <NavBar highlitPage="Track Order" />
      <div className="flex flex-col items-start">
        <NavigationTab tab={["Pages"]} main="Track Order" />
        <div className="w-full pt-[48px] pb-[124px] pl-[26px]">
          <div className="flex flex-col gap-[32px] items-start">
            <div className="flex flex-col gap-[24px] items-start">
              <div className="flex flex-col gap-[16px] items-start">
                <h1 className="text-[#191C1F] text-[32px] leading-[40px] font-semibold">
                  Track Order
                </h1>
                <p className="text-[#5F6C72] leading-[24xp] w-[760px]">
                  To track your order please enter your order ID in the input
                  field below and press the “Track Order” button. this was given
                  to you on your receipt and in the confirmation email you
                  should have received.
                </p>
              </div>
              <div className="flex items-start gap-[24px] w-[870px] justify-between">
                <div className="flex flex-col gap-[16px] w-full">
                  <div className="flex flex-col gap-[8px]">
                    <span className="text-[14px] text-[#191C1F]">Order ID</span>
                    <input
                      type="text"
                      name="tracker"
                      className="rounded-[2px] border-[1px] border-[#E4E7E9] py-[12px] pl-[16px]"
                      placeholder="ID..."
                    />
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g id="Regular/Info">
                        <path
                          id="Vector"
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#5F6C72"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_2"
                          d="M11.25 11.25H12V16.5H12.75"
                          stroke="#5F6C72"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_3"
                          d="M11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9Z"
                          fill="#5F6C72"
                        />
                      </g>
                    </svg>
                    <p className="text-[#5F6C72] text-[14px]">
                      Order ID that we sended to your in your email address.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[8px] w-full">
                  <span className="text-[14px] text-[#191C1F]">
                    Billing Email
                  </span>
                  <input
                    type="text"
                    name="tracker"
                    className="rounded-[2px] border-[1px] border-[#E4E7E9] py-[12px] pl-[16px]"
                    placeholder="Email address"
                  />
                </div>
              </div>
            </div>
            <button className="rounded-[3px] bg-[#FA8232] text-white font-semibold px-[32px] leading-[56px] flex items-center gap-[12px] ">
              Track Order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="Regular/ArrowRight">
                  <path
                    id="Vector"
                    d="M3.75 12H20.25"
                    stroke="white"
                    stroke-width="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="white"
                    stroke-width="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Track;
