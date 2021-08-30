import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import modelS from "../../assets/images/Model_S_-_Orange.png";
import model3 from "../../assets/images/Model_3_-_Black.png";
import modelX from "../../assets/images/Model_X_-_Yellow.png";
import modelY from "../../assets/images/Model_Y_-_Blue.png";
import Roadster from "../../assets/images/Roadster.png";
import { NextArrow, PrevArrow } from "../../utils/util_functions";

const SliderComponent: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: window.innerWidth > 768 ? <NextArrow /> : undefined,
    prevArrow: window.innerWidth > 768 ? <PrevArrow /> : undefined,
  };
  return (
    <div className="slider-component">
      <Slider {...settings}>
        <img src={modelS} alt="" />
        <img src={model3} alt="" />
        <img src={modelX} alt="" />
        <img src={modelY} alt="" />
        <img src={Roadster} alt="" />
      </Slider>
    </div>
  );
};

export default SliderComponent;
