import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MediumCard.module.css';


const MediumCard = (props) => {
    return (
       <div className={style.mediumcard}>
           <img className={style.bigImg} src={props.img} alt="img" />
           <img className={style.miniImg} src={props.imgMini} alt="img" />

           <div className={style.textWrapper}>
                <p>{props.text}</p>
                <NavLink to='/' className={style.link}>Читать больше<div></div></NavLink>
           </div>
        
       </div>
    )
}

export default MediumCard;