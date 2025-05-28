export interface ProductSortFilterType {
  id: string;
  name: string;
}

export const productSortFilter: ProductSortFilterType[] = [
  {
    id: "lien-quan",
    name: "Liên quan",
  },
  {
    id: "ban-chay",
    name: "Bán chạy",
  },
  {
    id: "moi-nhat",
    name: "Mới nhất",
  },
  {
    id: "noi-bat",
    name: "Nổi bật",
  },
];
