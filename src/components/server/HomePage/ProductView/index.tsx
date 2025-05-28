import { ProductFilter } from "./ProductFilter";

const ProductView = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="hidden w-[315px] flex-shrink-0 lg:block">
        <div className="flex w-full flex-col">
          <ProductFilter />
        </div>
      </div>

      <div className="block lg:hidden">{/* <FilterMobile /> */}</div>

      <div>2</div>
    </div>
  );
};

export default ProductView;
