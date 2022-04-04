import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './SmallCard.module.css';


const SmallCard = (props) => {
    return (
       <div className={style.smallcard}>
           <img className={style.bigImg} src={props.img} alt="img" />
           <img className={style.miniImg} src={props.imgMini} alt="img" />

           <div className={style.textWrapper}>
                <p>{props.text}</p>
                <NavLink to='/' className={style.link}>Читать больше<div></div></NavLink>
           </div>
        
       </div>
    )
}

export default SmallCard;