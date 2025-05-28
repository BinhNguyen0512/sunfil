export interface ProductDetailType {
  id: string;
  srcImage: string;
  name: string;
  price: number;
  sellPrice: number;
  discountPercent: number;
  alias: string;
}

export const productList: ProductDetailType[] = [
  1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 3, 2, 1, 2, 3, 2,
].map((element: number) => {
  return {
    id: element.toString(),
    srcImage: `/images/product-${element}.png`,
    name: "Lọc gió động cơ AirFilter - Chevrolet Colorado, Trail Aka demy",
    discountPercent: 10,
    price: 299000,
    sellPrice: 329000,
    alias: `loc-gio-dong-co-${element}`,
  };
});
