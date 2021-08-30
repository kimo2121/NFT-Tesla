import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import stoneBull from "../../assets/images/stone.png";
import woodBull from "../../assets/images/wood.png";
import bronzeBull from "../../assets/images/bronze.png";
import glassBull from "../../assets/images/glass.png";
import { NextArrow, PrevArrow } from "../../utils/util_functions";

const SliderComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="slider-component">
      <p>Tour our virtual museum</p>
      <Slider {...settings}>
        <img src={stoneBull} alt="" />
        <img src={woodBull} alt="" />
        <img src={bronzeBull} alt="" />
        <img src={glassBull} alt="" />
      </Slider>
    </div>
  );
};

export default SliderComponent;
