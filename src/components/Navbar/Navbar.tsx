import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Navbar.css";
import logo from "../../assets/images/Logo2.png";
const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          {/* <p>BULLSUM</p> */}
          <img src={logo} alt="" />
        </div>
        <div className="nav-links">
          <ButtonComponent
            className="nav-btn collection-btn"
            label="COLLECTION"
          />
          <ButtonComponent className="nav-btn history-btn" label="HISTORY" />
          <ButtonComponent className="nav-btn roadmap-btn" label="ROADMAP" />
          <ButtonComponent className="nav-btn team-btn" label="TEAM" />
          <ButtonComponent className="nav-btn faq-btn" label="FAQ" />
        </div>
        <div className="mint-your-bull">
          <ButtonComponent
            className="mint-your-bull-btn"
            label="MINT-YOUR-BULL"
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
            // data-aos="slide-right"
            className={menu ? "menu-content active" : "menu-content"}
          >
            {/* <Close
                onClick={() => setMenu(false)}
                className={menu ? "close-icon" : "close-icon active"}
              /> */}
            <ButtonComponent
              className="nav-btn collection-btn"
              label="COLLECTION"
            />
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="nav-btn history-btn"
              label="HISTORY"
            />
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="nav-btn roadmap-btn"
              label="ROADMAP"
            />
            <ButtonComponent
              onClickFun={() => setMenu(false)}
              className="nav-btn team-btn"
              label="TEAM"
            />
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
