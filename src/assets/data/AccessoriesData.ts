import { products,State } from "./TodayBestDealsData"
import { productHeader } from "./ProductsData";


export const AccessoriesHeader: productHeader[] = [
    {
        id:"1",
        title:"All Product",
        active: true,
    },
    {
        id:"2",
        title:"Keyboard & Mouse",
        active: false,
    },
    {
        id:"3",
        title:"Headphone",
        active: false,
    },
    {
        id:"4",
        title:"Webcam",
        active: false,
    },
    {
        id:"5",
        title:"Printer",
        active: false,
    },

]



export const MyAccessories: products[] = [
    {
      id:"1",
      imageUrl: "/AccessoriesPic/a1.png",
      desc: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      price: "360",
      state: State.BestDeals,
      coupon: null,
      rating:4,
      nbrOfPeople:994
    },

    {
      id:"2",
      imageUrl: "/AccessoriesPic/a2.png",
      desc: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      price: "80",
      state:null,
      coupon: null,
      rating:5,
      nbrOfPeople:798
    },
    {
        id:"3",
        imageUrl: "/AccessoriesPic/a3.png",
        desc: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
        price: "70",
        state:State.Hot,
        coupon: null,
        rating:5,
        nbrOfPeople:600
      },

      {
        id:"4",
        imageUrl: "/AccessoriesPic/a4.png",
        desc: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: "250",
        state:null,
        coupon: null,
        rating:5,
        nbrOfPeople:492
      },
      {
        id:"5",
        imageUrl: "/AccessoriesPic/a5.png",
        desc: "Samsung Electronics Samsung Galexy S21 5G",
        price: "2,300",
        state:null,
        coupon: null,
        rating:4,
        nbrOfPeople:740
      },
      {
        id:"6",
        imageUrl: "/AccessoriesPic/a6.png",
        desc: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "220",
        state:State.Sale,
        coupon: null,
        rating:4,
        nbrOfPeople:556
      },
      {
        id:"7",
        imageUrl: "/AccessoriesPic/a7.png",
        desc: "Wired Over-Ear Gaming Headphones with USB",
        price: "1,500",
        state:null,
        coupon: null,
        rating:4,
        nbrOfPeople:536
      },
      {
        id:"8",
        imageUrl: "/AccessoriesPic/a8.png",
        desc: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        price: "1600",
        state:null,
        coupon: 25,
        rating:4,
        nbrOfPeople:423
      },
  ];