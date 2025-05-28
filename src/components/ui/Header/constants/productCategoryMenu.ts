import slugify from "slugify";

export interface subCategoryType {
  id: string;
  srcImage: string;
  name: string;
  alias: string;
  productGroup: ProductGroupType[];
  bestSellerProduct: ProductDetailType[];
}

export interface ProductGroupType {
  id: string;
  srcImage: string;
  name: string;
  alias: string;
}

export interface ProductDetailType {
  id: string;
  srcImage: string;
  name: string;
  price: number;
  sellPrice: number;
  discountPercent: number;
  alias: string;
}

export const bestSellerProductList: ProductDetailType[] = [1, 2, 3, 4, 5].map(
  (element: number) => {
    return {
      id: element.toString(),
      srcImage: `/images/product-${element}.png`,
      name: "Lọc gió động cơ AirFilter - Chevrolet Colorado, Trail Akademy",
      discountPercent: 10,
      price: 299000,
      sellPrice: 329000,
      alias: `loc-gio-dong-co-${element}`,
    };
  },
);

export const productGroupList: ProductGroupType[] = [1, 2, 3, 1, 2, 3].map(
  (element: number, index: number) => {
    return {
      id: index.toString(),
      srcImage: `/images/product-group-${element}.png`,
      name: "Bộ lọc gió",
      alias: `bo-loc-gio-${index}`,
    };
  },
);

const subMenuTitleList: string[] = [
  "Bộ lọc dầu",
  "Bộ lọc không khí",
  "Bộ lọc nhiên liệu",
  "Bộ lọc trong cabin",
  "Bộ lọc không khí",
  "Bộ lọc trong Cabin",
  "Bộ lọc nhiên liệu",
  "Bộ lọc không khí",
];

export const subCategory: subCategoryType[] = subMenuTitleList.map(
  (title: string, index: number) => {
    return {
      id: index.toString(),
      name: title,
      alias: slugify(title),
      srcImage: `/images/sub-menu-${index}.png`,
      productGroup: productGroupList,
      bestSellerProduct: bestSellerProductList,
    };
  },
);

export const initialSubCategoryItem: subCategoryType = subCategory[0];

export const initialProductGroup: ProductGroupType[] =
  initialSubCategoryItem.productGroup;

export const initialProduct: ProductDetailType[] =
  initialSubCategoryItem.bestSellerProduct;
