import React from "react";
import style from "./AllinclusiveCards.module.css";
import bigCardImg from "../../../Images/png/allinclusive-big.png";
import bigCardImgMini from "../../../Images/png/allinclusive-big-mini.png";
import smallCardImg from "../../../Images/png/allinclusive-small.png";
import smallCardImgMini from "../../../Images/png/allinclusive-small-mini.png";
import mediumCardImg from "../../../Images/img/allinclusive-medium.jpg";
import mediumCardImgMini from "../../../Images/png/allinclusive-medium-mini.png";
import Description from "../Description/Description";
import SmallCard from './../SmallCard/SmallCard';
import MediumCard from './../MediumCard/MediumCard';
import BigCard from './../BigCard/BigCard';


const AllinclusiveCards = (props) => {

  let classAnimate = props.classAnimate;
  

  return (
        <div className={ `${style.cardsWrapper} ${style[classAnimate]}` }>
        <BigCard 
            img={bigCardImg}
            imgMini={bigCardImgMini}
            text={props.paragraph}
          />

          <div className={style.columnWrapper}>
            <Description
              title={props.title}
              paragraph="Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу"
            />
            <SmallCard
              img={smallCardImg}
              imgMini={smallCardImgMini}
              text="Питаться в ресторане шведской линии согласно выбранному варианту"
            />
          </div>

          <MediumCard
            img={mediumCardImg}
            imgMini={mediumCardImgMini}
            text="Исследовать все общедоступные зоны и территории комплекса"
          />

    </div>
    )
}

export default AllinclusiveCards;