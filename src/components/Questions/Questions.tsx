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
      <div className="sec-title">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          FAQ
        </h2>
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        ></span>
      </div>
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
              {index === 3 && <a href="https://discord.gg/AcXyqrEj">Discord</a>}
              .
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
