import { products } from "./TodayBestDealsData";

type Currency = {
  name: string;
  code: string;
  flag?: string;
};

type SubCategory = {
  subName: string;
  items: products[] | null;
};

type Category = {
  name: string;
  SubTitle: string;
  subCategories: SubCategory[];
};

export const currency: Currency[] = [
  { name: "Dollar (USD)", code: "USD" },
  { name: "Euro (EUR)", code: "EUR" },
  { name: "Dinar (DZD)", code: "DZD" },
];

export const languages: Currency[] = [
  {
    name: "English",
    code: "ENG",
    flag: `https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png `,
  },
  {
    name: "Arabic",
    code: "AR",
    flag: `https://www.rjtravelagency.com/wp-content/uploads/2023/07/Saudi-flag-picture.jpg`,
  },
];

export const categories: Category[] = [
  {
    name: "Computer & Laptop",
    SubTitle: "FEATURED COMPUTERS",
    subCategories: [
      {
        subName: "Desktop Computer",
         items: [
      { id: "1", imageUrl: "/NavBarPic/1.1.1.png", desc: "Powerful desktop computer with high-end specifications", price: "$999.99", coupon: null },
      { id: "2", imageUrl: "/NavBarPic/1.1.2.png", desc: "Compact desktop for home and office use", price: "$599.99", coupon: null },
      { id: "3", imageUrl: "/NavBarPic/1.1.3.png", desc: "Gaming desktop with dedicated graphics card", price: "$1299.99", coupon: null },
    ],
      },
      {
        subName: "Laptop",

        items: [
          { id: "1", imageUrl: "/NavBarPic/1.2.1.png", desc: "Thin and lightweight laptop for on-the-go professionals", price: "$799.99", coupon: null },
          { id: "2", imageUrl: "/NavBarPic/1.2.2.png", desc: "High-performance laptop with SSD storage", price: "$1099.99", coupon: null },
          { id: "3", imageUrl: "/NavBarPic/1.2.3.png", desc: "Budget-friendly laptop with decent specifications", price: "$499.99", coupon: null },
        ],
      },
      {
        subName: "Gaming PC",

        items:[
          { id: "1", imageUrl: "/NavBarPic/1.3.1.png", desc: "High-performance gaming PC with RGB lighting", price: "$1499.99", coupon: null },
          { id: "2", imageUrl: "/NavBarPic/1.3.2.png", desc: "VR-ready gaming desktop for immersive gaming experience", price: "$1799.99", coupon: null },
          { id: "3", imageUrl: "/NavBarPic/1.3.3.png", desc: "Budget-friendly gaming PC with decent graphics", price: "$999.99", coupon: null },
        ],
      },
      {
        subName: "Workstation",

        items: [
          { id: "1", imageUrl: "/NavBarPic/1.4.1.png", desc: "Powerful workstation with multiple CPU cores for heavy tasks", price: "$2499.99", coupon: null },
          { id: "2", imageUrl: "/NavBarPic/1.4.2.png", desc: "Professional-grade workstation for graphic design and video editing", price: "$1899.99", coupon: null },
          { id: "3", imageUrl: "/NavBarPic/1.4.3.png", desc: "Entry-level workstation for basic CAD work", price: "$1299.99", coupon: null },
        ],
      },
      {
        subName: "Chromebook",

        items: [
          { id: "1", imageUrl: "/NavBarPic/1.5.1.png", desc: "Lightweight and budget-friendly Chromebook", price: "$299.99", coupon: null },
          { id: "2", imageUrl: "/NavBarPic/1.5.2.png", desc: "Convertible Chromebook with touch screen", price: "$399.99", coupon: null },
          { id: "3", imageUrl: "/NavBarPic/1.5.3.png", desc: "Student-friendly Chromebook with long battery life", price: "$349.99", coupon: null },
        ]  
      },
      {
        subName: "2-in-1 Laptop",
        items: [
          { id: "1", imageUrl: "/NavBarPic/1.6.1.png", desc: "Versatile 2-in-1 laptop with detachable keyboard", price: "$899.99", coupon: null },
          { id: "2", imageUrl: "/NavBarPic/1.6.2.png", desc: "Convertible laptop with 360-degree hinge for flexibility", price: "$799.99", coupon: null },
          { id: "3", imageUrl: "/NavBarPic/1.6.3.png", desc: "Affordable 2-in-1 laptop with touchscreen display", price: "$699.99", coupon: null },
        ],
      },
      {
        subName: "MacBook",
        items: [
          { id: "1", imageUrl: "/NavBarPic/1.7.1.png", desc: "Sleek and powerful MacBook for creative professionals", price: "$1499.99", coupon: null },
          { id: "2", imageUrl: "/NavBarPic/1.7.2.png", desc: "Thin and lightweight MacBook Air with Retina display", price: "$1299.99", coupon: null },
          { id: "3", imageUrl: "/NavBarPic/1.7.3.png", desc: "Entry-level MacBook for everyday use", price: "$1099.99", coupon: null },
        ],
      },
      {
        subName: "All-in-One PC",
        items: [
          { id: "1", imageUrl: "/NavBarPic/1.8.1.png", desc: "All-in-One PC with large touchscreen display", price: "$1299.99", coupon: null },
          { id: "2", imageUrl: "/NavBarPic/1.8.2.png", desc: "Space-saving All-in-One PC for home office use", price: "$899.99", coupon: null },
          { id: "3", imageUrl: "/NavBarPic/1.8.3.png", desc: "Powerful All-in-One PC with dedicated graphics", price: "$1699.99", coupon: null },
        ], 
      },
    ],
  },
  {
    name: "Computer Accessories",
    SubTitle: "FEATURED LAPTOP ACCESSORIES",

    subCategories: [
      {
        subName: "Wireless Mouse",

        items:  null /*  [
          { id: "1", imageUrl: "", desc: "sss", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "sss", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "sss", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Mechanical Keyboard",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Hard Drive",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "USB-C Hub",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Gaming Headset",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Webcam",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Laptop Cooling Pad",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Monitor Stand",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Mouse Pad",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Bluetooth Speaker",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "SmartPhone",
    SubTitle: "FEATURED PHONES",

    subCategories: [
      {
        subName: "iPhone",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Sansung",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Realme",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Xiaomi",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Oppo",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Tecno",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Vivo",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "OnePlus",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Huawei",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Infinix",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "Headphone",
    SubTitle: "FEATURED HEADPHONES",

    subCategories: [
      {
        subName: "Over-Ear",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "In-Ear Earphones",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Bluetooth Headset",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Gaming Headphones",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Noise-Canceling Headset",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Sport Earbuds",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Studio Monitor",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Bone Conduction",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "DJ Headset",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Foldable On-Ear",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "Mobile Accessories",
    SubTitle: "FEATURED PHONE ACCESSORIES",

    subCategories: [
      {
        subName: "Phone Cases",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Screen Protectors",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Charging Cables",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Power Banks",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Car Mounts",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Wireless Chargers",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Bluetooth Earbuds",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Mobile Stands",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Selfie Sticks",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Phone Grips",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "Gaming Console",
    SubTitle: "FEATURED CONSOLES",

    subCategories: [
      {
        subName: "PlayStation 5",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Xbox Series X",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Nintendo Switch",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Gaming PC",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "VR Headset",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Gaming Laptop",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Controller Accessories",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Gaming Keyboard",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Gaming Mouse",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Gaming Chair",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "Camera & Photo",
    SubTitle: "FEATURED CAMERAS",

    subCategories: [
      {
        subName: "Digital Cameras",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "DSLR Cameras",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Mirrorless Cameras",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Camera Lenses",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Tripods",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Camera Bags",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "SD Memory Cards",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Instant Print Cameras",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Photography Lighting",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Camera Filters",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "TV & Homes Appliances",
    SubTitle: "FEATURED TV'S",

    subCategories: [
      {
        subName: "Smart TVs",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Blu-ray Players",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Soundbars",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Refrigerators",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Washing Machines",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Vacuum Cleaners",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Air Purifiers",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Microwaves",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Coffee Makers",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Smart Thermostats",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "Watchs & Accessories",
    SubTitle: "FEATURED WATCHS",

    subCategories: [
      {
        subName: "Smartwatches",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Analog Watches",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Digital Watches",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Watch Bands",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Watch Cases",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Watch Winders",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Fitness Trackers",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Pocket Watches",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Sports Watches",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Watch Repair Kits",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "GPS & Navigation",
    SubTitle: "FEATURED GPS",

    subCategories: [
      {
        subName: "Car GPS Systems",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Handheld GPS Devices",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "GPS Trackers",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Marine GPS",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Motorcycle GPS",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "GPS Maps",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Fitness GPS Watches",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Outdoor Navigation Tools",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "GPS Antennas",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "GPS Accessories",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
  {
    name: "Warable Technology",
    SubTitle: "FEATURED TECHNOLOGY",

    subCategories: [
      {
        subName: "Fitness Trackers",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },

      {
        subName: "Smart Glasses",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Health Monitoring",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Virtual Reality Headsets",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Smart Clothing",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Wearable Cameras",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "GPS Watches",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Biometric Sensors",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Wearable Speakers",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
      {
        subName: "Smart Jewelry",

        items:  null  /* [
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
          { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
        ],  */
      },
    ],
  },
];
