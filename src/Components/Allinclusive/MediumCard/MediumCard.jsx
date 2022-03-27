import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MediumCard.module.css';


const MediumCard = (props) => {
    return (
       <div className={style.mediumcard}>
           <img src={props.img} alt="img" />

           <div className={style.textWrapper}>
                <p>{props.text}</p>
                <NavLink to='/' className={style.link}>Читать больше<div></div></NavLink>
           </div>
        
       </div>
    )
}

export default MediumCard;