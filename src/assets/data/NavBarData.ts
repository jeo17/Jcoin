import { products } from "./TodayBestDealsData";

type Currency = {
  name: string;
  code: string;
  flag?: string;
};

type SubCategory = {
  title: string;
  subName: string;
  items: products;
};

type Category = {
  name: string;
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
    subCategories: [
      {
        subName: "Desktop Computer",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Laptop",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming PC",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Ultrabook",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Workstation",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Chromebook",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "2-in-1 Laptop",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "MacBook",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Netbook",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "All-in-One PC",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "Computer Accessories",
    subCategories: [
      {
        subName: "Wireless Mouse",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Mechanical Keyboard",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Hard Drive",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "USB-C Hub",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming Headset",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Webcam",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Laptop Cooling Pad",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Monitor Stand",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Mouse Pad",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Bluetooth Speaker",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "SmartPhone",
    subCategories: [
      {
        subName: "iPhone",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Sansung",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Realme",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Xiaomi",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Oppo",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Tecno",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Vivo",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "OnePlus",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Huawei",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Infinix",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "Headphone",
    subCategories: [
      {
        subName: "Over-Ear Headphones",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "In-Ear Earphones",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Wireless Bluetooth Headset",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming Headphones",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Noise-Canceling Headset",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Sport Earbuds",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Studio Monitor Headphones",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Bone Conduction Headphones",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "DJ Headset",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Foldable On-Ear Headphones",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "Mobile Accessories",
    subCategories: [
      {
        subName: "Phone Cases",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Screen Protectors",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Charging Cables",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Power Banks",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Car Mounts",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Wireless Chargers",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Bluetooth Earbuds",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Mobile Stands",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Selfie Sticks",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Phone Grips",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "Gaming Console",
    subCategories: [
      {
        subName: "PlayStation 5",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Xbox Series X",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Nintendo Switch",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming PC",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "VR Headset",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming Laptop",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Controller Accessories",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming Keyboard",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming Mouse",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Gaming Chair",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "Camera & Photo",
    subCategories: [
      {
        subName: "Digital Cameras",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "DSLR Cameras",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Mirrorless Cameras",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Camera Lenses",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Tripods",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Camera Bags",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "SD Memory Cards",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Instant Print Cameras",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Photography Lighting",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Camera Filters",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "TV & Homes Appliances",
    subCategories: [
      {
        subName: "Smart TVs",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Blu-ray Players",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Soundbars",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Refrigerators",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Washing Machines",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Vacuum Cleaners",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Air Purifiers",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Microwaves",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Coffee Makers",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Smart Thermostats",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "Watchs & Accessories",
    subCategories: [
      {
        subName: "Smartwatches",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Analog Watches",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Digital Watches",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Watch Bands",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Watch Cases",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Watch Winders",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Fitness Trackers",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Pocket Watches",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Sports Watches",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Watch Repair Kits",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "GPS & Navigation",
    subCategories: [
      {
        subName: "Car GPS Systems",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Handheld GPS Devices",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "GPS Trackers",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Marine GPS",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Motorcycle GPS",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "GPS Maps",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Fitness GPS Watches",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Outdoor Navigation Tools",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "GPS Antennas",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "GPS Accessories",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
  {
    name: "Warable Technology",
    subCategories: [
      {
        subName: "Fitness Trackers",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },

      {
        subName: "Smart Glasses",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Health Monitoring",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Virtual Reality Headsets",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Smart Clothing",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Wearable Cameras",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "GPS Watches",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Biometric Sensors",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Wearable Speakers",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
      {
        subName: "Smart Jewelry",
        title: "",
        items: { id: "1", imageUrl: "", desc: "", price: "", coupon: null },
      },
    ],
  },
];
