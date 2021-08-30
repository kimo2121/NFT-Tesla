import React, { useEffect } from "react";
import Typography from "../Typography/Typography";
import "./History.css";
import history from "../../assets/images/history.png";
import AOS from "aos";
import "aos/dist/aos.css";
const History: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div className="history-component">
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
            HI
            <br />
            ST
            <br />
            OR
            <br />Y
          </h2>
        </div>
      ) : (
        <div className="sec-title">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            HISTORY
          </h2>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          ></span>
        </div>
      )}
      <div className="img-text-container">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="left-side-div"
        >
          <Typography className="up-left-p">
            It is the year 3223, and the world is no longer as we remembered it.
            Traces of human civilization are finally disappearing and new
            civilizations are organized in new ways. Family nuclei have changed,
            and religions are no longer what they used to be. Species mutated,
            and only the strongest survived.
          </Typography>
          <Typography className="down-left-p">
            The bulls are one of them, thanks to their constant optimism and
            their willpower, they managed to survive over the years, becoming
            more and more intelligent and organized by mixing and incorporating
            what they once were with human customs. One of the customs that was
            inherited over time was art. It is indisputable that art has always
            been a fundamental part of intelligent society.
          </Typography>
        </div>
        <img src={history} alt="" />
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="right-side-div"
        >
          <Typography className="up-right-p">
            The most valuable art collection of this civilization is kept in a
            museum called "Bullseum", in which portraits of the most influential
            figures of the species can be found. These portraits were created by
            the most intelligent and talented individuals. Being this
            collection, one of its most precious treasures.
          </Typography>
          <Typography className="down-right-p">
            In more recent years, the bull’s civilization has been weakening,
            entering wars with other species, and having many internal
            conflicts. That is why there is a fear that their most precious
            treasure will fall into the wrong hands. After a long leaders'
            assembly, they decided to put 5,000 portraits from their collection
            up for sale, to ensure that these are distributed around the world
            in the hands of the right people.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default History;
