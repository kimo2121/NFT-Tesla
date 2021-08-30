import React, { useEffect } from "react";
import TeamMemberBull from "./TeamMemberBull";
import "./TeamMembers.css";
import member1 from "../../assets/images/member1.png";
import member2 from "../../assets/images/member2.png";
import member3 from "../../assets/images/member3.png";
import member4 from "../../assets/images/member4.png";
import member5 from "../../assets/images/member5.png";
import member6 from "../../assets/images/member6.png";
import AOS from "aos";
import "aos/dist/aos.css";
const TeamMembers: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div className="team-members">
      {window.innerWidth > 1025 ? (
        <div className="sec-title">
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          ></span>
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            TE
            <br />
            AM
            <br />
            MEM
            <br />
            BERS
          </h2>
        </div>
      ) : (
        <div className="sec-title">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            TEAM MEMBERS
          </h2>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          ></span>
        </div>
      )}
      <div className="members">
        <TeamMemberBull
          className=""
          img={member6}
          label="Elon Musk"
          Aos="fade-down"
          Aos2="fade-right"
          header="PROJECT LEAD"
        />
        <TeamMemberBull
          className=""
          img={member1}
          Aos="fade-down"
          Aos2="fade-right"
          label="Floki"
          header="BLOCKCHAIN DEV"
        />
        <TeamMemberBull
          className=""
          img={member3}
          Aos="fade-down"
          Aos2="fade-right"
          label="Manmax"
          header="ART DIRECTOR"
        />
        <TeamMemberBull
          className=""
          img={member4}
          Aos="fade-down"
          Aos2="fade-right"
          label="Ruktud"
          header="FRONTEND DEV"
        />
        <TeamMemberBull
          className=""
          Aos="fade-down"
          Aos2="fade-right"
          img={member5}
          label="Lysergic"
          header="MARKETER"
        />
        <TeamMemberBull
          className=""
          Aos="fade-down"
          Aos2="fade-right"
          img={member2}
          label="Zanprix"
          header="GAME DEVELOPER"
        />
      </div>
    </div>
  );
};

export default TeamMembers;
