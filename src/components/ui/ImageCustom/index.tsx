import Image from "next/image";

interface Props {
  alt: string;
  src: string;
  height?: number;
  width?: number;
  quality?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
  className?: string;
}

export const ImageCustom = (props: Props) => {
  const {
    alt = "",
    height,
    width,
    loading = "lazy",
    priority = false,
    quality = 100,
    src,
    className = "",
  } = props;
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      loading={loading}
      priority={priority}
      quality={quality}
      className={className}
    />
  );
};
