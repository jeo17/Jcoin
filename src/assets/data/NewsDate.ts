interface Blog {
  blogImg: string;
  desc: string;
  details: string;
  by: string;
  date: string;
  comments: string;
}

export const News: Blog[] = [
  {
    blogImg: "/NewsPic/n1.png",
    desc: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    details:
      "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus.",
    by: "Kristin",
    date: "19Dec, 2013",
    comments: "453",
  },
  {
    blogImg: "/NewsPic/n2.png",
    desc: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. ",
    details:
      "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, blandit lorem. ",

    by: "Robert",
    date: "28 Nov, 2015",
    comments: "738",
  },
  {
    blogImg: "/NewsPic/n3.png",
    desc: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    details:
      "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",

    by: "Arlene",
    date: "09 May, 2014",
    comments: "826",
  },
];
