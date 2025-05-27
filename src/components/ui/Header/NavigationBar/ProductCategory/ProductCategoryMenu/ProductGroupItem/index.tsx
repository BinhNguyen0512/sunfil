import clsx from "clsx";

import { ImageCustom } from "@/src/components/ui/ImageCustom";

import { ProductGroupType } from "../constants";

interface Props {
  item: ProductGroupType;
  // eslint-disable-next-line no-unused-vars
  onClick: (item: ProductGroupType) => void;
}

export const ProductGroupItem = (props: Props) => {
  const { item, onClick } = props;
  return (
    <div
      className={clsx(
        "flex w-80 items-center gap-4 rounded-lg bg-white px-4 py-3",
        "cursor-pointer transition-all duration-300 hover:scale-[1.05]",
      )}
      onClick={() => onClick(item)}
      key={item.id}
    >
      <div className="h-full w-16">
        <ImageCustom
          alt={item.name}
          src={item.srcImage}
          height={70}
          width={70}
        />
      </div>
      <p className="text-md w-full font-semibold text-black">{item.name}</p>
    </div>
  );
};
