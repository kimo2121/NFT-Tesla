import React, { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import { data } from "./data";
import "./Questions.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Questions: React.FC = () => {
  const [state1, setstate1] = useState<any>(10);

  useEffect(() => {
    AOS.init({
      duration: 1400,
    });
  }, []);

  const showHiddenP = (indx: number) => {
    if (state1 === indx) {
      setstate1(undefined);
    } else {
      setstate1(indx);
    }
  };
  console.log(state1);
  const plusMinusAnimation = (index: number) => {
    return (
      <div
        id="questions"
        className={
          state1 === index ? "circle-plus opened" : "circle-plus closed"
        }
      >
        <div className="circle">
          <div className="horizontal"></div>
          <div className="vertical"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="questions-container">
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
            QU
            <br />
            ES
            <br />
            TIO
            <br />
            NS
          </h2>
        </div>
      ) : (
        <div className="sec-title">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            QuestionS
          </h2>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          ></span>
        </div>
      )}
      <div className="questions">
        {data.map((item, index) => (
          <div key={index}>
            <div
              style={{ width: "auto" }}
              data-aos={item.aos}
              data-aos-duration={item.aosDuration}
            >
              <Typography
                onClickFun={() => showHiddenP(index)}
                className={
                  state1 === index ? "each-question clicked" : "each-question"
                }
              >
                {item.text}
                {plusMinusAnimation(index)}
              </Typography>
            </div>

            <Typography
              className={
                state1 === index ? "each-answer active" : "each-answer"
              }
            >
              {item?.span}
              {item.ul1 && (
                <ul>
                  <li>{item?.ul1}</li>
                  <li>
                    {item?.ul2}
                    <span style={{ display: "block" }}>{item.li1}</span>
                    <span style={{ display: "block" }}>{item.li2}</span>
                  </li>
                </ul>
              )}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
