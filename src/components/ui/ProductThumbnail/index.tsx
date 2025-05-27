import clsx from "clsx";

import { ConvertPrice } from "../../helpers/convertPrice";
import { ProductDetailType } from "../Header/NavigationBar/ProductCategory/ProductCategoryMenu/constants";
import { ImageCustom } from "../ImageCustom";

interface Props {
  product: ProductDetailType;
}
export const ProductThumbnail = (props: Props) => {
  const { product } = props;
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
      <div className="h-full max-w-[184px]">
        <ImageCustom
          alt={product.name}
          src={product.srcImage}
          height={184}
          width={184}
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-md line-clamp-2 min-h-[48px] max-w-[184px] font-bold">
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
