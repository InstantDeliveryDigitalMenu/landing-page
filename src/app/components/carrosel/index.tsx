import { ReactNode, useCallback, useRef, useState } from "react";
import styles from "./carrosel.module.css";

interface CarroselProps {
  width?: number;
  margin?: number;
  carroselData: Array<{
    key: number;
    content: ReactNode;
  }>;
  className?: string;
  liClassName?: string;
}

const Carrosel = ({
  liClassName,
  margin,
  width,
  carroselData,
  ...props
}: CarroselProps) => {
  const sliderRef = useRef<HTMLUListElement | null>(null);

  const [sliderPosition, setSliderPosition] = useState(0);

  const sliderWidth = width ?? 400;
  const sliderMargin = margin ?? 32;

  const currentSlide = Math.round(
    sliderPosition / (sliderWidth + sliderMargin)
  );

  const scrollToSlide = (
    slider: HTMLUListElement | null,
    slideIndex: number
  ) => {
    if (!slider) return;
    slider.scrollTo({
      left: slideIndex * (sliderWidth + sliderMargin),
      behavior: "smooth",
    });
  };

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
    console.log("currentSlide", sliderWidth + sliderMargin);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <>
      <ul
        ref={sliderRef}
        onScroll={(e) => {
          const target = e.target as HTMLElement;
          setSliderPosition(target.scrollLeft);
        }}
        {...props}
      >
        {carroselData.map((item) => {
          return (
            <li key={item.key} className={liClassName}>
              {item.content}
            </li>
          );
        })}
      </ul>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            cursor: "pointer",
          }}
          disabled={currentSlide > 0 ? false : true}
          onClick={() => goToPreviousSlide()}
        >
          {"< Anterior"}
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => goToNextSlide()}
        >
          {"Próximo >"}
        </button>
      </div>
    </>
  );
};

export default Carrosel;
