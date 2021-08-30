import React, { useEffect } from "react";
import "./TeamMembers.css";
import { BullTypes } from "./types";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamMemberBull: React.FC<BullTypes> = ({
  className,
  label,
  header,
  img,
  Aos,
  Aos2,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div className="team-members-bull">
      <div style={{ display: "flex" }}>
        <img src={img} alt="" />
        <h3 data-aos={Aos}>{header}</h3>
      </div>
      <p data-aos={Aos2}>{label}</p>
    </div>
  );
};

export default TeamMemberBull;
