import { currency, languages, categories } from "../../assets/data/NavBarData";
import { useState, useEffect, useRef } from "react";
import { GrFormViewHide } from "react-icons/gr";
import Banner from "/NavBarPic/Banner.png";
import { useSelector } from "react-redux";
import { Product } from "../../Redux/slices/ShoppingcardSlice";
import useRemoveFromCard from "../../hooks/removeFromCard";
import useDecrementOrRemoveFromCard from "../../hooks/decrementOrRemoveFromCard";
import { Link } from "react-router-dom";
import { navBarPages } from "../../assets/data/NavBar";

interface navbarProps {
  highlitPage?: string;
}

const NavBar = (props: navbarProps) => {
  const langListContainerRef = useRef<HTMLDivElement | null>(null);
  const currencyListContainerRef = useRef<HTMLDivElement | null>(null);
  const signInMenuContainerRef = useRef<HTMLDivElement | null>(null);

  const [currencyMenu, setCurrencyMenu] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("Dollar (USD)");

  const [langMenu, setLangMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const [categoryMenu, setCategoryMenu] = useState(false);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [clickedSubCategory, setClickedSubCategory] = useState("All");

  const [signInMenu, setSignInMenu] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const [shoppingCard, setShoppingCard] = useState(false);
  const { card } = useSelector((state) => state.shoppingcard);
  const removeProductFromCard = useRemoveFromCard();
  const decrementOrRemoveFromCard = useDecrementOrRemoveFromCard();

  function formatNumber(num: number) {
    // Ensure the number has at least three decimal places
    const fixedNum = num.toFixed(3);
    // Remove unnecessary trailing zeros
    const formattedNum = parseFloat(fixedNum);
    return formattedNum.toString();
  }

  const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => {
      let productTotal = product.price * product.quantity;
      if (product.coupon !== undefined && product.coupon !== null) {
        productTotal -= productTotal * (product.coupon / 100);
      }
      return total + productTotal;
    }, 0);
  };

  let CurrencyCode: string | undefined;
  currency.forEach((curr) => {
    if (curr.name === selectedCurrency) {
      CurrencyCode = curr.code;
    }
  });

  let LangCode: string | undefined;
  languages.forEach((lang) => {
    if (lang.name === selectedLang) {
      LangCode = lang.code;
    }
  });

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const langListContainer = langListContainerRef.current;
      const currencyListContainer = currencyListContainerRef.current;
      //const signInMenuContainer = signInMenuContainerRef.current;

      // Check if the click is outside the language list container
      if (
        langListContainer &&
        !langListContainer.contains(event.target as Node)
      ) {
        setLangMenu(false);
      }
      // Check if the click is outside the currency list container
      if (
        currencyListContainer &&
        !currencyListContainer.contains(event.target as Node)
      ) {
        setCurrencyMenu(false);
      }
      // Check if the click is outside the signIn Menu container
      {
        /* 
        if (
          signInMenuContainer &&
          !signInMenuContainer.contains(event.target as Node)
        ) {
          setSignInMenu(false);
        }  */
      }
    };

    // Add mousedown event listener to the document
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setLangMenu]);

  return (
    <div className="w-full h-[220px] flex-col justify-start items-start inline-flex">
      <div className="w-full px-6 py-3 bg-cyan-700 shadow-inner justify-between items-center inline-flex border-b border-[#3e90a6]">
        <p className="text-white text-sm font-normal leading-tight font-ps">
          Welcome to Jcoin online eCommerce store.
        </p>
        <div className="justify-center items-center gap-6 flex">
          <div className="justify-center items-center gap-3 flex">
            <div className="text-white text-sm font-normal font-ps leading-tight">
              Follow us:
            </div>
            <div className="justify-start items-start gap-3 flex">
              <div className="w-4 h-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.03184 14.5024C11.0699 14.5024 14.3718 9.49713 14.3718 5.15672C14.3718 5.01457 14.3689 4.87308 14.3625 4.73216C15.005 4.26699 15.5595 3.69102 16 3.03127C15.4118 3.29293 14.7789 3.46904 14.1149 3.54844C14.7926 3.1418 15.3129 2.4985 15.5584 1.73168C14.914 2.11418 14.2091 2.38382 13.4739 2.52898C12.8749 1.89052 12.0221 1.4912 11.0778 1.4912C9.26494 1.4912 7.79489 2.96218 7.79489 4.77539C7.79489 5.03318 7.82374 5.28384 7.88006 5.52435C5.15177 5.38698 2.73252 4.07994 1.11343 2.09252C0.821818 2.59379 0.668434 3.16349 0.668943 3.74344C0.668943 4.88303 1.24846 5.88902 2.12976 6.47758C1.60846 6.46165 1.0986 6.32076 0.643057 6.06675C0.642569 6.08055 0.642569 6.09398 0.642569 6.10872C0.642569 7.69943 1.77408 9.02758 3.27613 9.32853C2.99402 9.40541 2.70292 9.44428 2.41054 9.44411C2.19938 9.44411 1.99359 9.42332 1.79359 9.3849C2.21151 10.69 3.42335 11.6397 4.86013 11.6663C3.73659 12.5474 2.32127 13.0722 0.783024 13.0722C0.521349 13.0725 0.259888 13.0573 0 13.0267C1.45281 13.9585 3.17789 14.5022 5.032 14.5022"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2506_3527)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 0C12.4183 0 16 3.58173 16 8C16 12.4183 12.4183 16 8 16C3.58173 16 0 12.4183 0 8C0 3.58173 3.58173 0 8 0Z"
                      fill="white"
                    />
                    <path
                      d="M9.04144 15.9328V9.75225H10.7849L11.016 7.57697H9.04144L9.04437 6.48815C9.04437 5.92079 9.0983 5.61693 9.91372 5.61693H11.0038V3.44128H9.25992C7.16524 3.44128 6.42808 4.49647 6.42808 6.27123V7.57714H5.12231V9.75261H6.42808V15.8452C6.93677 15.9465 7.46267 16 8.00114 16C8.34899 16 8.69648 15.9776 9.04144 15.9328Z"
                      fill="#1B6392"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2506_3527">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-4 h-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2506_3530)">
                    <path
                      d="M7.02418 0.0531119C4.36532 0.349929 1.71584 2.50107 1.60648 5.57391C1.53775 7.4501 2.07046 8.85764 3.85605 9.25288C4.63089 7.88596 3.60609 7.58445 3.44675 6.59558C2.79219 2.54325 8.12084 -0.220272 10.9094 2.60886C12.8387 4.56785 11.5686 10.5948 8.45671 9.96836C5.47604 9.37004 9.9158 4.57254 7.53658 3.63054C5.60258 2.86506 4.57466 5.97227 5.49167 7.51572C4.95427 10.1699 3.79668 12.671 4.26534 16C5.78536 14.8971 6.29776 12.785 6.71799 10.5823C7.4819 11.0463 7.88964 11.529 8.86445 11.604C12.4591 11.8821 14.4665 8.01562 13.976 4.44913C13.5401 1.28725 10.3845 -0.321815 7.02418 0.0531119Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2506_3530">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-4 h-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2506_3532)">
                    <path
                      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                      fill="white"
                    />
                    <path
                      d="M13.3361 8.00005C13.3377 8.10965 13.3241 8.21905 13.2953 8.32485C13.2665 8.43066 13.2229 8.53206 13.1657 8.62566C13.1087 8.71926 13.0387 8.80446 12.9579 8.87866C12.8771 8.95286 12.7863 9.01526 12.6881 9.06406C12.6903 9.09326 12.6921 9.12266 12.6931 9.15206C12.6955 9.21071 12.6955 9.26942 12.6931 9.32806C12.6921 9.35746 12.6903 9.38686 12.6881 9.41607C12.6881 11.2081 10.6001 12.6641 8.02404 12.6641C5.44802 12.6641 3.36 11.2081 3.36 9.41607C3.3578 9.38686 3.356 9.35746 3.355 9.32806C3.3526 9.26942 3.3526 9.21071 3.355 9.15206C3.356 9.12266 3.3578 9.09326 3.36 9.06406C3.20615 8.99334 3.06951 8.89004 2.95952 8.7613C2.84953 8.63256 2.76883 8.48146 2.723 8.31845C2.67724 8.15538 2.6675 7.9843 2.69443 7.81708C2.72137 7.64986 2.78435 7.4905 2.879 7.35004C2.97357 7.20961 3.09756 7.09143 3.24237 7.00371C3.38718 6.91598 3.54934 6.86082 3.71761 6.84204C3.88589 6.82318 4.05627 6.84113 4.21692 6.89466C4.37758 6.94819 4.52467 7.03601 4.64801 7.15204C4.87698 6.99685 5.11688 6.85842 5.36582 6.73784C5.61482 6.61744 5.87223 6.51504 6.13603 6.43183C6.39983 6.34863 6.66943 6.28483 6.94244 6.24063C7.21544 6.19643 7.49144 6.17223 7.76804 6.16803L8.36005 3.392C8.36665 3.3598 8.37965 3.3294 8.39825 3.3022C8.41665 3.2752 8.44045 3.252 8.46785 3.2342C8.49545 3.2164 8.52625 3.2042 8.55865 3.1982C8.59085 3.1924 8.62405 3.193 8.65605 3.2L10.6161 3.59201C10.8139 3.2522 11.2291 3.1066 11.5957 3.2482C11.9623 3.3898 12.1719 3.77681 12.0899 4.16121C12.0081 4.54562 11.6589 4.81362 11.2665 4.79342C10.8739 4.77322 10.5541 4.47081 10.5121 4.08001L8.80005 3.72001L8.28005 6.21603C8.55325 6.22183 8.82585 6.24743 9.09545 6.29243C9.63535 6.38243 10.1594 6.54989 10.6515 6.78964C10.8972 6.90924 11.134 7.0464 11.3601 7.20004C11.5226 7.044 11.7268 6.93835 11.9481 6.89584C12.1693 6.85318 12.3982 6.87548 12.6071 6.96004C12.816 7.04456 12.9959 7.18772 13.1253 7.37224C13.2547 7.55678 13.3279 7.77482 13.3361 8.00005ZM5.39682 9.10626C5.43722 9.20326 5.49602 9.29146 5.57042 9.36566C5.64462 9.44007 5.73282 9.49887 5.82983 9.53927C5.92692 9.57942 6.03096 9.60008 6.13603 9.60007C6.45963 9.60007 6.75123 9.40507 6.87523 9.10626C6.99904 8.80726 6.93043 8.46326 6.70163 8.23445C6.47283 8.00565 6.12883 7.93705 5.82983 8.06085C5.53102 8.18485 5.33602 8.47646 5.33602 8.80006C5.33602 8.90506 5.35662 9.00906 5.39682 9.10626ZM9.97886 11.0267C10.0199 10.9867 10.0433 10.9321 10.0441 10.8749C10.0449 10.8175 10.0227 10.7623 9.98266 10.7213C9.94266 10.6803 9.88806 10.6569 9.83086 10.6561C9.77346 10.6553 9.71826 10.6775 9.67206 10.7121C9.55176 10.7984 9.42437 10.8743 9.29126 10.9391C9.15813 11.0039 9.01977 11.0574 8.87765 11.0989C8.73565 11.1403 8.59025 11.1697 8.44325 11.1867C8.29605 11.2037 8.14785 11.2081 8.00004 11.2001C7.85244 11.2067 7.70444 11.2007 7.55784 11.1823C7.4112 11.1641 7.2664 11.1333 7.12504 11.0903C6.98344 11.0475 6.84603 10.9927 6.71383 10.9267C6.58163 10.8607 6.45523 10.7835 6.33603 10.6961C6.29463 10.6621 6.24203 10.6447 6.18843 10.6473C6.13483 10.6499 6.08423 10.6725 6.04623 10.7103C6.00843 10.7483 5.98583 10.7989 5.98323 10.8525C5.98063 10.9061 5.99803 10.9587 6.03203 11.0001C6.17263 11.1061 6.32203 11.1997 6.47863 11.2801C6.63523 11.3605 6.79863 11.4271 6.96664 11.4795C7.13464 11.5319 7.30684 11.5697 7.48144 11.5927C7.65604 11.6155 7.83224 11.6233 8.00804 11.6161C8.18385 11.6233 8.36005 11.6155 8.53465 11.5927C8.88436 11.5467 9.22356 11.441 9.53746 11.2801C9.69406 11.1997 9.84346 11.1061 9.98406 11.0001L9.97886 11.0267ZM9.83206 9.66407C9.94046 9.66527 10.0481 9.64427 10.1483 9.60267C10.2485 9.56087 10.3391 9.49927 10.4147 9.42147C10.4903 9.34366 10.5491 9.25126 10.5879 9.14986C10.6267 9.04858 10.6445 8.94044 10.6401 8.83206C10.6401 8.50846 10.4451 8.21685 10.1463 8.09285C9.84726 7.96905 9.50326 8.03765 9.27446 8.26645C9.04565 8.49526 8.97705 8.83926 9.10085 9.13826C9.22486 9.43707 9.51646 9.63207 9.84006 9.63207L9.83206 9.66407Z"
                      fill="#1B6392"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2506_3532">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-4 h-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8.35392 13.5023L5.07659 13.4424C4.01547 13.4215 2.9517 13.4632 1.91138 13.2469C0.328813 12.9237 0.216699 11.339 0.0993827 10.0098C-0.062267 8.14102 0.000312411 6.23835 0.305366 4.38519C0.477579 3.34538 1.15531 2.72491 2.20339 2.6574C5.74144 2.41236 9.30301 2.4414 12.8332 2.55572C13.2061 2.5662 13.5814 2.62348 13.9491 2.68867C15.7638 3.00667 15.808 4.80246 15.9257 6.31418C16.043 7.84151 15.9935 9.37667 15.7692 10.8936C15.5893 12.1496 15.2452 13.2028 13.7926 13.3045C11.9727 13.4374 10.1946 13.5445 8.36952 13.5104C8.3696 13.5023 8.35912 13.5023 8.35392 13.5023ZM6.42717 10.3226C7.79863 9.53539 9.14392 8.76132 10.5075 7.97942C9.13352 7.19224 7.79079 6.41818 6.42717 5.63628V10.3226Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-4 h-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2506_3538)">
                    <path
                      d="M5.60062 8C5.60062 6.67457 6.67485 5.59981 8.00034 5.59981C9.32582 5.59981 10.4006 6.67457 10.4006 8C10.4006 9.32544 9.32582 10.4002 8.00034 10.4002C6.67485 10.4002 5.60062 9.32544 5.60062 8ZM4.30308 8C4.30308 10.0419 5.95833 11.6971 8.00034 11.6971C10.0423 11.6971 11.6976 10.0419 11.6976 8C11.6976 5.95808 10.0423 4.30289 8.00034 4.30289C5.95833 4.30289 4.30313 5.95797 4.30313 8H4.30308ZM10.98 4.1563C10.9799 4.32718 11.0305 4.49425 11.1254 4.63637C11.2203 4.77849 11.3552 4.88929 11.5131 4.95474C11.6709 5.0202 11.8446 5.03738 12.0122 5.00411C12.1799 4.97084 12.3339 4.88861 12.4547 4.76783C12.5756 4.64704 12.658 4.49313 12.6914 4.32554C12.7248 4.15795 12.7078 3.98423 12.6424 3.82632C12.5771 3.66842 12.4664 3.53344 12.3243 3.43845C12.1823 3.34345 12.0153 3.29271 11.8444 3.29264H11.844C11.615 3.29275 11.3953 3.38376 11.2333 3.5457C11.0713 3.70763 10.9802 3.92724 10.98 4.1563ZM5.09142 13.8607C4.38942 13.8287 4.00786 13.7118 3.7543 13.613C3.41813 13.4821 3.17828 13.3263 2.92609 13.0744C2.67391 12.8226 2.51781 12.583 2.38751 12.2469C2.28867 11.9934 2.17173 11.6118 2.13982 10.9098C2.10491 10.1508 2.09794 9.92286 2.09794 8.00012C2.09794 6.07737 2.10549 5.85003 2.13982 5.09045C2.17179 4.38848 2.28959 4.00757 2.38751 3.75339C2.51838 3.41723 2.67425 3.17739 2.92609 2.92521C3.17793 2.67304 3.41756 2.51694 3.7543 2.38665C4.00775 2.28781 4.38942 2.17088 5.09142 2.13897C5.85039 2.10407 6.07838 2.0971 8.00034 2.0971C9.92229 2.0971 10.1505 2.10453 10.9101 2.13909C11.6121 2.17106 11.993 2.28885 12.2472 2.38677C12.5834 2.51706 12.8233 2.6735 13.0754 2.92533C13.3276 3.17716 13.4832 3.41735 13.614 3.7535C13.7129 4.00694 13.8298 4.3886 13.8617 5.09057C13.8966 5.85014 13.9036 6.07749 13.9036 8.00023C13.9036 9.92298 13.8966 10.1503 13.8617 10.9099C13.8297 11.6119 13.7122 11.9934 13.614 12.247C13.4832 12.5831 13.3273 12.823 13.0754 13.0746C12.8236 13.3262 12.5834 13.4823 12.2472 13.6131C11.9938 13.712 11.6121 13.8289 10.9101 13.8608C10.1511 13.8957 9.92316 13.9027 8.00034 13.9027C6.07751 13.9027 5.85016 13.8957 5.09142 13.8608V13.8607ZM5.0318 0.843606C4.26529 0.878512 3.74151 1.00005 3.28409 1.17803C2.81066 1.36183 2.40934 1.60842 2.0086 2.00851C1.60786 2.4086 1.3619 2.80996 1.17809 3.28395C1.0001 3.74164 0.878561 4.2651 0.843654 5.03159C0.808171 5.79928 0.800049 6.04471 0.800049 8C0.800049 9.95529 0.808171 10.2007 0.843654 10.9684C0.878561 11.735 1.0001 12.2584 1.17809 12.7161C1.3619 13.1895 1.60792 13.5916 2.0086 13.9915C2.40928 14.3914 2.81008 14.6377 3.28409 14.822C3.74237 15 4.26529 15.1215 5.0318 15.1564C5.79993 15.1913 6.04497 15.2 8.00034 15.2C9.9557 15.2 10.2011 15.1919 10.9689 15.1564C11.7354 15.1215 12.2589 15 12.7166 14.822C13.19 14.6377 13.5913 14.3916 13.9921 13.9915C14.3928 13.5914 14.6383 13.1895 14.8226 12.7161C15.0006 12.2584 15.1227 11.7349 15.157 10.9684C15.1919 10.2002 15.2 9.95529 15.2 8C15.2 6.04471 15.1919 5.79928 15.157 5.03159C15.1221 4.26505 15.0006 3.74135 14.8226 3.28395C14.6383 2.81053 14.3922 2.40923 13.9921 2.00851C13.592 1.60779 13.19 1.36183 12.7172 1.17803C12.2589 1.00005 11.7354 0.877936 10.9694 0.843606C10.2016 0.808528 9.95628 0.800003 8.0012 0.800003C6.04612 0.800003 5.80022 0.808125 5.03209 0.843606"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2506_3538">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-0 h-7 origin-top-left opacity-20 border border-white"></div>

          <div className="relative">
            <div className="w-11 h-5 justify-center items-center flex">
              <div
                className="justify-center items-center gap-1.5 inline-flex hover:scale-95 cursor-pointer"
                onClick={() => {
                  setLangMenu(!langMenu);
                }}
              >
                <div className="text-white text-sm font-normal font-ps leading-tight">
                  {LangCode}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      d="M9.75 4.5L6 8.25L2.25 4.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <div className="w-3 h-3 relative opacity-50" />
              </div>
            </div>

            {langMenu && (
              <div
                ref={langListContainerRef}
                className="absolute top-[30px] right-[0px] z-10 bg-white flex flex-col py-[8px] rounded-[3px] w-[165px] shadow-md"
                onMouseDown={(event) => {
                  const targetNode = event.target as Node;
                  if (!event.currentTarget.contains(targetNode)) {
                    setLangMenu(false);
                  }
                }}
              >
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className={`py-[8px] px-[16px] text-${
                      lang.name === selectedLang ? "[#FA8232]" : "[#5F6C72]"
                    } text-[14px] flex items-center gap-8 cursor-pointer hover:bg-slate-100`}
                    onClick={() => {
                      setSelectedLang(lang.name);
                      setLangMenu(false);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="rounded-[50%] overflow-hidden h-[22px] w-[22px]"
                        src={lang.flag}
                      />
                      {lang.name}
                    </div>

                    {lang.name === selectedLang && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                      >
                        <path
                          d="M11.5 1.5L4.5 8.5L1 5"
                          stroke="#FA8232"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="w-[47px] h-5 justify-center items-center flex">
            <div className="relative">
              <div
                className="justify-center items-center gap-1.5 inline-flex cursor-pointer hover:scale-95"
                onClick={() => {
                  setCurrencyMenu(!currencyMenu);
                }}
              >
                <div className="text-white text-sm font-normal font-ps leading-tight ">
                  {CurrencyCode}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      d="M9.75 4.5L6 8.25L2.25 4.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>

              {currencyMenu && (
                <div
                  ref={currencyListContainerRef}
                  className="absolute top-[30px] right-[0px] z-10 bg-white flex flex-col py-[8px] rounded-[3px] w-[165px] shadow-md"
                >
                  {currency.map((curr, index) => (
                    <span
                      key={index}
                      className={`py-[8px] px-[16px] text-${
                        curr.name === selectedCurrency
                          ? "[#FA8232]"
                          : "[#5F6C72]"
                      } text-[14px] flex items-center gap-8 cursor-pointer hover:bg-slate-100`}
                      onClick={() => {
                        setSelectedCurrency(curr.name);
                        setCurrencyMenu(false);
                      }}
                    >
                      {curr.name}
                      {curr.name === selectedCurrency && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="10"
                          viewBox="0 0 13 10"
                          fill="none"
                        >
                          <path
                            d="M11.5 1.5L4.5 8.5L1 5"
                            stroke="#FA8232"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 py-5 bg-cyan-700 justify-between items-center inline-flex">
        <Link to="/">
          <div className="justify-center items-center gap-2 flex">
            <img
              className="w-12 h-12"
              src="https://via.placeholder.com/48x48"
            />
            <div className="text-white text-[32px] font-bold font-ps leading-10">
              JCOIN
            </div>
          </div>
        </Link>

        <input
          type="search"
          placeholder="Search for anything..."
          className="px-5 py-3.5 bg-white rounded-sm shadow justify-start items-start gap-2 flex w-[600px]"
        />

        <div className="justify-start items-center gap-6 flex">
          {/*shoping card icon */}
          <div className="relative">
            <div
              className="w-8 h-8 relative hover:scale-95 cursor-pointer"
              onClick={() => {
                setShoppingCard(!shoppingCard);
                setSignInMenu(false);
              }}
            >
              <div className="py-0.5 left-[16px] top-[-4px] absolute bg-white rounded-[100px] border border-cyan-700 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-5 text-center text-cyan-700 text-xs font-semibold font-ps leading-none">
                  {card.length}
                </div>
              </div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="miter"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="1.9200000000000004"
                >
                  <polyline
                    points="2 3 5 3 8.5 16 18 16 21 7 6.1 7"
                    strokeLinecap="round"
                  ></polyline>
                  <line
                    x1="9.99"
                    y1="20"
                    x2="10.01"
                    y2="20"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="15.99"
                    y1="20"
                    x2="16.01"
                    y2="20"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></line>
                </g>
                <g id="SVGRepo_iconCarrier">
                  <polyline
                    points="2 3 5 3 8.5 16 18 16 21 7 6.1 7"
                    strokeLinecap="round"
                  ></polyline>
                  <line
                    x1="9.99"
                    y1="20"
                    x2="10.01"
                    y2="20"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="15.99"
                    y1="20"
                    x2="16.01"
                    y2="20"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></line>
                </g>
              </svg>
            </div>
            {shoppingCard && (
              <div className="flex flex-col items-center gap-[16px] absolute right-2 top-[48px] z-10 rounded-[4px] py-[24px] bg-white border border-[#E4E7E9] shadow-md">
                <div className="flex flex-col items-stretch  w-[390px] px-[24px] ">
                  <h2 className="text-[#191C1F] leading-[24px] font-semibold ">
                    Shopping Cart{" "}
                    <span className="text-[#5F6C72] leading-[24px] font-normal">
                      ({card.length})
                    </span>{" "}
                  </h2>
                </div>
                <div className="w-full h-[2px] bg-[#E4E7E9]"></div>

                <div className="flex flex-col items-stretch gap-[16px] w-[390px] px-[24px] ">
                  {card.length !== 0 ? (
                    <>
                      {card.map((product: Product) => {
                        return (
                          <div className="flex flex-col gap-[16px]">
                            <div className="flex items-center gap-[16px] relative">
                              <img
                                src={product.imageUrl}
                                alt="product"
                                className="w-[80px] border-[1px] border-[#E4E7E9]"
                              />
                              <div className="flex flex-col gap-[8px] items-start py-[6px] pr-[36px]">
                                <p className="text-[#191C1F] text-[14px] leading-[20px]">
                                  {product.desc}
                                </p>
                                <div className="flex items-center gap-[8px]">
                                  <span
                                    className="text-[#5F6C72] text-[14px] leading-[20px] cursor-pointer"
                                    onClick={() => {
                                      decrementOrRemoveFromCard(product.id);
                                    }}
                                  >
                                    {product.quantity} x
                                  </span>
                                  <span className="text-[#2DA5F3] text-[14px] leading-[20px] font-semibold">
                                    $
                                    {product.coupon === null ||
                                    product.coupon === undefined
                                      ? product.price
                                      : ((100 - product.coupon) *
                                          Number(product.price)) /
                                        100}
                                  </span>
                                </div>
                              </div>
                              <svg
                                onClick={() => {
                                  removeProductFromCard(product.id);
                                }}
                                className="absolute right-0 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                              >
                                <path
                                  d="M12.5 3.5L3.5 12.5"
                                  stroke="#929FA5"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.5 12.5L3.5 3.5"
                                  stroke="#929FA5"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="w-full text-center text-[#5f6c72]">
                      Still empty ;({" "}
                    </div>
                  )}
                </div>
                <div className="w-full h-[2px] bg-[#E4E7E9]"></div>
                <div className="flex flex-col items-stretch gap-[12px] w-[390px] px-[24px] ">
                  <div className="flex flex-col gap-[20px] items-center">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[#475156] text-[14px] leading-[20px]">
                        Sub-Total:
                      </span>
                      <p className="text-[#191C1F] text-[14px] leading-[20px] font-semibold">
                        ${formatNumber(calculateTotalPrice(card))}
                      </p>
                    </div>
                    <div className="flex flex-col gap-[8px] w-full">
                      <Link to="/checkout">
                        <button
                          disabled={card.length !== 0 ? false : true}
                          type="button"
                          className={`w-full flex items-center gap-[8px] justify-center ${
                            card.length !== 0
                              ? "bg-[#FA8232] cursor-pointer"
                              : "bg-[#6c757d] cursor-not-allowed"
                          } text-white rounded-[2px] text-[14px] leading-[52px] font-bold uppercase`}
                        >
                          {" "}
                          Checkout now{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M3.625 10H17.375"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.75 4.375L17.375 10L11.75 15.625"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </Link>

                      <Link to="/shoping-card">
                        <button
                          type="button"
                          className="w-full bg-white text-[#FA8232] rounded-[2px] border-[2px] border-[#FFE7D6] text-[14px] leading-[48px] font-bold uppercase"
                        >
                          {" "}
                          View Cart{" "}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/wishlist">
            <div className="w-8 h-8 relative hover:scale-95 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99735 4.02062 8.54112 4.97328 7.37907C5.92593 6.21701 7.25178 5.42091 8.72525 5.12622C10.1987 4.83153 11.7288 5.05645 13.0551 5.76271C14.3814 6.46897 15.4221 7.61294 16 9C16.5779 7.61294 17.6186 6.46897 18.9449 5.76271C20.2712 5.05645 21.8013 4.83153 23.2748 5.12622C24.7482 5.42091 26.0741 6.21701 27.0267 7.37907C27.9794 8.54112 28.5 9.99735 28.5 11.5C28.5 20 16 27 16 27Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>

          <div className="relative">
            <div
              className="w-8 h-8 relative hover:scale-95 cursor-pointer"
              onClick={() => {
                setSignInMenu(!signInMenu);
                setShoppingCard(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M3.875 27C5.10367 24.8714 6.87104 23.1038 8.99944 21.8749C11.1278 20.6459 13.5423 19.9989 16 19.9989C18.4577 19.9989 20.8722 20.6459 23.0006 21.8749C25.129 23.1038 26.8963 24.8714 28.125 27"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {signInMenu && (
              <div
                className="flex flex-col items-center gap-[24px] absolute right-0 top-[48px] z-10 p-[32px] rounded-[4px] bg-white border border-[#E4E7E9] shadow-md"
                ref={signInMenuContainerRef}
              >
                <div className="flex flex-col items-stretch gap-[20px] w-[340px]">
                  <h3 className="font-semibold text-[20px] text-[#191C1F] leading-[28px] text-center">
                    Sign in to your account
                  </h3>
                  <form
                    action=""
                    className="flex flex-col items-stretch gap-[16px] w-full"
                  >
                    <div className="flex flex-col items-stretch gap-[8px]">
                      <label
                        htmlFor="emailInput"
                        className="text-[14px] text-[#191C1F] leading-[20px] font-semibold"
                      >
                        Email Address
                      </label>
                      <input
                        placeholder="Email"
                        type="email"
                        name="emailInput"
                        id="emailInput"
                        className="rounded-[2px] border border-[#E4E7E9] py-[10px] px-[16px] placeholder:font-medium"
                      />
                    </div>
                    <div className="flex flex-col items-stretch gap-[8px]">
                      <div className="flex items-center justify-between w-full">
                        <label
                          htmlFor="passInput"
                          className="text-[14px] text-[#191C1F] leading-[20px] font-semibold"
                        >
                          Password
                        </label>
                        <span className="text-[14px] text-[#2DA5F3] leading-[20px] font-semibold">
                          Forget Password
                        </span>
                      </div>
                      <div className="relative flex items-center justify-end">
                        <input
                          placeholder="Password"
                          type={`${visiblePassword ? "text" : "password"}`}
                          name="passInput"
                          id="passInput"
                          className="w-full rounded-[2px] border border-[#E4E7E9] py-[10px] px-[16px]"
                        />

                        {visiblePassword && (
                          <svg
                            onClick={() => {
                              setVisiblePassword(false);
                            }}
                            className="absolute right-[16px] cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M10 3.54166C3.75 3.54166 1.25 9.99999 1.25 9.99999C1.25 9.99999 3.75 16.4583 10 16.4583C16.25 16.4583 18.75 9.99999 18.75 9.99999C18.75 9.99999 16.25 3.54166 10 3.54166Z"
                              stroke="#191C1F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                              stroke="#191C1F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {visiblePassword === false && (
                          <GrFormViewHide
                            className="absolute right-[16px] cursor-pointer w-[22px] h-[22px]"
                            onClick={() => {
                              setVisiblePassword(true);
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </form>
                  <button
                    type="button"
                    className="bg-[#FA8232] text-white rounded-[2px] flex justify-center items-center gap-[8px] text-[14px] leading-[48px] font-bold uppercase"
                  >
                    Login
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <path
                        d="M3.625 10H17.375"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.75 4.375L17.375 10L11.75 15.625"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col items-stretch gap-[12px] w-[340px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="flex-grow h-[2px] bg-[#E4E7E9]"></div>
                    <span className="text-[#77878F] text-[14px] leading-[20px]">
                      Don’t have account
                    </span>
                    <div className="flex-grow h-[2px] bg-[#E4E7E9]"></div>
                  </div>
                  <button
                    type="button"
                    className="bg-white text-[#FA8232] rounded-[2px] border-[2px] border-[#FFE7D6] text-[14px] leading-[48px] font-bold uppercase"
                  >
                    {" "}
                    Create account{" "}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full px-6 py-4 bg-white shadow-inner justify-between items-center inline-flex border-b border-[#E4E7E9]">
        <div className="justify-center items-center flex">
          <div className="relative">
            <div
              className={` h-12 justify-center items-center  flex rounded-[2px] ${
                categoryMenu ? "bg-[#FA8232]" : "bg-gray-50"
              }  hover:cursor-pointer`}
              onClick={() => {
                setCategoryMenu(!categoryMenu);
                setClickedCategory(null);
                setClickedSubCategory("All");
              }}
            >
              <div
                className={`${
                  categoryMenu ? "px-[23px]" : "px-[24px]"
                } py-3.5  rounded-sm justify-center ${
                  categoryMenu ? "items-end" : "items-center"
                } ${categoryMenu ? "gap-2.5" : "gap-2"}  inline-flex `}
              >
                <div
                  className={`text-sm font-medium font-ps leading-tight ${
                    categoryMenu ? "text-white" : "text-zinc-900"
                  }`}
                >
                  All Category
                </div>
                <div className="w-4 h-4 relative">
                  {categoryMenu ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                    >
                      <path
                        d="M11 6L6 1L1 6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        d="M13 6L8 11L3 6"
                        stroke="#191C1F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {categoryMenu && (
              <div className="flex items-start gap-[12px] absolute z-10 top-[60px] w-fit">
                <div className="bg-white border border-[E4E7E9] shadow-md flex flex-col py-[12px]">
                  {categories.map((category, index) => {
                    return (
                      <span
                        key={index}
                        className={`w-[240px] flex items-center justify-between py-[8px] px-[16px] text-[14px] leading-[20px] hover:bg-gray-100 cursor-pointer ${
                          category.name === clickedCategory
                            ? "text-[#191C1F] font-semibold bg-gray-200"
                            : "text-[#5F6C72]"
                        }`}
                        onClick={() => {
                          setClickedCategory(category.name);
                          setClickedSubCategory("All");
                        }}
                      >
                        {category.name}
                        {category.name === clickedCategory && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                          >
                            <path
                              d="M1.5 1.25L5.25 5L1.5 8.75"
                              stroke="#191C1F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    );
                  })}
                </div>
                {clickedCategory !== null && (
                  <div className="p-[20px] bg-white border border-[E4E7E9] shadow-md flex gap-[20px]">
                    {categories.map((category) => {
                      if (category.name === clickedCategory) {
                        return (
                          <>
                            <div className="flex flex-col">
                              <span
                                className={`py-[8px] px-[16px] w-[164px] text-[14px] leading-[20px] rounded-[3px] hover:bg-gray-100 cursor-pointer ${
                                  "All" === clickedSubCategory
                                    ? "text-[#191C1F] font-semibold bg-gray-200"
                                    : "text-[#5F6C72]"
                                }`}
                                onClick={() => {
                                  setClickedSubCategory("All");
                                }}
                              >
                                All
                              </span>
                              {category.subCategories.map((item) => {
                                return (
                                  <span
                                    className={`py-[8px] px-[16px] w-[164px] text-[14px] leading-[20px] rounded-[3px] hover:bg-gray-100 cursor-pointer ${
                                      item.subName === clickedSubCategory
                                        ? "text-[#191C1F] font-semibold bg-gray-200"
                                        : "text-[#5F6C72]"
                                    }`}
                                    onClick={() => {
                                      setClickedSubCategory(item.subName);
                                    }}
                                  >
                                    {item.subName}
                                  </span>
                                );
                              })}
                            </div>

                            <div className="flex flex-col items-start gap-[16px]">
                              <h5 className="text-[#191C1F] font-semibold leading-[24px]">
                                {category.SubTitle}
                              </h5>
                              {category.subCategories.map(
                                (subCategory, index) => {
                                  if (subCategory.items) {
                                    if (
                                      subCategory.subName === clickedSubCategory
                                    ) {
                                      return (
                                        <div className="flex flex-col gap-[16px]">
                                          {subCategory.items.map((item) => {
                                            return (
                                              <div className="flex items-center gap-[12px] p-[12px] w-[312px] border border-[#E4E7E9] rounded-[3px]">
                                                <img
                                                  className="w-[80px] h-[80px]"
                                                  src={item.imageUrl}
                                                  alt=""
                                                />
                                                <div className="flex flex-col items-start gap-[8px]">
                                                  <p className="text-[#191C1F] text-[14px] leading-[20px]">
                                                    {item.desc}
                                                  </p>
                                                  <span className="text-[#2DA5F3] text-[14px] leading-[20px] font-semibold">
                                                    {item.price}
                                                  </span>
                                                </div>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      );
                                    } else if (
                                      clickedSubCategory === "All" &&
                                      index < 3
                                    ) {
                                      return (
                                        <div className="flex flex-col gap-[16px]">
                                          <div className="flex items-center gap-[12px] p-[12px] w-[312px] border border-[#E4E7E9] rounded-[3px]">
                                            <img
                                              className="w-[80px] h-[80px]"
                                              src={
                                                subCategory.items[0].imageUrl
                                              }
                                              alt=""
                                            />
                                            <div className="flex flex-col items-start gap-[8px]">
                                              <p className="text-[#191C1F] text-[14px] leading-[20px]">
                                                {subCategory.items[0].desc}
                                              </p>
                                              <span className="text-[#2DA5F3] text-[14px] leading-[20px] font-semibold">
                                                {subCategory.items[0].price}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    }
                                  } else if (
                                    subCategory.subName ===
                                      clickedSubCategory ||
                                    (clickedSubCategory === "All" && index < 1)
                                  ) {
                                    return (
                                      <div className="w-[312px] h-full flex items-center justify-center text-[20px] text-[#475156]">
                                        This product is not available
                                      </div>
                                    );
                                  }
                                }
                              )}
                            </div>
                            <div className="flex flex-col gap-[24px] items-center justify-center bg-[#F7E99E] rounded-[4px] w-[312px] p-[32px]">
                              <div className="flex flex-col items-center justify-center gap-[12px]">
                                <img
                                  src={Banner}
                                  alt=""
                                  className="w-[100px] h-[100px]"
                                />
                                <div className="flex flex-col gap-[16px] items-center">
                                  <div className="flex flex-col gap-[8px] items-center">
                                    <h3 className="text-[#191C1F] text-[28px] leading-[32px] font-semibold">
                                      21% Discount
                                    </h3>
                                    <p className="text-[#475156] leading-[24px]">
                                      Escape the noise, It’s time to hear the
                                      magic with Xiaomi Earbuds.
                                    </p>
                                  </div>
                                  <div className="flex gap-[8px] items-center">
                                    <p className="text-[#475156] text-[14px] leading-[20px]">
                                      Starting price:
                                    </p>
                                    <span className="text-[#191C1F] leading-[24px] font-semibold px-[12px] py-[6px] bg-white rounded-[3px]">
                                      $99 USD
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="bg-[#FA8232] text-white flex items-center  gap-[8px] px-[64px] leading-[50px] font-semibold rounded-[2px] uppercase"
                              >
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
                          </>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {navBarPages.map((page) => {
            return (
              <Link to={page.Link} key={page.id}>
                <div className="justify-start items-center gap-1.5 flex px-4 py-3.5 hover:bg-gray-100 cursor-pointer">
                  <div className="w-6 h-6 relative">
                    <div
                      className="w-6 h-6 relative"
                      dangerouslySetInnerHTML={{ __html: page.Svg }}
                    />{" "}
                  </div>
                  <div
                    className={`${
                      props.highlitPage
                        ? props.highlitPage === page.Page
                          ? "text-[#FA8232] font-semibold"
                          : "text-gray-500 font-normal"
                        : "text-gray-500 font-normal"
                    } text-sm font-ps leading-tight`}
                  >
                    {page.Page}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="justify-center items-center gap-2 flex">
          <div className="w-7 h-7 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5266 7.75468C17.4192 7.99175 18.2333 8.46057 18.8864 9.11364C19.5395 9.7667 20.0083 10.5808 20.2454 11.4734"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1172 13.65C11.0176 15.5094 12.5211 17.0091 14.3828 17.9047C14.5201 17.9697 14.672 17.9979 14.8235 17.9864C14.975 17.9748 15.1209 17.9241 15.2469 17.8391L17.9812 16.0125C18.1021 15.9306 18.2417 15.8806 18.387 15.8672C18.5324 15.8538 18.6788 15.8775 18.8125 15.9359L23.9312 18.1344C24.1062 18.2072 24.2524 18.3355 24.3472 18.4995C24.4421 18.6636 24.4804 18.8542 24.4562 19.0422C24.294 20.3085 23.6759 21.4722 22.7177 22.3158C21.7594 23.1593 20.5266 23.6247 19.25 23.625C15.3049 23.625 11.5214 22.0578 8.73179 19.2682C5.94218 16.4786 4.375 12.6951 4.375 8.75001C4.37529 7.47338 4.84073 6.24059 5.68425 5.28233C6.52776 4.32407 7.69153 3.70599 8.95781 3.54376C9.14576 3.51961 9.33643 3.55792 9.50047 3.65279C9.66451 3.74765 9.79281 3.89381 9.86562 4.06876L12.0641 9.19844C12.1212 9.33007 12.1451 9.47374 12.1337 9.6168C12.1223 9.75985 12.0758 9.89789 11.9984 10.0188L10.1719 12.7969C10.0906 12.9225 10.0428 13.0669 10.0333 13.2163C10.0237 13.3657 10.0526 13.515 10.1172 13.65V13.65Z"
                stroke="#191C1F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-zinc-900 text-lg font-normal font-ps leading-normal">
            +1-202-555-0104
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
