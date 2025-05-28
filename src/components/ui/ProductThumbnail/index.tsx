import clsx from "clsx";

import { FireIcon } from "@/public/icons";
import { ProductDetailType } from "@/src/constants/productList";

import { ConvertPrice } from "../../../helpers/convertPrice";
import { ButtonCustom } from "../../form/ButtonCustom";
import { ImageCustom } from "../ImageCustom";
import { LabelledIcon } from "../LabelledIcon";

interface Props {
  product: ProductDetailType;
  classNameImageWrapper?: string;
  heightImage?: number;
  widthImage?: number;
  maxWidthElement?: string;
  isScale?: boolean;
  isSaleFire?: boolean;
  isBuyButton?: boolean;
}
export const ProductThumbnail = (props: Props) => {
  const {
    product,
    classNameImageWrapper = "",
    widthImage,
    heightImage,
    maxWidthElement = "",
    isScale = true,
    isSaleFire = false,
    isBuyButton = false,
  } = props;
  return (
    <div
      key={product.id}
      className={clsx(
        "h-full w-full rounded-lg",
        "flex flex-col gap-4",
        "bg-white p-2",
        "cursor-pointer",
        isScale ? "transition duration-300 hover:scale-[1.05]" : "",
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
      <div className="flex flex-col gap-2 lg:gap-4">
        {isSaleFire && (
          <LabelledIcon
            prefixIcon={<FireIcon className="rounded-full" />}
            textCustom={
              <p className="text-base font-semibold text-black">Giá cực sốc</p>
            }
            className={clsx(
              "px-2 py-1",
              "xxl:w-[60%] xs:w-[40%] w-[60%] rounded-full sm:w-[80%]",
              "from-warning-light to-warning-main bg-linear-to-r",
            )}
          />
        )}
        <p
          className={clsx(
            "lg:text-md min-h-[36px]: line-clamp-2 text-base font-bold lg:min-h-[48px]",
            maxWidthElement,
          )}
        >
          {product.name}
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-error-dark text-xl font-semibold">
            {ConvertPrice(product.sellPrice)}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-disabled text-sm font-normal line-through lg:text-base">
              {ConvertPrice(product.price)}
            </p>
            <p className="text-error-dark lg:text-md text-base font-medium">
              -{product.discountPercent}%
            </p>
          </div>
        </div>

        {isBuyButton && (
          <ButtonCustom
            className={clsx(
              "bg-brand-50 rounded-lg py-2",
              "hover:!scale-[1.03]",
            )}
          >
            <p className="text-brand-600 lg:text-md text-base font-semibold">
              Mua ngay
            </p>
          </ButtonCustom>
        )}
      </div>
    </div>
  );
};
