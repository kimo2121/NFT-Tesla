import React from "react";
import "./Footer.css";

import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import discord from "../../assets/icons/discord.png";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
const Footer: React.FC = () => {
  return (
    <div className="footer">
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
          <a href="https://www.youtube.com/channel/UCtD4x58LR6cAFhqY1YEqj0Q">
            <Youtube />
          </a>
          <a href="https://www.instagram.com/bullseum/">
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
