import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './BigCard.module.css';


const BigCard = (props) => {
    return (
       <div className={style.bigcard}>
           <img src={props.img} alt="img" />

           <div className={style.textWrapper}>
                <p>{props.text}</p>
                <NavLink to='/' className={style.link}>Читать больше<div></div></NavLink>
           </div>
        
       </div>
    )
}

export default BigCard;