export interface ContentType {
  name?: string;
  src?: string;
  link: string;
}

export interface FooterInformationType {
  id: string;
  title: string;
  contents: ContentType[];
}

export const footerInformationList: FooterInformationType[] = [
  {
    id: "viet-hung",
    title: "Viet Hung Auto Production Trading Joint Stock Company",
    contents: [
      { name: "Tax code: 0305094228", link: "#" },
      {
        name: "Address: 13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet Nam.",
        link: "#",
      },
      { name: "Phone number: 0283 760 7607", link: "#" },
      { name: "Opening hour: 09:00 - 22:00 from Mon - Fri", link: "#" },
    ],
  },
  {
    id: "site-map",
    title: "Sitenmap",
    contents: [
      { name: "About", link: "#" },
      { name: "Article", link: "#" },
      { name: "Cart", link: "#" },
      { name: "Contact", link: "#" },
    ],
  },
  {
    id: "Legal",
    title: "Legal",
    contents: [
      { name: "Privacy policy", link: "#" },
      { name: "Cookie policy", link: "#" },
      { name: "Delivery Policy", link: "#" },
      { name: "FAQs", link: "#" },
    ],
  },
  {
    id: "download-app",
    title: "Download App",
    contents: [
      { src: "/images/apple-app-store.png", link: "#" },
      { src: "/images/Google-play-store.png", link: "#" },
    ],
  },
];
