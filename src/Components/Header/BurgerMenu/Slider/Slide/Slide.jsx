import React from 'react';
import style from './Slide.module.css';

import circle from '../../../../../Images/png/slide-circle.png';

const Slide = (props) => {
    return (
        <div className={style.slide}>
           <img className={style.slideImg} src={props.img} alt='slide' />
           
           <img className={style.circle} src={circle} alt="circle" />

           <div className={style.wrapper}>
               <h3>{props.title}</h3>
               <span>{props.text}</span>

               <button className={style.slideBtn}>Подробнее</button>
           </div>

           
        </div>
    )
}

export default Slide;