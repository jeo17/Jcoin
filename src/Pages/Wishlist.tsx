import NavBar from "../components/navigation/NavBar";
import NavigationTab from "../components/navigation/NavigationTab";
import Footer from "../components/Home/Footer";
import { useSelector } from "react-redux";
import { products } from "../Redux/dataApi";
import useRemoveFromWishlist from "../hooks/removeFromWishlist";
import useAddToCard from "../hooks/addToCard";
import Snackbar from "../components/Snackbar";
import useSnackbar from "../hooks/snackbarcall";


const wishHeader: string[] = ["Products", "Price", "Stock Status", "Actions"];

const Wishlist = () => {
  const { WishlistCard } = useSelector((state) => state.wishlist);
  const removeProductFromWishlist = useRemoveFromWishlist();
  const addProductToCard = useAddToCard();
  const { visible, message, showSnackbar } = useSnackbar();




  return (
    <>
      <NavBar />
      <NavigationTab main="Wishlist" tab={[]} />
      <div className="px-[26px] py-[72px] flex items-center justify-center">
        {WishlistCard.length !== 0 ? (
          <div className="flex w-full flex-col border-[#E4E7E9] border-[1px] rounded-[4px]">
            <h3 className="w-full px-[24px] py-[20px] text-[#191C1F] text-[18px] font-semibold">Wishlist</h3>
            <div className="px-[24px] py-[10px] w-full bg-[#F2F4F5] flex gap-[24px]">
              {wishHeader.map((item, index: number) => {
                return (
                  <span
                    key={index}
                    className={`${
                      item === "Products"
                        ? "w-[45%]"
                        : item === "Actions"
                        ? "xl:w-[19%] lg:w-[24%]"
                        : "w-[18%]"
                    } inline-block`}
                  >
                    {item}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-col p-[24px] gap-[16px]">
              {WishlistCard.map((wish: products, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex gap-[24px] items-center w-full"
                  >
                    <div className="flex gap-[16px] items-center w-[45%]">
                      <img
                        src={wish.imageUrl}
                        alt="product"
                        className="w-[72px] h-[72px]"
                      />
                      <p className="text-[14px] text-[#475156] leading-[20px]">
                        {wish.desc}
                      </p>
                    </div>
                    <div className="w-[18%] flex gap-[4px] items-center">
                      {wish.coupon === null ? (
                        <span className="text-[#191C1F] text-[14px] font-semibold leading-[20px]">
                          ${wish.price}
                        </span>
                      ) : (
                        <>
                          <span className="text-[#929FA5] text-[14px] line-through leading-[20px]">
                            ${wish.price}
                          </span>
                          <span className="text-[#191C1F] text-[14px] font-semibold leading-[20px]">
                            ${((100 - wish.coupon) * Number(wish.price)) / 100}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="w-[18%]">
                      <span className="text-[#2DB224] text-[14px] font-semibold leading-[20px]">
                        IN STOCK
                      </span>
                    </div>
                    <div className="xl:w-[19%] w-[24%] flex gap-[24px] items-center">
                      <button
                        className="text-nowrap rounded-[2px] bg-[#FA8232] text-white text-[14px] tracking-[0.168px] leading-[48px] uppercase xl:px-[24px] px-[18px] flex items-center gap-[8px] hover:scale-[0.97] duration-500 "
                          onClick={() => { addProductToCard({...wish,quantity:1}); showSnackbar("Product added to shopping card") }}
                      >
                        Add to card
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <g id="ShoppingCartSimple">
                            <path
                              id="Vector"
                              d="M7.25 16.875C7.25 17.1511 7.02614 17.375 6.75 17.375C6.47386 17.375 6.25 17.1511 6.25 16.875C6.25 16.5989 6.47386 16.375 6.75 16.375C7.02614 16.375 7.25 16.5989 7.25 16.875Z"
                              fill="white"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Vector_2"
                              d="M15.375 16.875C15.375 17.1511 15.1511 17.375 14.875 17.375C14.5989 17.375 14.375 17.1511 14.375 16.875C14.375 16.5989 14.5989 16.375 14.875 16.375C15.1511 16.375 15.375 16.5989 15.375 16.875Z"
                              fill="white"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                            <path
                              id="Vector_3"
                              d="M3.80469 5.625H17.8203L15.7578 12.8438C15.6842 13.1057 15.5266 13.3363 15.3093 13.5C15.0919 13.6638 14.8268 13.7516 14.5547 13.75H7.07031C6.79819 13.7516 6.53308 13.6638 6.31572 13.5C6.09836 13.3363 5.94078 13.1057 5.86719 12.8438L3.03906 2.95313C3.00169 2.82246 2.92275 2.70754 2.8142 2.62578C2.70565 2.54401 2.5734 2.49986 2.4375 2.5H1.125"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                      </button>
                      <svg
                        className="cursor-pointer hover:rotate-12 hover:scale-105 duration-150"
                        onClick={() => {
                          removeProductFromWishlist(wish.id);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g id="Regular/XCircle">
                          <path
                            id="Vector"
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#929FA5"
                            strokeWidth="1.5"
                            stroke-miterlimit="10"
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
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-[18px] font-semibold text-[#5F6C72]">
            {" "}
            You need to wiiish something first ♪♪
          </div>
        )}
      </div>
      <Snackbar visible={visible} message={message} />
      <Footer />
    </>
  );
};

export default Wishlist;
