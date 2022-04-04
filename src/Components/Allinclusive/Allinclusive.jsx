import React, { useState } from "react";
import style from "./Allinclusive.module.css";

import marbleLeft from "../../Images/svg/marble-l.svg";
import marbleRight from "../../Images/svg/marble-r.svg";
import cloudLeft from '../../Images/png/cloud-l-mini.png';
import AllinclusiveCards from "./AllinclusiveCards/AllinclusiveCards";

const Allinclusive = () => {
  const [slide, setSlide] = useState(0);
  
  let slides = [
    <AllinclusiveCards title="Оздоровление" paragraph="Заниматесь в тренажерном зале и посещайте групповые тренировки" classAnimate='animate' />,
    <AllinclusiveCards title="второй" paragraph="ТЕКСТ 2" classAnimate='animate' />,
    <AllinclusiveCards title="третий" paragraph="ТЕКСТ 3"  />,
  ];

  const numberOfSlides = slides.length-1;

  let changeSlide = (numberOfSlides, direction) => {
    if (direction === "left" && slide < numberOfSlides) {
      setSlide((slide) => slide + 1);
    } else if (direction === "right" && slide > 0) {
      setSlide((slide) => slide - 1);
    } else if (direction === "right" && slide === 0) {
      setSlide((slide) => (slide = numberOfSlides));
    } else {
      setSlide((slide) => (slide = 0));
    }
  };



  return (
    <div className={style.allinclusive}>
      <div className={style.wrapper}>
        <div className={style.titleBtnWrapper}>
          <h2>Все включено</h2>
          <div className={style.btnWrapper}>
            <div
              className={style.leftBtn}
              onClick={() => {
                changeSlide(numberOfSlides, "left");
              }}
            >
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3625 7.72816L0.2625 2.4466C0.0875 2.26537 0 2.04531 0 1.78641C0 1.52751 0.0875 1.30744 0.2625 1.12621L1.125 0.271845C1.3 0.0906149 1.5125 0 1.7625 0C2.0125 0 2.225 0.0906149 2.4 0.271845L6 4L9.6 0.271845C9.775 0.0906149 9.9875 0 10.2375 0C10.4875 0 10.7 0.0906149 10.875 0.271845L11.7375 1.12621C11.9125 1.30744 12 1.52751 12 1.78641C12 2.04531 11.9125 2.26537 11.7375 2.4466L6.6375 7.72816C6.4625 7.90939 6.25 8 6 8C5.75 8 5.5375 7.90939 5.3625 7.72816Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div
              className={style.rightBtn}
              onClick={() => {
                changeSlide(numberOfSlides, "right");
              }}
            >
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.3625 7.72816L0.2625 2.4466C0.0875 2.26537 0 2.04531 0 1.78641C0 1.52751 0.0875 1.30744 0.2625 1.12621L1.125 0.271845C1.3 0.0906149 1.5125 0 1.7625 0C2.0125 0 2.225 0.0906149 2.4 0.271845L6 4L9.6 0.271845C9.775 0.0906149 9.9875 0 10.2375 0C10.4875 0 10.7 0.0906149 10.875 0.271845L11.7375 1.12621C11.9125 1.30744 12 1.52751 12 1.78641C12 2.04531 11.9125 2.26537 11.7375 2.4466L6.6375 7.72816C6.4625 7.90939 6.25 8 6 8C5.75 8 5.5375 7.90939 5.3625 7.72816Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={style.cardsWrapper}>{slides[slide]}</div>

        <img className={style.marbleLeft} src={marbleLeft} alt="marble" />
        <img className={style.marbleRight} src={marbleRight} alt="marble" />
     
      </div>
      <img className={style.cloud} src={cloudLeft} alt="cloud" />
    </div>
  );
};

export default Allinclusive;
