import NavBar from "../components/navigation/NavBar";
import NavigationTab from "../components/navigation/NavigationTab";
import Footer from "../components/Home/Footer";
import { useSelector } from "react-redux";
import { products } from "../Redux/dataApi";
import useRemoveFromCompare from "../hooks/removeFromCompare";
import useAddToCard from "../hooks/addToCard";
import useAddToWishlist from "../hooks/addToWishlist";
import Snackbar from "../components/Snackbar";
import useSnackbar from "../hooks/snackbarcall";
import useRemoveFromWishlist from "../hooks/removeFromWishlist";

const details: string[] = [
  "Customer feedback",
  "Price",
  "Sold by",
  "Brand",
  "Model",
  "Stock status",
  "Size",
  "Weight",
];

const Compare = () => {
  const removeProductFromCompare = useRemoveFromCompare();
  const addProductToCard = useAddToCard();
  const addProductToWishlist = useAddToWishlist();
  const removeProductFromWishlist = useRemoveFromWishlist();
  const { visible, message, showSnackbar } = useSnackbar();

  const { CompareCard } = useSelector((state) => state.compare);
  const { WishlistCard } = useSelector((state) => state.wishlist);

  const isProductInWishlist = (productId: string) =>
    WishlistCard.some((product: products) => product.id === productId);

  return (
    <>
      <NavBar highlitPage="Comparer" />
      <NavigationTab tab={[]} main="Compare" />

      <div className="mx-[26px] my-[72px] flex items-center justify-center flex-wrap">
        {CompareCard.length !== 0 ? (
          <div className="flex items-start border-[2px] border-[#E4E7E9]">
            <div className="flex flex-col">
              <div className="w-full h-[501px] border-[1.5px] border-[#E4E7E9]"></div>

              <div className="flex flex-col border-b-[1.5px] border-[#E4E7E9]">
                {details.map((item, index: number) => {
                  return (
                    <span
                      className={`px-[24px] py-[12px] w-[268px] text-[#475156] text-[14px] ${
                        index % 2 === 0 ? "bg-[#F2F4F5]" : null
                      }`}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex items-end flex-wrap">
              {CompareCard.map((product: products, index: number) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="p-[32px] flex flex-col items-center gap-[16px] w-[340px] border-[1.5px] border-[#E4E7E9]">
                      <svg
                        className="cursor-pointer hover:rotate-12 hover:scale-105 duration-150"
                        onClick={() => {
                          removeProductFromCompare(product.id);
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
                            stroke-linecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            id="Vector_3"
                            d="M15 15L9 9"
                            stroke="#929FA5"
                            strokeWidth="1.5"
                            stroke-linecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                      <img
                        src={product.imageUrl}
                        alt="product"
                        className="w-full h-[265px] object-contain p-[35px]"
                      />
                      <p
                        className="text-[#191C1F] leading-[24px] w-full overflow-hidden"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: "2",
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {product.desc}
                      </p>
                      <div className="flex items-center gap-[12px] justify-between w-full">
                        <button
                          className="rounded-[2px] bg-[#FA8232] text-white text-[14px] tracking-[0.168px] leading-[48px] uppercase px-[38px] flex items-center gap-[8px] hover:scale-[0.97] duration-500 "
                          onClick={() => {
                            addProductToCard({ ...product, quantity: 1 });
                            showSnackbar("Product added to shopping card");
                          }}
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
                                stroke-linecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        </button>
                        <button
                          className="p-[12px] rounded-[2px] border-[1.5px] border-[#FFE7D6] "
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
                                fill="#FA8232"
                                stroke="#FA8232"
                                strokeWidth="1.5"
                                stroke-linecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g id="Heart">
                              <path
                                id="Vector"
                                d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                                stroke="#FA8232"
                                strokeWidth="1.5"
                                stroke-linecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </svg>
                        )}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col border-b-[1.5px] border-[#E4E7E9]">
                      {details.map((item, index: number) => {
                        return (
                          <span
                            className={`px-[24px] py-[12px] w-full text-[#475156] text-[14px] ${
                              index % 2 === 0 ? "bg-[#F2F4F5]" : null
                            }`}
                          >
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-[18px] font-semibold text-[#5F6C72]">
            {" "}
            There are no products to compare
          </div>
        )}
      </div>
      <Snackbar visible={visible} message={message} />

      <Footer />
    </>
  );
};

export default Compare;
