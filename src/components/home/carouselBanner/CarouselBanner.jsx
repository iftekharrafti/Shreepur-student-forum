import Img from "@/components/lazyLoadImage/Img";
import { baseImgUrl } from "@/utils/imgUrl";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Style from './carouselBanner.module.css';

const CarouselBanner = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel  className={Style.carousel} activeIndex={index} onSelect={handleSelect}>
      {data?.slide?.map((slide) => {
        return (
          <Carousel.Item key={slide.serial} className={Style.carouselItem}>
            <Img src={baseImgUrl + slide?.image} className={`${Style.carouselImg}`} />
            <Carousel.Caption>
              <h3 className={Style.title}>{slide?.title}</h3>
              <p className={Style.text}>{slide?.text1}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselBanner;
