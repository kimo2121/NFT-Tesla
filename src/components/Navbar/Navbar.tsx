import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
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
          <a href="/">
            <p>Elon's Tesla</p>
          </a>
        </div>
        <div className="nav-links">
          <Link smooth={true} duration={1000} to="mint">
            <ButtonComponent className="nav-btn mint-btn" label="MINT">
              <span className="left-border"></span>
              <span className="right-border"></span>
            </ButtonComponent>
          </Link>
          <Link smooth={true} duration={1000} to="concept">
            <ButtonComponent className="nav-btn history-btn" label="CONCEPT">
              <span className="left-border"></span>
              <span className="right-border"></span>
            </ButtonComponent>
          </Link>
          <Link smooth={true} duration={1000} to="racetrack">
            <ButtonComponent className="nav-btn roadmap-btn" label="RACETRACK">
              <span className="left-border"></span>
              <span className="right-border"></span>
            </ButtonComponent>
          </Link>
          <Link smooth={true} duration={1000} to="questions">
            <ButtonComponent className="nav-btn faq-btn" label="FAQ">
              <span className="left-border"></span>
              <span className="right-border"></span>
            </ButtonComponent>
          </Link>
          <Link smooth={true} duration={1000} to="social-media">
            <ButtonComponent
              className="nav-btn social-media-btn"
              label="Social Media"
            >
              <span className="left-border"></span>
              <span className="right-border"></span>
            </ButtonComponent>
          </Link>
        </div>
        <div className="mint-your-bull"></div>
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
            <nav className="slid-nav"></nav>
            <div className="mint-your-tesla-slid"></div>
            <div className="slide-menu-logo">
              <a href="/">
                <p>Elon's Tesla</p>
              </a>
            </div>
            <Link
              className="btn-side-menu"
              smooth={true}
              duration={1000}
              to="mint"
            >
              <ButtonComponent
                onClickFun={() => setMenu(false)}
                className="nav-btn mint-btn"
                label="MINT"
              ></ButtonComponent>
            </Link>
            <Link
              className="btn-side-menu"
              smooth={true}
              duration={1000}
              to="concept"
            >
              <ButtonComponent
                onClickFun={() => setMenu(false)}
                className="nav-btn history-btn"
                label="CONCEPT"
              />
            </Link>
            <Link
              className="btn-side-menu"
              smooth={true}
              duration={1000}
              to="racetrack"
            >
              <ButtonComponent
                onClickFun={() => setMenu(false)}
                className="nav-btn roadmap-btn"
                label="RACETRACK"
              />
            </Link>
            <Link
              className="btn-side-menu"
              smooth={true}
              duration={1000}
              to="questions"
            >
              <ButtonComponent
                onClickFun={() => setMenu(false)}
                className="nav-btn faq-btn"
                label="FAQ"
              />
            </Link>
            <Link
              className="btn-side-menu"
              smooth={true}
              duration={1000}
              to="social-media"
            >
              <ButtonComponent
                onClickFun={() => setMenu(false)}
                className="nav-btn social-media-btn"
                label="Social Media"
              ></ButtonComponent>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
