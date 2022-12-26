import { useContext, useState, useEffect } from "react";

import { CategoriesContext } from "../../../contexts/categories.context";

import { IProduct } from "../../../types/shop";

import SliderItem from "../slider-item/SliderItem";
import SliderDot from "../slider-dot/SliderDot";
import GlassContainer from "../../containers/glass-container/GlassContainer";

import randomItems from "../../../utils/random-items/randomItems";

import {
  MobileEntryWrapper,
  SliderWrapper,
  DotsWrapper
} from "./sliderContainer.styles";

function SliderContainer(): JSX.Element {
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
    <>
      <MobileEntryWrapper>
        {slides.map(item => (
          <SliderItem devise="small" item={item} key={item.id} />
        ))}
      </MobileEntryWrapper>

      <SliderWrapper>
        <GlassContainer glassType="base">
          {currentSlide && <SliderItem devise="large" item={currentSlide} />}
        </GlassContainer>
        <DotsWrapper>
          {slides.map((slide, index) => (
            <SliderDot
              key={slide.id}
              onClick={() => changeSlideHandle(index)}
            />
          ))}
        </DotsWrapper>
      </SliderWrapper>
    </>
  );
}

export default SliderContainer;
