import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";

interface arrowFunctions {
  onClick?: any;
}
export const NextArrow: React.FC<arrowFunctions> = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <HiOutlineArrowRight className="right-direction" />
    </div>
  );
};

export const PrevArrow: React.FC<arrowFunctions> = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <HiOutlineArrowLeft className="left-direction" />
    </div>
  );
};
