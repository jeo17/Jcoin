import { products,State } from "./TodayBestDealsData"

export interface productHeader {
    id:string,
    title:string,
    active: boolean,
}

export const ProductHeader: productHeader[] = [
    {
        id:"1",
        title:"All Product",
        active: true,
    },
    {
        id:"2",
        title:"Smart Phone",
        active: false,
    },
    {
        id:"3",
        title:"Laptop",
        active: false,
    },
    {
        id:"4",
        title:"Headphone",
        active: false,
    },
    {
        id:"5",
        title:"TV",
        active: false,
    },

]



export const MyProducts: products[] = [
    {
      id:"1",
      imageUrl: "/ProductsPic/p1.png",
      desc: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: "70",
      state: State.Hot,
      coupon: null,
      rating:5,
      nbrOfPeople:738
    },

    {
      id:"2",
      imageUrl: "/ProductsPic/p2.png",
      desc: "Samsung Electronics Samsung Galexy S21 5G",
      price: "2,300",
      state:null,
      coupon: null,
      rating:5,
      nbrOfPeople:536
    },
    {
        id:"3",
        imageUrl: "/ProductsPic/p3.png",
        desc: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
        price: "360",
        state:State.BestDeals,
        coupon: null,
        rating:5,
        nbrOfPeople:423
      },

      {
        id:"4",
        imageUrl: "/ProductsPic/p4.png",
        desc: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: "80",
        state:null,
        coupon: null,
        rating:4,
        nbrOfPeople:816
      },
      {
        id:"5",
        imageUrl: "/ProductsPic/p5.png",
        desc: "Wired Over-Ear Gaming Headphones with USB",
        price: "1,500",
        state:null,
        coupon: null,
        rating:5,
        nbrOfPeople:647
      },
      {
        id:"6",
        imageUrl: "/ProductsPic/p6.png",
        desc: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        price: "1600",
        state:null,
        coupon: 25,
        rating:4,
        nbrOfPeople:877
      },
      {
        id:"7",
        imageUrl: "/ProductsPic/p7.png",
        desc: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: "250",
        state:null,
        coupon: null,
        rating:5,
        nbrOfPeople:425
      },
      {
        id:"8",
        imageUrl: "/ProductsPic/p8.png",
        desc: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "220",
        state:State.Sale,
        coupon: null,
        rating:5,
        nbrOfPeople:583
      },
  ];