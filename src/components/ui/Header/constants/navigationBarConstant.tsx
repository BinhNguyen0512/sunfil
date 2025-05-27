import { ReactNode } from "react";

import {
  FastShippingIcon,
  FreeShipIcon,
  ReturnProductIcon,
  Support247Icon,
} from "@/public/icons";

export interface AboutUsType {
  id: string;
  name: string;
  link: string;
}

export interface SupportDealType {
  id: string;
  icon: ReactNode;
  name: string;
}

export const aboutUsList: AboutUsType[] = [
  {
    id: "about-us",
    link: "#",
    name: "Về chúng tôi",
  },
  {
    id: "post",
    link: "#",
    name: "Bài viết",
  },
  {
    id: "catalog",
    link: "#",
    name: "Catalog",
  },
  {
    id: "contact",
    link: "#",
    name: "Liên Hệ",
  },
];

export const supportDealList: SupportDealType[] = [
  {
    id: "support-247",
    name: "Hỗ Trợ 24/7",
    icon: <Support247Icon />,
  },
  {
    id: "free-ship",
    name: "Miễn Phí Vận Chuyển",
    icon: <FreeShipIcon />,
  },
  {
    id: "fast-shipping",
    name: "Giao Giao Hàng Nhanh 2h",
    icon: <FastShippingIcon />,
  },
  {
    id: "return-product",
    name: "30 Ngày Đổi Trả",
    icon: <ReturnProductIcon />,
  },
];
