/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import "swiper/css/grid";

import { ReactNode } from "react";
import { Swiper, useSwiper } from "swiper/react";
import {
  AutoplayOptions,
  NavigationOptions,
  PaginationOptions,
  Swiper as SwiperTypes,
  SwiperModule,
  ThumbsOptions,
} from "swiper/types";

import { ChevronDownIcon } from "@/public/icons";

interface Props {
  modules?: SwiperModule[];
  spaceBetween?: number;
  slidesPerView?: number;
  breakpoints?: any;
  onSlideChange?: ((swiper: SwiperTypes) => void) | undefined;
  onSwiper?: ((swiper: SwiperTypes) => void) | undefined;
  pagination?: boolean | PaginationOptions | undefined;
  autoplay?: boolean | AutoplayOptions | undefined;
  centeredSlides?: boolean;
  navigation?: boolean | NavigationOptions | undefined;
  children: ReactNode;
  isButtonNext?: boolean;
  isButtonPreview?: boolean;
  slidesPerGroup?: number;
  grid?: any;
  propsChild?: any;
  style?: any;
  styleButtonNext?: string;
  styleButtonPrev?: string;
  loop?: boolean;
  SwiperButtonNextCustom?: ReactNode;
  SwiperButtonPrevCustom?: ReactNode;
  thumbs?: ThumbsOptions;
}

const styleButtonSwiper =
  "h-12 w-12 bg-white rounded-full shadow-[0px_2px_6px_rgba(0,0,0,0.25)] absolute top-[50%] translate-y-[-50%] z-[8]";

export const SwiperCustom = (props: Props) => {
  const {
    modules,
    pagination,
    onSwiper,
    onSlideChange,
    slidesPerView,
    spaceBetween,
    autoplay,
    centeredSlides,
    navigation,
    children,
    isButtonNext,
    isButtonPreview,
    breakpoints,
    slidesPerGroup,
    grid,
    style,
    styleButtonNext = "right-[8px]",
    styleButtonPrev = "left-[8px]",
    loop,
    SwiperButtonPrevCustom,
    SwiperButtonNextCustom,
    thumbs,
    ...propsChild
  } = props;

  return (
    <div {...propsChild}>
      <Swiper
        modules={modules}
        spaceBetween={spaceBetween} //50
        slidesPerView={slidesPerView} //1
        onSlideChange={onSlideChange}
        onSwiper={onSwiper}
        pagination={pagination}
        centeredSlides={centeredSlides}
        autoplay={autoplay}
        navigation={navigation}
        breakpoints={breakpoints}
        slidesPerGroup={slidesPerGroup}
        grid={grid}
        loop={loop}
        thumbs={thumbs}
        style={{ maxWidth: "100%", ...style }}
      >
        {children}
        {isButtonNext && <SwiperButtonNext styleButtonNext={styleButtonNext} />}
        {isButtonPreview && (
          <SwiperButtonPreview styleButtonPrev={styleButtonPrev} />
        )}

        {SwiperButtonNextCustom}
        {SwiperButtonPrevCustom}
      </Swiper>
    </div>
  );
};

const SwiperButtonNext = ({ styleButtonNext }: { styleButtonNext: string }) => {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className={`${styleButtonSwiper} ${styleButtonNext}`}
    >
      <ChevronDownIcon
        className={"stroke-brand-800 inline -rotate-90 stroke-[2px]"}
      />
    </button>
  );
};

const SwiperButtonPreview = ({
  styleButtonPrev,
}: {
  styleButtonPrev: string;
}) => {
  const swiper = useSwiper();
  return (
    <button
      className={`${styleButtonSwiper} ${styleButtonPrev}`}
      onClick={() => swiper.slidePrev()}
    >
      <ChevronDownIcon
        className={"stroke-brand-800 inline rotate-90 stroke-[2px]"}
      />
    </button>
  );
};
