import React from "react";
import "./ButtonComponent.css";
import { ButtonTypes } from "./types";

const ButtonComponent: React.FC<ButtonTypes> = ({
  label,
  onClickFun,
  className,
  children,
}) => {
  return (
    <div onClick={onClickFun} className={className}>
      {label}
      {children}
    </div>
  );
};

export default ButtonComponent;
