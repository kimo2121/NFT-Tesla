import React from "react";
import "./ButtonComponent.css";
import { ButtonTypes } from "./types";

const ButtonComponent: React.FC<ButtonTypes> = ({
  label,
  onClickFun,
  className,
}) => {
  return <div className={className}>{label}</div>;
};

export default ButtonComponent;
