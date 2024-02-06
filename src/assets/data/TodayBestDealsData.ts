
export enum State {
    Hot = 'HOT',
    SoldOut = 'SOLD OUT',
    BestDeals = 'BEST DEALS',
    Sale = 'SALE',

  }

export interface products {
  id: string,
  imageUrl: string;
  desc: string;
  price: string;
  state?: State | null;
  coupon: number | null;
  rating?: number;
  nbrOfPeople?: number,
}

export const Products: products[] = [
  {
    id:"1",
    imageUrl: "/TodayBestDealsPic/p1.png",
    desc: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
    price: "865.99",
    state: State.Hot,
    coupon: 32,
    rating:5,
  },
  {
    id:"2",
    imageUrl: "/TodayBestDealsPic/p2.png",
    desc: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    price: "2,300",
    state: State.SoldOut,
    coupon: null,
  },
  {
    id:"3",
    imageUrl: "/TodayBestDealsPic/p3.png",
    desc: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: "220",
    state: null,
    coupon: null,
  },
  {
    id:"4",
    imageUrl: "/TodayBestDealsPic/p4.png",
    desc: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "865",
    state: null,
    coupon: 19,
  },
  {
    id:"5",
    imageUrl: "/TodayBestDealsPic/p5.png",
    desc: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: "1,200",
    state: null,
    coupon: null,
  },
  {
    id:"6",
    imageUrl: "/TodayBestDealsPic/p6.png",
    desc: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: "299",
    state: null,
    coupon: null,
  },
  {
    id:"7",
    imageUrl: "/TodayBestDealsPic/p7.png",
    desc: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    price: "865.99",
    state: null,
    coupon: 50,
  },
  {
    id:"8",
    imageUrl: "/TodayBestDealsPic/p8.png",
    desc: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: "160",
    state: State.Hot,
    coupon: null,
  },
  {
    id:"9",
    imageUrl: "/TodayBestDealsPic/p9.png",
    desc: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    price: "360",
    state:null,
    coupon: 32,
  },
];
