import React from 'react';
import style from './Card.module.css';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <div className={style.wrapper} style={ {backgroundImage: `url(${props.img})`} }>
            
          <img className={style.circle} src={props.circle} alt="circle" />

          <div className={style.textContainer}>
            <span className={style.discount}>{props.discount}</span>
            <span className={style.text}>{props.text}</span>
          </div>
        </div>
    )
}


export default Card;