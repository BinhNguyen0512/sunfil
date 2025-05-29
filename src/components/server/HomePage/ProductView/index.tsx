import { ProductFilter } from "./ProductFilter";
import { ProductFilterMobile } from "./ProductFilter/ProductFilterMobile";
import { ProductList } from "./ProductList";

const ProductView = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
      <div className="hidden w-[315px] flex-shrink-0 lg:block">
        <div className="sticky top-0 flex w-full flex-col">
          <ProductFilter />
        </div>
      </div>

      <div className="block lg:hidden">
        <ProductFilterMobile />
      </div>

      <ProductList />
    </div>
  );
};

export default ProductView;
