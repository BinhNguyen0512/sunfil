import clsx from "clsx";

import { ProductDetailType } from "@/src/constants/productList";

import { ConvertPrice } from "../../../helpers/convertPrice";
import { ImageCustom } from "../ImageCustom";

interface Props {
  product: ProductDetailType;
  classNameImageWrapper?: string;
  heightImage?: number;
  widthImage?: number;
  maxWidthElement?: string;
}
export const ProductThumbnail = (props: Props) => {
  const {
    product,
    classNameImageWrapper = "",
    widthImage,
    heightImage,
    maxWidthElement = "",
  } = props;
  return (
    <div
      key={product.id}
      className={clsx(
        "h-full w-full rounded-lg",
        "flex flex-col gap-4",
        "bg-white p-2",
        "cursor-pointer",
        "transition duration-300 hover:scale-[1.05]",
      )}
    >
      <div className={clsx("h-full", classNameImageWrapper, maxWidthElement)}>
        <ImageCustom
          alt={product.name}
          src={product.srcImage}
          height={heightImage || 184}
          width={widthImage || 184}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p
          className={clsx(
            "text-md line-clamp-2 min-h-[48px] font-bold",
            maxWidthElement,
          )}
        >
          {product.name}
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-error-dark text-xl font-semibold">
            {ConvertPrice(product.sellPrice)}
          </p>
          <div className="flex gap-4">
            <p className="text-disabled text-base font-normal line-through">
              {ConvertPrice(product.price)}
            </p>
            <p className="text-error-dark text-md font-medium">
              -{product.discountPercent}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
