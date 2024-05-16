import Image from "next/image";
import {
  isImageSlide,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";

const isNextJsImage = (slide) => {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
};

const NextJsImage = ({ slide, offset, rect }) => {
  const {
    on: { click },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  if (!isNextJsImage(slide)) return undefined;

  const width = rect.width;

  const height = rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        quality={50}
        fill
        alt={slide.alt}
        src={slide}
        loading="lazy"
        draggable={false}
        placeholder={slide.blurDataURL ? "blur" : undefined}
        className="object-cover cursor-pointer"
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
};
export default NextJsImage;
