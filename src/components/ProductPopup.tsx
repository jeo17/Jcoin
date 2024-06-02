import Payment from "../assets/productes/PaymentMethod.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { hideDialog } from "../Redux/slices/QuickViewSlice";
import useAddToCard from "../hooks/addToCard";
import useAddToCompare from "../hooks/addToCompare";
import useAddToWishlist from "../hooks/addToWishlist";
import useRemoveFromWishlist from "../hooks/removeFromWishlist";
import { products } from "../Redux/dataApi";
import Snackbar from "./Snackbar";
import useSnackbar from "../hooks/snackbarcall";
import { Link } from "react-router-dom";

function ProductPopup() {
  const { visibility, showenProduct } = useSelector((state) => state.counter);
  const { WishlistCard } = useSelector((state) => state.wishlist);
  const { visible, message, showSnackbar } = useSnackbar();


  const isProductInWishlist = (productId: string) =>
    WishlistCard.some((product: products) => product.id === productId);

  const dispatch = useDispatch();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const addProductToCard = useAddToCard();
  const addProductToCompare = useAddToCompare();
  const addProductToWishlist = useAddToWishlist();
  const removeProductFromWishlist = useRemoveFromWishlist();

  // eslint-disable-next-line prefer-const
  let [counter, setCounter] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<number>();

  useEffect(() => {
    const dialog = dialogRef.current;
    const body = document.body;
    if (dialog) {
      if (visibility) {
        if (!dialog.open) {
          // Check if the dialog is not already open
          dialog.showModal();
          body.classList.add("stopScolling");
        }
      } else {
        if (dialog.open) {
          // Check if the dialog is open
          dialog.close();
          body.classList.remove("stopScolling");
        }
      }
    }

    return () => {
      body.classList.remove("stopScolling");
    };
  }, [visibility]);

  if (visibility) {
    return (
      <dialog
        ref={dialogRef}
        id="Quick-view"
        className={`p-[40px] flex gap-[56px] items-start w-[90%] rounded-[5px]`}
      >
        <div className="flex flex-col justify-center items-center gap-[20px] w-[46%]">
          <div className="w-[500px] h-[380px]">
            <img
              src={showenProduct.imageUrl}
              alt=""
              className=" w-[80%] h-[85%] py-[25px] px-[20px] object-contain"
            />
          </div>

          <div className=""></div>
        </div>
        <div className="flex flex-col items-start gap-[24px] w-[54%]">
          <div className="flex flex-col items-start gap-[16px]">
            <div className="flex flex-col items-start gap-[8px] w-[100%]">
              {showenProduct.rating !== null &&
              showenProduct.rating !== undefined ? (
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center justify-center">
                    {[...Array(showenProduct.rating)].map((_, i) => (
                      <svg
                        key={i}
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
                    ))}
                  </span>
                  <span className="font-semibold text-[13px] text-[#191C1F]">
                    {showenProduct.rating} Star Rating
                  </span>
                  <span className="text-[13px] text-[#5F6C72]">
                    (21,671 User feedback)
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
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
                    ))}
                  </span>
                  <span className="font-semibold text-[13px] text-[#191C1F]">
                    5 Star Ratingssss
                  </span>
                  <span className="text-[13px] text-[#5F6C72]">
                    (still there is no feedback)
                  </span>
                </div>
              )}

              <div className="font-semibold text-[20px] text-[#191C1F] leading-[28px]">
                {showenProduct.desc}
              </div>
            </div>
            <div className="w-[100%] flex items-center">
              <div className="w-[50%] flex flex-col items-start">
                <span className="text-[#5F6C72] flex items-center gap-1 text-[14px]">
                  Sku:{" "}
                  <p className="text-[#191C1F] font-semibold text-[14px]">
                    {showenProduct.sku}
                  </p>{" "}
                </span>
                <span className="text-[#5F6C72] flex items-center gap-1 text-[14px]">
                  Brand:{" "}
                  <p className="text-[#191C1F] font-semibold text-[14px]">
                    Apple
                  </p>
                </span>
              </div>
              <div className="w-[50%] flex flex-col items-start">
                <span className="text-[#5F6C72] flex items-center gap-1 text-[14px]">
                  Availability:{" "}
                  <p className="text-[#2DB224] font-semibold text-[14px]">
                    In Stock
                  </p>
                </span>
                <span className="text-[#5F6C72] flex items-center gap-1 text-[14px]">
                  Category:{" "}
                  <p className="text-[#191C1F] font-semibold text-[14px]">
                    Electronics Devices
                  </p>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[12px]">
            {showenProduct.coupon === null ? (
              <span className=" text-[#2DA5F3] font-[600]">
                ${showenProduct.price}
              </span>
            ) : (
              <div className="flex gap-[12px] items-center">
                <div className="text-[#2DA5F3] font-semibold flex items-center gap-[3px]">
                  $
                  {((100 - showenProduct.coupon) *
                    Number(showenProduct.price)) /
                    100}
                  <span className="text-[#77878F] text-[14px] line-through font-medium">
                    ${showenProduct.price}
                  </span>
                </div>
                {showenProduct.coupon !== null && (
                  <span className="text-[#191C1F] text-[14px] px-[10px] py-[5px] font-semibold bg-[#EFD33D] rounded-[2px]">
                    {showenProduct.coupon}% OFF
                  </span>
                )}
              </div>
            )}

            {showenProduct.state !== null && (
              <span
                className={`text-[#191C1F] text-[14px] px-[10px] py-[5px] font-semibold rounded-[2px] ${
                  showenProduct.state === "HOT"
                    ? "bg-[#EE5858]"
                    : showenProduct.state === "SOLD OUT"
                    ? "bg-[#929FA5]"
                    : showenProduct.state === "BEST DEALS"
                    ? "bg-[#2DA5F3]"
                    : showenProduct.state === "SALE"
                    ? "bg-[#2DB224]"
                    : null
                }`}
              >
                {showenProduct.state}
              </span>
            )}
          </div>

          <div className="w-full h-[1px] bg-[#E4E7E9]"></div>

          <div className="w-[100%] flex items-center">
            <div className="w-[100%] flex items-start gap-[24px] flex-wrap justify-between">
              {showenProduct.colores !== undefined && (
                <div className="w-[45%] flex flex-col items-start gap-[14px]">
                  <span className="text-[14px] text-[#191C1F]">Color</span>
                  <div className="flex items-center gap-[12px]">
                    {showenProduct.colores.map(
                      (color: string, index: number) => {
                        return (
                          <div
                            className={`border-[2px] rounded-[50%]  p-[2px] ${
                              index === selectedColor
                                ? "border-[#FA8232]"
                                : null
                            }`}
                          >
                            <div
                              key={index}
                              className={`rounded-[50%] w-[34px] h-[34px] shadow-md cursor-pointer`}
                              style={{ backgroundColor: color }}
                              onClick={() => {
                                setSelectedColor(index);
                              }}
                            ></div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}

              {showenProduct.features !== undefined && (
                <>
                  {showenProduct.features.map(
                    (feature: { name: string; value: [] }, index: number) => {
                      return (
                        <div
                          key={index}
                          className="w-[45%] flex flex-col items-start gap-[8px]"
                        >
                          <span className="text-[14px] text-[#191C1F]">
                            {feature.name}
                          </span>
                          <select
                            name="propertyname"
                            id={`${index}`}
                            className="py-[10px] px-[12px] w-[100%] text-[14px] border-[#E4E7E9] border text-[#475156]"
                          >
                            {feature.value.map(
                              (option: string, index: number) => {
                                return (
                                  <option key={index} value="">
                                    {option}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </div>
                      );
                    }
                  )}
                </>
              )}
            </div>
          </div>

          <div className="flex items-center w-full gap-[8px] xl:gap-[0] xl:justify-between">
            <div className="border-[#E4E7E9] border-[2px] flex items-center gap-[22px] xl:gap-[32px] py-[5px] px-[14px] xl:px-[20px]">
              <button
                className={`text-[24px] cursor-pointer ${
                  counter === 1 ? "text-[#a1a1a1] cursor-default" : null
                }`}
                disabled={counter === 1}
                onClick={() => {
                  setCounter(--counter);
                }}
              >
                −
              </button>
              <span className="text-[#475156]">{counter}</span>
              <button
                className="text-[24px] cursor-pointer"
                onClick={() => {
                  setCounter(++counter);
                }}
              >
                +
              </button>
            </div>
            <button
              className="hover:scale-[0.97] duration-500 rounded-[3px] flex justify-center flex-grow xl:flex-grow-0 items-center gap-[8px] xl:gap-[12px] text-white whites font-semibold leading-[50px] px-[20px] lg:px-[26px] xl:px-[60px] bg-[#FA8232]"
              onClick={() => {
                addProductToCard({
                 ... showenProduct,
                  quantity: counter,
                });
                showSnackbar(`${counter} Product(s) added to shopping card`)

              }}
            >
              Add to card
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M8.75 20.25C8.75 20.6642 8.41421 21 8 21C7.58579 21 7.25 20.6642 7.25 20.25C7.25 19.8358 7.58579 19.5 8 19.5C8.41421 19.5 8.75 19.8358 8.75 20.25Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M18.5 20.25C18.5 20.6642 18.1642 21 17.75 21C17.3358 21 17 20.6642 17 20.25C17 19.8358 17.3358 19.5 17.75 19.5C18.1642 19.5 18.5 19.8358 18.5 20.25Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M4.46562 6.75H21.2844L18.8094 15.4125C18.7211 15.7269 18.532 16.0036 18.2711 16.2C18.0103 16.3965 17.6922 16.5019 17.3656 16.5H8.38437C8.05783 16.5019 7.7397 16.3965 7.47886 16.2C7.21803 16.0036 7.02893 15.7269 6.94062 15.4125L3.54688 3.54375C3.50203 3.38696 3.4073 3.24905 3.27704 3.15093C3.14677 3.05282 2.98808 2.99983 2.825 3H1.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link to="/shoping-card">
            <button className="rounded-[3px] flex items-center gap-[12px] text-[#FA8232] font-semibold leading-[50px] px-[15px] xl:px-[27px] bg-white border-[#FA8232] border-[2px]"
                    onClick={() => { addProductToCard({... showenProduct, quantity: counter})  }}
                    
            >
              Buy now
            </button>              
            </Link>

          </div>

          <div className="flex items-center justify-between w-[100%]">
            <div className="flex items-center gap-[24px]">
              <p
                onClick={() => {
                  if (isProductInWishlist(showenProduct.id)) {
                    removeProductFromWishlist(showenProduct.id);
                    showSnackbar("Product removed from wishlist")
                  } else {
                    addProductToWishlist(showenProduct);
                    showSnackbar("Product added to wishlist")

                  }
                }}
                className="hover:scale-[1.017] duration-500 cursor-pointer flex items-center gap-[6px] text-[14px] text-[#475156]"
              >
                {isProductInWishlist(showenProduct.id) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="Status=True">
                      <path
                        id="Vector"
                        d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                        fill="#191C1F"
                        stroke="#191C1F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    viewBox="0 0 22 18"
                    fill="none"
                  >
                    <path
                      d="M11 17.25C11 17.25 1.625 12 1.625 5.62501C1.625 4.49803 2.01546 3.40585 2.72996 2.53431C3.44445 1.66277 4.43884 1.0657 5.54393 0.844677C6.64903 0.623658 7.79657 0.792346 8.79131 1.32204C9.78605 1.85174 10.5665 2.70972 11 3.75001C11.4335 2.70972 12.2139 1.85174 13.2087 1.32204C14.2034 0.792346 15.351 0.623658 16.4561 0.844677C17.5612 1.0657 18.5555 1.66277 19.27 2.53431C19.9845 3.40585 20.375 4.49803 20.375 5.62501C20.375 12 11 17.25 11 17.25Z"
                      stroke="#191C1F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                Add to Wishlist
              </p>
              <p
                className="hover:scale-[1.017] duration-500 flex items-center gap-[6px] text-[14px] text-[#475156] cursor-pointer"
                onClick={() => {
                  addProductToCompare(showenProduct);
                  showSnackbar("Product added compare")
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.5186 9.34686H21.0186V4.84686"
                    stroke="#475156"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.16895 6.16873C6.93431 5.40224 7.84329 4.79417 8.84387 4.37929C9.84445 3.9644 10.917 3.75085 12.0002 3.75085C13.0834 3.75085 14.1559 3.9644 15.1565 4.37929C16.1571 4.79417 17.0661 5.40224 17.8314 6.16873L21.0189 9.34685"
                    stroke="#475156"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.48145 14.6531H2.98145V19.1531"
                    stroke="#475156"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8314 17.8313C17.0661 18.5977 16.1571 19.2058 15.1565 19.6207C14.1559 20.0356 13.0834 20.2491 12.0002 20.2491C10.917 20.2491 9.84445 20.0356 8.84387 19.6207C7.84329 19.2058 6.93431 18.5977 6.16895 17.8313L2.98145 14.6531"
                    stroke="#475156"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add to Compare
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <p className="flex items-center gap-[6px] text-[14px] text-[#475156]">
                Share product:
              </p>
              <span className="flex items-center gap-[10px]">
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.75 15.75H20.25V3.75H8.25V8.25"
                    stroke="#5F6C72"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.75 8.25H3.75V20.25H15.75V8.25Z"
                    stroke="#5F6C72"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 30 30"
                >
                  {" "}
                  <path
                    fill="#5F6C72"
                    d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.03184 14.5024C11.0699 14.5024 14.3718 9.49713 14.3718 5.15673C14.3718 5.01458 14.3689 4.87308 14.3625 4.73217C15.005 4.26699 15.5595 3.69103 16 3.03128C15.4118 3.29294 14.7789 3.46904 14.1149 3.54844C14.7926 3.14181 15.3129 2.49851 15.5584 1.73169C14.914 2.11419 14.2091 2.38382 13.4739 2.52898C12.8749 1.89052 12.0221 1.49121 11.0778 1.49121C9.26494 1.49121 7.79489 2.96219 7.79489 4.7754C7.79489 5.03319 7.82374 5.28385 7.88006 5.52436C5.15177 5.38699 2.73252 4.07995 1.11343 2.09252C0.821818 2.59379 0.668434 3.16349 0.668943 3.74345C0.668943 4.88304 1.24846 5.88903 2.12976 6.47759C1.60846 6.46166 1.0986 6.32077 0.643057 6.06676C0.642569 6.08055 0.642569 6.09399 0.642569 6.10872C0.642569 7.69944 1.77408 9.02759 3.27613 9.32854C2.99402 9.40542 2.70292 9.44428 2.41054 9.44411C2.19938 9.44411 1.99359 9.42333 1.79359 9.38491C2.21151 10.69 3.42335 11.6397 4.86013 11.6663C3.73659 12.5474 2.32127 13.0723 0.783024 13.0723C0.521349 13.0725 0.259888 13.0573 0 13.0267C1.45281 13.9585 3.17789 14.5022 5.032 14.5022"
                    fill="#5F6C72"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_493_16400)">
                    <path
                      d="M7.02406 0.0531425C4.3652 0.349959 1.71572 2.5011 1.60636 5.57394C1.53762 7.45013 2.07033 8.85767 3.85592 9.25291C4.63077 7.88599 3.60597 7.58448 3.44663 6.59561C2.79207 2.54328 8.12072 -0.220242 10.9092 2.60889C12.8386 4.56789 11.5685 10.5948 8.45659 9.96839C5.47592 9.37007 9.91568 4.57257 7.53646 3.63057C5.60246 2.86509 4.57453 5.9723 5.49154 7.51575C4.95415 10.1699 3.79656 12.671 4.26522 16C5.78524 14.8971 6.29764 12.785 6.71787 10.5823C7.48178 11.0463 7.88951 11.529 8.86432 11.604C12.4589 11.8821 14.4664 8.01565 13.9758 4.44916C13.54 1.28728 10.3843 -0.321784 7.02406 0.0531425Z"
                      fill="#5F6C72"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_493_16400">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>

          <div className="p-[20px] flex flex-col gap-[12px] items-start w-full border border-[#E4E7E9] ">
            <p className="text-[#191C1F] text-[14px]">
              100% Guarantee Safe Checkout
            </p>
            <img src={Payment} alt="" />
          </div>
        </div>

        <span
          className="p-[12px] rounded-[50%] bg-white bg-opacity-15 fixed top-5 right-3 cursor-pointer"
          onClick={() => {
            dispatch(hideDialog());
            setCounter(1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.75 5.25L5.25 18.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.75 18.75L5.25 5.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <Snackbar visible={visible} message={message} />
      </dialog>
    );
  } else {
    return null;
  }
}

export default ProductPopup;
