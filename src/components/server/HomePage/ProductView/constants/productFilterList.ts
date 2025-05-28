import {
  Category_Alias_Enum,
  ProductGroup_Alias_Enum,
} from "../enum/productFilterList";

export interface productGroupType {
  id: string;
  name: string;
  alias?: string;
  priceFrom?: number;
  priceTo?: number;
}

export interface ProductCategoryFilterType {
  id: string;
  title: string;
  productGroup: productGroupType[];
}

export const productCategoryFilterList: ProductCategoryFilterType[] = [
  {
    id: Category_Alias_Enum.CATEGORY,
    title: "Danh mục sản phẩm",
    productGroup: [
      {
        id: "1",
        alias: ProductGroup_Alias_Enum.LOC_GIO_DONG_CO,
        name: "Lọc gió động cơ",
      },
      {
        id: "2",
        alias: ProductGroup_Alias_Enum.LOC_NHIEN_LIEU,
        name: "Lọc nhiên liệu",
      },
      {
        id: "3",
        alias: ProductGroup_Alias_Enum.BO_LOC_DAU,
        name: "Bộ lọc dầu",
      },
      {
        id: "4",
        alias: ProductGroup_Alias_Enum.CHUA_PHAN_LOAI,
        name: "Chưa phân loại",
      },
      {
        id: "5",
        alias: ProductGroup_Alias_Enum.KHAC,
        name: "Khác",
      },
    ],
  },
  {
    id: Category_Alias_Enum.AROUND_PRICE,
    title: "Khoảng giá",
    productGroup: [
      {
        id: "1",
        priceTo: 100000,
        name: "Dưới",
      },
      {
        id: "2",
        priceFrom: 100000,
        name: "-",
        priceTo: 300000,
      },
      {
        id: "3",
        priceFrom: 300000,
        name: "-",
        priceTo: 500000,
      },
      {
        id: "4",
        priceFrom: 500000,
        name: "Trên",
      },
    ],
  },

  {
    id: Category_Alias_Enum.BRAND,
    title: "Thương hiệu",
    productGroup: [
      {
        id: "1",
        alias: ProductGroup_Alias_Enum.ASAKASHI,
        name: "Asakashi",
      },
      {
        id: "2",
        alias: ProductGroup_Alias_Enum.BOSCH,
        name: "Bosch",
      },
      {
        id: "3",
        alias: ProductGroup_Alias_Enum.HUYNDAI,
        name: "Huyndai",
      },
    ],
  },

  {
    id: Category_Alias_Enum.MANUFACTURE_YEAR,
    title: "Năm sản xuất",
    productGroup: [
      {
        id: "1",
        alias: ProductGroup_Alias_Enum.NAM_2021,
        name: "2021",
      },
      {
        id: "2",
        alias: ProductGroup_Alias_Enum.NAM_2020,
        name: "2020",
      },
      {
        id: "3",
        alias: ProductGroup_Alias_Enum.NAM_2019,
        name: "2019",
      },
      {
        id: "4",
        alias: ProductGroup_Alias_Enum.NAM_2018,
        name: "2018",
      },
    ],
  },

  {
    id: Category_Alias_Enum.ORGINIAL,
    title: "Xuất xứ",
    productGroup: [
      {
        id: "1",
        alias: ProductGroup_Alias_Enum.GERMAN,
        name: "Đức",
      },
      {
        id: "2",
        alias: ProductGroup_Alias_Enum.JANPANESE,
        name: "Nhật Bản",
      },
      {
        id: "3",
        alias: ProductGroup_Alias_Enum.CHINESE,
        name: "Trung Quốc",
      },
    ],
  },
];
