import React from "react";
import "./Footer.css";

import discord from "../../assets/icons/discord.png";
import medium from "../../assets/icons/medium.png";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
const Footer: React.FC = () => {
  return (
    <div id="social-media" className="footer">
      <div className="discord">
        <p>JOIN OUR COMMUNITY</p>
        <a href="https://discord.gg/AcXyqrEj">
          <img src={discord} alt="" />
        </a>
      </div>
      <div className="other-socials">
        <p>FOLLOW US ON</p>
        <div className="other-inner">
          <a href="https://mobile.twitter.com/ElonsTeslaNft">
            <Twitter />
          </a>
          <a href="https://medium.com/@elonsteslas">
            <img src={medium} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
