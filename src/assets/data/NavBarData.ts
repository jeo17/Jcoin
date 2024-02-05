type Currency = {
  name: string;
  code: string;
  flag?: string;
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
