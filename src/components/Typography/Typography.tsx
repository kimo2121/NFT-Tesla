import React from "react";
import "./Typography.css";
import { TypographyTypes } from "./types";

const Typography: React.FC<TypographyTypes> = ({
  className,
  children,
  onClickFun,
}) => {
  return (
    <p onClick={onClickFun} className={className}>
      {children}
    </p>
  );
};

export default Typography;
