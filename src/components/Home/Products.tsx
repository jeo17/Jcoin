import Banner from "../../assets/productes/Banner.jpg";
import { ProductHeader } from "../../assets/data/ProductsData";
import { useState } from "react";
import { useGetProductsQuery } from "../../Redux/dataApi";
import useShowProductPopup from "../../hooks/ProductPopupFunc";
import useAddToCard from "../../hooks/addToCard";
import { products } from "../../Redux/dataApi";
import useAddToWishlist from "../../hooks/addToWishlist";
import useRemoveFromWishlist from "../../hooks/removeFromWishlist";
import { useSelector } from "react-redux";
import Snackbar from "../Snackbar";
import useSnackbar from "../../hooks/snackbarcall";

const Products: React.FC = () => {
  const showProductPopup = useShowProductPopup();
  const addProductToCard = useAddToCard();
  const addProductToWishlist = useAddToWishlist();
  const removeProductFromWishlist = useRemoveFromWishlist();
  const { WishlistCard } = useSelector((state) => state.wishlist);

  const { visible, message, showSnackbar } = useSnackbar();

  const isProductInWishlist = (productId: string) =>
    WishlistCard.some((product: products) => product.id === productId);

  const {
    data,
    error,
    isLoading,
  }: {
    data: products[] | null;
    error: Error | null;
    isLoading: boolean;
  } = useGetProductsQuery("");

  if (isLoading) {
    null
  }

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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      );
    }
    return stars;
  };

  const [seeInfoIcon, setSeeInfoIcon] = useState(false);

  if (data) {
    return (
      <div className="flex gap-[24px]">
        <div className="bg-[#F3DE6D] roundeed-[3px] flex flex-col gap-[30px] w-[24%]">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 5.25L20.25 12L13.5 18.75"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <img src={Banner} alt="Banner" />
        </div>

        <div className="flex flex-col gap-[24px] flex-grow w-[76%]">
          <header className="flex">
            <h2 className="font-[600] text-[24px] text-[#191C1F] text-nowrap lg:mr-4 xl:mr-0">
              Featured Products
            </h2>
            <div className="flex-grow"></div>
            <div className="flex gap-[16px] items-center justify-center">
              <div className="flex">
                {ProductHeader.map((p) => {
                  return (
                    <span
                      key={p.id}
                      className={`text-[14px] p-[8px] text-nowrap ${
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="#FA8232"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </header>
          <main className="flex lg:gap-[12px] xl:gap-[16px] gap-[16px] flex-wrap">
            {data.map((product,index) => {
              return (
                <div key={index} className="border border-[#E4E7E9] rounded-[3px] w-[23.7%] p-[16px] relative">
                  <div className="relative group">
                    <img
                      src={product.imageUrl}
                      alt="product"
                      className="mb-[24px]"
                    />
                    <div className="flex gap-[8px] items-center justify-center hover:cursor-pointer absolute inset-0 bg-black opacity-0 bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 ease-in-out hover:opacity-100">
                      <span
                        className="bg-white rounded-[50%] w-[48px] h-[48px] flex justify-center items-center hover:scale-105"
                        onClick={() => {
                          if (isProductInWishlist(product.id)) {
                            removeProductFromWishlist(product.id);
                            showSnackbar("Product removed from wishlist")
                          } else {
                            addProductToWishlist(product);
                            showSnackbar("Product added to wishlist")

                          }
                        }}
                      >
                        {isProductInWishlist(product.id) ? (
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
                      </span>

                      <span
                        className="bg-white rounded-[50%] w-[48px] h-[48px] flex justify-center items-center hover:scale-105"
                        onClick={() => {
                          addProductToCard({ ...product, quantity: 1 });
                          showSnackbar("Product added to shopping")
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
                            d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
                            fill="#191C1F"
                            stroke="#191C1F"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                            fill="#191C1F"
                          />
                          <path
                            d="M3.96562 6.75H20.7844L18.3094 15.4125C18.2211 15.7269 18.032 16.0036 17.7711 16.2C17.5103 16.3965 17.1922 16.5019 16.8656 16.5H7.88437C7.55783 16.5019 7.2397 16.3965 6.97886 16.2C6.71803 16.0036 6.52893 15.7269 6.44062 15.4125L3.04688 3.54375C3.00203 3.38696 2.9073 3.24905 2.77704 3.15093C2.64677 3.05282 2.48808 2.99983 2.325 3H0.75"
                            stroke="#191C1F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span
                        className="cursor-pointer bg-white rounded-[50%] w-[48px] h-[48px] flex justify-center items-center hover:bg-[#FA8232] hover:scale-105"
                        onMouseEnter={() => {
                          setSeeInfoIcon(true);
                        }}
                        onMouseLeave={() => {
                          setSeeInfoIcon(false);
                        }}
                        onClick={() => {
                          showProductPopup(product);
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
                            d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z"
                            stroke={`${seeInfoIcon ? "white" : "#191C1F"}`}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                            stroke={`${seeInfoIcon ? "white" : "#191C1F"}`}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className=" flex flex-col gap-[8px]">
                    <div className="flex gap-[4px] items-center">
                      <div className="flex">
                        {product.rating ? generateStars(product.rating!) : null}
                      </div>
                      <span className="text-[#77878F] text-[12px] font-[400]">
                        ({product.nbrOfPeople})
                      </span>
                    </div>
                    <p className="text-[#191C1F] text-[13.7px] font-[600]">
                      {product.desc}
                    </p>

                    {product.coupon === null ? (
                      <span className="text-[14px] text-[#2DA5F3] font-[600]">
                        ${product.price}
                      </span>
                    ) : (
                      <div className="flex items-center gap-[4px]">
                        <span className="text-[#ADB7BC] line-through text-[12px]">
                          ${product.price}
                        </span>
                        <span className="text-[14px] text-[#2DA5F3] font-[600]">
                          $
                          {((100 - product.coupon) * Number(product.price)) /
                            100}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-[8px] absolute top-[14px] left-[14px]">
                    {product.coupon !== null && (
                      <label
                        htmlFor="coupon"
                        className="bg-[#EFD33D] px-[10px] py-[5px] rounded-[2px] text-[#191C1F] text-[12px] font-[600] leading-[16px]"
                      >
                        {product.coupon}% OFF
                      </label>
                    )}

                    {product.state !== null && (
                      <label
                        htmlFor="state"
                        className={`text-white text-[12px] font-[600] leading-[16px] px-[10px] py-[5px] rounded-[2px] ${
                          product.state === "HOT"
                            ? "bg-[#EE5858]"
                            : product.state === "SOLD OUT"
                            ? "bg-[#929FA5]"
                            : product.state === "BEST DEALS"
                            ? "bg-[#2DA5F3]"
                            : product.state === "SALE"
                            ? "bg-[#2DB224]"
                            : null
                        }`}
                      >
                        {product.state}
                      </label>
                    )}
                  </div>
                </div>
              );
            })}
          </main>
        </div>

        <Snackbar visible={visible} message={message} />
      </div>
    );
  }
};

export default Products;
