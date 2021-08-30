import React from "react";
import Collection from "../../components/Collection/Collection";
import History from "../../components/History/History";
import Questions from "../../components/Questions/Questions";
import RoadMap from "../../components/RoadMap/RoadMap";
import SliderComponent from "../../components/Slider/Slider";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <SliderComponent />
      {/* <Collection /> */}
      <History />
      <RoadMap />
      {/* <TeamMembers /> */}
      <Questions />
    </div>
  );
};

export default Home;
