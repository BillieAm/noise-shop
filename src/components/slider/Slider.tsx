import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import { IProduct } from "../../types/shop";

import SliderItem from "../slider-item/SliderItem";
import SliderDot from "../slider-dot/SliderDot";

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

  /* useEffect(() => {
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
  }); */

  const currentSlide = slides.find((_, index) => index === currentIdx);

  const changeSlideHandle = (itemIdx: number) => {
    setCurrentIdx(itemIdx);
  };

  return (
    <SliderWrapper>
      {currentSlide && <SliderItem slideItem={currentSlide} />}
      <div>
        {slides.map((slide, index) => (
          <SliderDot key={slide.id} onClick={() => changeSlideHandle(index)} />
        ))}
      </div>
    </SliderWrapper>
  );
}

export default Slider;
