import NavBar from "../components/navigation/NavBar";
import NavigationTab from "../components/navigation/NavigationTab";
import Footer from "../components/Home/Footer";
import { useSelector } from "react-redux";
import { products } from "../Redux/dataApi";
import useDecrementOrRemoveFromCard from "../hooks/decrementOrRemoveFromCard";
import useIncrementQuantityCard from "../hooks/incremtQuantityCard";
import useRemoveFromCard from "../hooks/removeFromCard";
import { Link } from "react-router-dom";

const cardHeader: string[] = ["Products", "Price", "Quantity", "Sub-Total"];

function formatNumber(num: number) {
  // Ensure the number has at least three decimal places
  const fixedNum = num.toFixed(3);
  // Remove unnecessary trailing zeros
  const formattedNum = parseFloat(fixedNum);
  return formattedNum.toString();
}

const calculateTotalPrice = (products: products[]): number => {
  return products.reduce((total, product) => {
    let productTotal = product.price * product.quantity!;
    if (product.coupon !== undefined && product.coupon !== null) {
      productTotal -= productTotal * (product.coupon / 100);
    }
    return total + productTotal;
  }, 0);
};

const ShopingCard = () => {
  const { card } = useSelector((state) => state.shoppingcard);
  const decrementOrRemoveFromCard = useDecrementOrRemoveFromCard();
  const incrementQuantityCard = useIncrementQuantityCard();
  const removeFromCard = useRemoveFromCard();

  return (
    <>
      <NavBar />
      <NavigationTab main="Shoping Card" tab={[]} />
      <div
        className={`flex ${
          card.length !== 0 ? "items-start" : "items-center"
        } gap-[24px] px-[26px] py-[72px]`}
      >
        {card.length !== 0 ? (
          <div className="w-[67.5%]">
            <div className="flex w-full flex-col border-[#E4E7E9] border-[1px] rounded-[4px]">
              <h3 className="w-full px-[24px] py-[20px] text-[#191C1F] text-[18px] font-semibold">
                Shopping Card
              </h3>
              <div className="px-[24px] py-[10px] w-full bg-[#F2F4F5] flex gap-[24px]">
                {cardHeader.map((item, index: number) => {
                  return (
                    <span
                      key={index}
                      className={`${
                        item === "Products"
                          ? "w-[45%]"
                          : item === "Quantity"
                          ? "w-[19%]"
                          : "xl:w-[18%] w-[15%]"
                      } inline-block`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>

              <div className="flex flex-col p-[24px] gap-[16px]">
                {card.map((product: products, index: number) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-[24px] items-center w-full"
                    >
                      <div className="flex gap-[16px] items-center xl:w-[45%] w-[50%]">
                        <div
                          className="flex"
                          onClick={() => {
                            removeFromCard(product.id);
                          }}
                        >
                          <svg
                            className="cursor-pointer hover:rotate-12 hover:scale-105 duration-150 w-[24px] h-[24px]"
                            onClick={() => {
                              // removeProductFromCompare(product.id);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g id="Regular/XCircle">
                              <path
                                id="Vector"
                                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                stroke="#929FA5"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                              />
                              <path
                                id="Vector_2"
                                d="M15 9L9 15"
                                stroke="#929FA5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector_3"
                                d="M15 15L9 9"
                                stroke="#929FA5"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </div>

                        <img
                          src={product.imageUrl}
                          alt="product"
                          className="w-[72px] h-[72px]"
                        />
                        <p className="text-[14px] text-[#475156] leading-[20px] overflow-hidden text-ellipsis line-clamp-3">
                          {product.desc}
                        </p>
                      </div>
                      <div className="xl:w-[18%] w-[15%] flex flex-col-reverse xl:flex-row gap-[4px] items-center">
                        {product.coupon === null ||
                        product.coupon === undefined ? (
                          <span className="text-[#191C1F] text-[14px] font-semibold leading-[20px]">
                            ${product.price}
                          </span>
                        ) : (
                          <>
                            <span className="text-[#929FA5] text-[14px] line-through leading-[20px]">
                              ${product.price}
                            </span>
                            <span className="text-[#191C1F] text-[14px] font-semibold leading-[20px]">
                              $
                              {((100 - product.coupon) *
                                Number(product.price)) /
                                100}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="w-[19%]">
                        <div className="border-[#E4E7E9] border-[2px] flex items-center xl:gap-[29px] gap-[18px] py-[5px] px-[20px]">
                          <button
                            className={`text-[24px] cursor-pointer ${
                              product.quantity === 1
                                ? "text-[#a1a1a1] cursor-default"
                                : null
                            }`}
                            disabled={product.quantity === 1}
                            onClick={() => {
                              decrementOrRemoveFromCard(product.id);
                            }}
                          >
                            −
                          </button>
                          <span className="text-[#475156]">
                            {product.quantity}
                          </span>
                          <button
                            className="text-[24px] cursor-pointer"
                            onClick={() => {
                              incrementQuantityCard(product.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="xl:w-[18%] w-[15%] flex gap-[24px] items-center">
                        <span className="text-[#191C1F] text-[14px] font-semibold leading-[20px] ml-4">
                          $
                          {product.coupon === null ||
                          product.coupon === undefined
                            ? formatNumber(product.price * product.quantity!)
                            : formatNumber(
                                (((100 - product.coupon) *
                                  Number(product.price)) /
                                  100) *
                                  product.quantity!
                              )}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full flex items-center p-[24px] border-t-[#E4E7E9] border-[1px]">
                <button className="px-[24px] flex items-center gap-[8px] text-[14px] text-[#2DA5F3] font-semibold leading-[44px] uppercase tracking-[0.168px] border-[2px] rounded-[2px] border-[#2DA5F3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="Regular/ArrowLeft">
                      <path
                        id="Vector"
                        d="M16.875 10H3.125"
                        stroke="#2DA5F3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M8.75 4.375L3.125 10L8.75 15.625"
                        stroke="#2DA5F3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                  Return to Shop
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[67.5%] flex justify-center text-[18px] font-semibold text-[#5F6C72]">
            Empty shopping cart :'(
          </div>
        )}
        <div className="w-[32.5%] flex flex-col gap-[24px] items-center">
          <div className="w-full border-[#E4E7E9] border-[1px] rounded-[4px] flex flex-col items-center pb-[24px]">
            <h3 className="w-full px-[24px] py-[20px] text-[#191C1F] text-[18px] font-semibold">
              Card Totals
            </h3>
            <div className="px-[24px] flex flex-col gap-[16px] pb-[24px] w-full">
              <div className="flex flex-col gap-[12px] w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#5F6C72] text-[14px] leading-[20px]">
                    Sub-total
                  </span>
                  <span className=" text-[#191C1F] text-[14px] leading-[20px] font-semibold">
                    {formatNumber(calculateTotalPrice(card))}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#5F6C72] text-[14px] leading-[20px]">
                    Shipping
                  </span>
                  <span className=" text-[#191C1F] text-[14px] leading-[20px] font-semibold">
                    Free
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-[#5F6C72] text-[14px] leading-[20px]">
                    Tax
                  </span>
                  <span className=" text-[#191C1F] text-[14px] leading-[20px] font-semibold">
                    ${formatNumber((calculateTotalPrice(card) * 2.5) / 100)}
                  </span>
                </div>
              </div>
              <div className="w-full h-[1px] border-[#E4E7E9] border-[1px]"></div>
              <div className="flex items-center justify-between w-full">
                <span className="text-[#191C1F]">Total</span>
                <span className=" text-[#191C1F] font-semibold">
                  $
                  {formatNumber(
                    calculateTotalPrice(card) +
                      (calculateTotalPrice(card) * 2.5) / 100
                  )}
                </span>
              </div>
            </div>
            <Link to="/checkout">
              <button
                className={`w-full rounded-[3px] flex items-center gap-[12px] leading-[56px] px-[32px] tracking-[0.192px] uppercase text-white ${
                  card.length !== 0
                    ? "bg-[#FA8232]"
                    : "bg-[#6c757d] cursor-not-allowed"
                } `}
              >
                Proceed to Checkout
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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M13.5 5.25L20.25 12L13.5 18.75"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </Link>
          </div>
          <div className="w-full border-[#E4E7E9] border-[1px] rounded-[4px] flex flex-col">
            <h3 className="w-full px-[24px] py-[20px] text-[#191C1F] text-[18px] font-semibold border-[#E4E7E9] border-b-[1px]">
              Coupon Code
            </h3>
            <div className="p-[24px] flex flex-col gap-[16px] w-full items-start">
              <input
                type="text"
                name="email"
                placeholder="Email address"
                className="w-full py-[12px] pl-[16px] border-[1px] border-[#E4E7E9] rounded-[2px]"
              />
              <button className="px-[24px] leading-[48px] bg-[#2DA5F3] text-white tracking-[0.168px] rounded-[2px] uppercase">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopingCard;
