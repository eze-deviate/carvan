import React from "react";
import Slider from "react-slick";

type Props = {};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SlickCarousel = ({}: Props) => {
  const carouselSettings = {
    ...settings,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}></Slider>
    </div>
  );
};

export default SlickCarousel;
