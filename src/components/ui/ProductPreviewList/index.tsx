import { ProductDetailType, productList } from "@/src/constants/productList";

import { ProductThumbnail } from "../ProductThumbnail";

interface Props {
  previewNumber: number;
}

export const PreviewList = (props: Props) => {
  const { previewNumber } = props;
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="flex gap-5">
        {productList
          .map((product: ProductDetailType, index: number) => (
            <ProductThumbnail
              key={index}
              product={product}
              maxWidthElement="max-w-[260px]"
              isScale={false}
              isSaleFire
              isBuyButton
            />
          ))
          .slice(0, previewNumber)}
      </div>
    </div>
  );
};
