import React from "react";
import Collection from "../../components/Collection/Collection";
import History from "../../components/History/History";
import Mint from "../../components/Mint/Mint";
import Questions from "../../components/Questions/Questions";
import RoadMap from "../../components/RoadMap/RoadMap";
import SliderComponent from "../../components/Slider/Slider";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <SliderComponent />
      <div
        className={window.innerWidth > 1024 ? "banner" : "banner smaller"}
      ></div>
      <Mint />
      {/* <Collection /> */}
      <History />
      <RoadMap />
      {/* <TeamMembers /> */}
      <Questions />
    </div>
  );
};

export default Home;
