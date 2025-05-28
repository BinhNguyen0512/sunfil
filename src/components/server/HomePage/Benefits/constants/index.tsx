import { ReactNode } from "react";

import {
  Box30Icon,
  FastShippingIcon,
  FreeShipCardIcon,
  Support247Icon,
} from "@/public/icons";

export const benefitList: BenefitType[] = [
  {
    id: "mien-phi-van-chuyen",
    title: "Miễn phí vận chuyển",
    description: "Với hoá đơn từ 1 triệu",
    icon: <FreeShipCardIcon />,
  },
  {
    id: "ho-tro-247",
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
    icon: <Support247Icon />,
  },
  {
    id: "giao-hang-nhanh",
    title: "Giao hàng nhanh 2h",
    description: "Trong vòng bán kính 10km nội thành TP HCM",
    icon: <FastShippingIcon />,
  },
  {
    id: "doi-tra",
    title: "30 ngày đổi trả",
    description:
      "Hoàn tền 100% tneues phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
    icon: <Box30Icon />,
  },
];

export interface BenefitType {
  icon: ReactNode;
  title: string;
  description: string;
  id: string;
}
