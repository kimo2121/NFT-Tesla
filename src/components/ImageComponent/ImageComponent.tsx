import React from "react";
import "./ImageComponent.css";
import { ImageTypes } from "./types";

const ImageComponent: React.FC<ImageTypes> = ({ img, header, footer }) => {
  return (
    <div className="image-component">
      <h1>{header}</h1>
      <img src={img} alt="" />
      <span>{footer}</span>
    </div>
  );
};

export default ImageComponent;
