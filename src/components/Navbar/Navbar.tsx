import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Navbar.css";
import logo from "../../assets/images/Logo2.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          {/* <ButtonComponent
            className="nav-btn collection-btn"
            label="COLLECTION"
          /> */}
          <ButtonComponent className="nav-btn history-btn" label="CONCEPT" />
          <ButtonComponent className="nav-btn roadmap-btn" label="RACETRACK" />
          {/* <ButtonComponent className="nav-btn team-btn" label="TEAM" /> */}
          <ButtonComponent className="nav-btn faq-btn" label="FAQ" />
        </div>
        <div className="mint-your-bull">
          <ButtonComponent
            className="mint-your-bull-btn"
            label="MINT YOUR TESLA"
          />
        </div>
      </div>
      <div className="slide-menu">
        {menu && <div className="backdrop-back"></div>}
        <div
          className={menu ? "slide-menu-icon active" : "slide-menu-icon"}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {menu && (
          <div
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="linear"
            className={menu ? "menu-content active" : "menu-content"}
          >
            <div className="mint-your-tesla-slid">
              <ButtonComponent
                className="mint-your-bull-btn"
                label="MINT YOUR TESLA"
              />
            </div>
            <div className="slide-menu-logo">
              <img src={logo} alt="" />
            </div>
            {/* <ButtonComponent
              className="nav-btn collection-btn"
              label="COLLECTION"
            /> */}
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="nav-btn history-btn"
              label="CONCEPT"
            />
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="nav-btn roadmap-btn"
              label="RACETRACK"
            />
            {/* <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="nav-btn team-btn"
              label="TEAM"
            /> */}
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="nav-btn faq-btn"
              label="FAQ"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
