interface navBarPage {
  id:string,
  Page: string;
  Link: string;
  Svg: string;
}

export const navBarPages: navBarPage[] = [
  {
    id:"1",
    Page: "Track Order",
    Link: "/track_order",
    Svg: `              <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M5.25 21.75H18.75"
          stroke="#5F6C72"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
          stroke="#5F6C72"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
          stroke="#5F6C72"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>`,
  },

  {
    id:"2",
    Page: "Comparer",
    Link: "/compare",
    Svg: `                           <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.48126 9.34688H2.98126V4.84688"
      stroke="#5F6C72"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.8313 6.16874C17.0659 5.40226 16.1569 4.79418 15.1563 4.3793C14.1558 3.96442 13.0832 3.75087 12 3.75087C10.9168 3.75087 9.84427 3.96442 8.84369 4.3793C7.8431 4.79418 6.93413 5.40226 6.16876 6.16874L2.98126 9.34687"
      stroke="#5F6C72"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5187 14.6531H21.0187V19.1531"
      stroke="#5F6C72"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.16876 17.8313C6.93413 18.5977 7.8431 19.2058 8.84368 19.6207C9.84427 20.0356 10.9168 20.2491 12 20.2491C13.0832 20.2491 14.1558 20.0356 15.1563 19.6207C16.1569 19.2058 17.0659 18.5977 17.8313 17.8313L21.0188 14.6531"
      stroke="#5F6C72"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,
  },

  {
    id:"3",

    Page: "Customer Support",
    Link: "/",
    Svg: `                            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21.1406 12.75H18.1406C17.7428 12.75 17.3613 12.908 17.08 13.1893C16.7987 13.4707 16.6406 13.8522 16.6406 14.25V18C16.6406 18.3978 16.7987 18.7794 17.08 19.0607C17.3613 19.342 17.7428 19.5 18.1406 19.5H19.6406C20.0384 19.5 20.42 19.342 20.7013 19.0607C20.9826 18.7794 21.1406 18.3978 21.1406 18V12.75ZM21.1406 12.75C21.1407 11.5618 20.9054 10.3853 20.4484 9.28845C19.9915 8.1916 19.3218 7.1961 18.4781 6.35938C17.6344 5.52267 16.6334 4.8613 15.5328 4.41345C14.4322 3.96559 13.2538 3.74011 12.0656 3.75001C10.8782 3.74135 9.70083 3.96775 8.60132 4.41616C7.5018 4.86458 6.50189 5.52614 5.6592 6.36273C4.81651 7.19932 4.1477 8.1944 3.69131 9.29063C3.23492 10.3869 2.99997 11.5626 3 12.75V18C3 18.3978 3.15804 18.7794 3.43934 19.0607C3.72064 19.342 4.10218 19.5 4.5 19.5H6C6.39782 19.5 6.77936 19.342 7.06066 19.0607C7.34196 18.7794 7.5 18.3978 7.5 18V14.25C7.5 13.8522 7.34196 13.4707 7.06066 13.1893C6.77936 12.908 6.39782 12.75 6 12.75H3"
      stroke="#5F6C72"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,
  },

  {
    id:"4",

    Page: "Need Help",
    Link: "/",
    Svg: `                            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="#5F6C72"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.25 11.25H12V16.5H12.75"
      stroke="#5F6C72"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875Z"
      fill="#191C1F"
      stroke="#5F6C72"
      stroke-width="1.5"
    />
  </svg>`,
  },
];
