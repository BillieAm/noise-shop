import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { IProduct } from "../../types/shop";

import GlassWrapper from "../glass-wrapper/GlassWrapper";
import SliderItem from "../slider-item/SliderItem";

import randomItems from "../../utils/random-items/randomItems";

import { SliderWrapper } from "./slider.styles";

function Slider(): JSX.Element {
  const categories = useContext(CategoriesContext);
  const [slides, setSlides] = useState<IProduct[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  console.log("categories", categories);

  useEffect(() => {
    setSlides(randomItems(categories));
  }, [categories]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIdx === slides.length - 1) {
        setCurrentIdx(0);
      } else {
        setCurrentIdx(currentIdx + 1);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  });

  const currentSlide = slides.find((_, index) => index === currentIdx);

  const changeSlideHandle = (itemIdx: number) => {
    setCurrentIdx(itemIdx);
  };

  return (
    <SliderWrapper>
      <GlassWrapper>
        {currentSlide && <SliderItem slideItem={currentSlide} />}
        {slides.map((slide, index) => (
          <span key={slide.id} onClick={() => changeSlideHandle(index)}>
            ●
          </span>
        ))}
      </GlassWrapper>
    </SliderWrapper>
  );
}

export default Slider;
