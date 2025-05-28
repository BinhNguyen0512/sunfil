"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

import { PreviewList } from "@/src/components/ui/ProductPreviewList";
import { ProductThumbnail } from "@/src/components/ui/ProductThumbnail";
import { SwiperCustom } from "@/src/components/ui/SwiperCustom";
import { ProductDetailType, productList } from "@/src/constants/productList";

export const ProductSliderCarousel = () => {
  const divRef = useRef(null);

  const [onloadCompleted, setOnloadCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (!divRef || !divRef) return;

    setOnloadCompleted(true);
  }, []);

  return (
    <div className={clsx("p-12")} ref={divRef}>
      {!onloadCompleted ? (
        <PreviewList previewNumber={5} />
      ) : (
        <div className="relative h-full w-full">
          <SwiperCustom
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            slidesPerView={5}
            modules={[Autoplay, Navigation]}
            navigation={true}
            isButtonNext
            isButtonPreview
            styleButtonNext="!top-[45%] lg:top-[50%] right-[10px] lg:right-[-24px] z-10"
            styleButtonPrev="!top-[45%] lg:top-[50%] left-[10px] lg:left-[-24px] z-10"
          >
            {productList.map((product: ProductDetailType, index: number) => (
              <SwiperSlide key={index}>
                <ProductThumbnail
                  product={product}
                  maxWidthElement="max-w-[328px] sm:max-w-[260px]"
                />
              </SwiperSlide>
            ))}
          </SwiperCustom>
        </div>
      )}
    </div>
  );
};
