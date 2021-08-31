import React, { useEffect } from "react";
import Typography from "../Typography/Typography";
import "./RoadMap.css";
import Cybertruck from "../../assets/images/Cybertruck-__Black.png";
import AOS from "aos";
import "aos/dist/aos.css";
const RoadMap: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div id="racetrack" className="road-map">
      {window.innerWidth > 1025 ? (
        <div className="sec-title">
          <img src={Cybertruck} alt="" />
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
            RA
            <br />
            CE
            <br />
            TRA
            <br />
            CK
          </h2>
        </div>
      ) : (
        <div className="sec-title">
          <img src={Cybertruck} alt="" />
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            RACETRACK
          </h2>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          ></span>
        </div>
      )}
      <div className="percentages">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="100"
          className="div-percent div-percent-20"
        >
          <h3>QUALIFYING LAP</h3>
          <Typography className="par-percent-20">
            🏁 Proof of concept
          </Typography>
          <Typography className="par-percent-20">🏁 Metadata build</Typography>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="div-percent div-percent-40"
        >
          <h3>LAP ONE</h3>
          <Typography className="par-percent-20">
            🏁 Release of social media
          </Typography>
          <Typography className="par-percent-20">
            🏁 Rarity guide release
          </Typography>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-offset="100"
          className="div-percent div-percent-60"
        >
          <h3>LAP TWO</h3>
          <Typography className="par-percent-20">
            🏁 Reveal & release of minting at 0.08 ETH per Tesla
          </Typography>
          <Typography className="par-percent-20">
            🏁 Opensea resale market
          </Typography>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="div-percent div-percent-80"
        >
          <h3>LAP THREE</h3>
          <Typography className="par-percent-20">
            🏁 Win a Tesla competition
          </Typography>
          <Typography className="par-percent-20">
            🏁 SpaceX NFT airdrop for holders
          </Typography>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="div-percent div-percent-100"
        >
          <h3>PENULTIMATE LAP</h3>
          <Typography className="par-percent-20">
            🏁 Tesla Garage creation for upgrades
          </Typography>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="div-percent div-percent-120"
        >
          <h3>CHECKERED FLAG</h3>
          <Typography className="par-percent-20">
            🏁 Doge to the Moon Metaverse & play-to-earn game
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
