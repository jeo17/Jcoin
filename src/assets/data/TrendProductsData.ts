interface product {
  imgUrl: string;
  desc: string;
  price: string;
}

interface trendCategory {
  title: string;
  products: product[];
}

export const TrendCategories: trendCategory[] = [
  {
    title: "FLASH SALE TODAY",
    products: [
      {
        imgUrl: "/TrendProductsPic/t1.png",
        desc: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t2.png",
        desc: "Simple Mobile 4G LTE Prepaid Smartphone",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t3.png",
        desc: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "1,500",
      },
    ],
  },
  {
    title: "BEST SELLERS",
    products: [
      {
        imgUrl: "/TrendProductsPic/t4.png",
        desc: "Samsung Electronics Samsung Galexy S21 5G",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t5.png",
        desc: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t6.png",
        desc: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: "1,500",
      },
    ],
  },
  {
    title: "TOP RATED",
    products: [
      {
        imgUrl: "/TrendProductsPic/t7.png",
        desc: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t8.png",
        desc: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t9.png",
        desc: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: "1,500",
      },
    ],
  },
  {
    title: "NEW ARRIVAL",
    products: [
      {
        imgUrl: "/TrendProductsPic/t7.png",
        desc: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t8.png",
        desc: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
        price: "1,500",
      },
      {
        imgUrl: "/TrendProductsPic/t9.png",
        desc: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
        price: "1,500",
      },
    ],
  },
];
