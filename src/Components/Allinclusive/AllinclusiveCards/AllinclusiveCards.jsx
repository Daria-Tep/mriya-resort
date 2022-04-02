import React from "react";
import style from "./AllinclusiveCards.module.css";
import bigCardImg from "../../../Images/img/allinclusive-big.jpg";
import smallCardImg from "../../../Images/img/allinclusive-small.jpg";
import mediumCardImg from "../../../Images/img/allinclusive-medium.jpg";
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
            text="Заниматесь в тренажерном зале и посещайте групповые тренировки"
          />

          <div className={style.columnWrapper}>
            <Description
              title={props.title}
              paragraph="Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу"
            />
            <SmallCard
              img={smallCardImg}
              text="Питаться в ресторане шведской линии согласно выбранному варианту"
            />
          </div>

          <MediumCard
            img={mediumCardImg}
            text="Исследовать все общедоступные зоны и территории комплекса"
          />

    </div>
    )
}

export default AllinclusiveCards;