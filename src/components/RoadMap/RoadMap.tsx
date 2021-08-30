import React, { useEffect } from "react";
import Typography from "../Typography/Typography";
import "./RoadMap.css";
import bgRoadmap from "../../assets/images/bg-roadmap.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const RoadMap: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div className="road-map">
      {window.innerWidth > 1025 ? (
        <div className="sec-title">
          <img src={bgRoadmap} alt="" />
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
            RO
            <br />
            AD
            <br />
            MA
            <br />P
          </h2>
        </div>
      ) : (
        <div className="sec-title">
          <img src={bgRoadmap} alt="" />
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            ROADMAP
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
          <h3>20%</h3>
          <Typography className="par-percent-20">
            - 10 NFT Bulls giveaway beetween holders.
          </Typography>
          <Typography className="par-percent-20">
            - 10 ETH goes to the Community Chest
          </Typography>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="div-percent div-percent-40"
        >
          <h3>40%</h3>
          <Typography className="par-percent-20">
            - The Suggestions Channel for the Community Chest Utilities is Open.
          </Typography>
          <Typography className="par-percent-20">
            - 5 ETH goes to the Community Chest.
          </Typography>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-offset="100"
          className="div-percent div-percent-60"
        >
          <h3>60%</h3>
          <Typography className="par-percent-20">
            - Art Contest with 2.5ETH in prices Start (Check the Discord Channel
            for more information).
          </Typography>
          <Typography className="par-percent-20">
            - 5 NFT Bulls giveaway beetween.
          </Typography>
          <Typography className="par-percent-20">
            - We are going to use 10 ETH to raise the floor price of bulls on
            OpenSea
          </Typography>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="div-percent div-percent-80"
        >
          <h3>80%</h3>
          <Typography className="par-percent-20">
            - 10 ETH goes to the community Chest.
          </Typography>
          <Typography className="par-percent-20">
            - Polls for decide the best idea for the Community Chest util
            starts.
          </Typography>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="div-percent div-percent-100"
        >
          <h3>100%</h3>
          <Typography className="par-percent-20">
            - The Polls of the Community Chest Utility ends and start to have
            effect.
          </Typography>
          <Typography className="par-percent-20">
            - 40ETH are reserved for the VideoGame Development.
          </Typography>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="div-percent div-percent-120"
        ></div>
      </div>
    </div>
  );
};

export default RoadMap;
