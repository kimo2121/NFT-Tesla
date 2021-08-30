import React, { useEffect } from "react";
import "./Collection.css";
import bullGroup1 from "../../assets/images/gallery1.png";
import bullGroup2 from "../../assets/images/gallery2.png";
import bullGroup3 from "../../assets/images/gallery3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Collection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);
  return (
    <div className="collection">
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
            COL
            <br />
            LEC
            <br />
            TIO
            <br />N
          </h2>
        </div>
      ) : (
        <div className="sec-title">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            COLLECTION
          </h2>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          ></span>
        </div>
      )}
      <div className="img-groups">
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src={bullGroup1}
          className="img-group1"
        />
        <img
          data-aos="fade-left"
          data-aos-duration="1500"
          src={bullGroup2}
          className="img-group2"
        />
        <img
          data-aos="fade-right"
          data-aos-duration="2000"
          src={bullGroup3}
          className="img-group3"
        />
        <h3>Discover the entire collection on</h3>
      </div>
    </div>
  );
};

export default Collection;
