import React from 'react';
import style from './AboutComplex.module.css';
import { NavLink } from 'react-router-dom';


const AboutComplex = () => {
    return (
        <div className={style.aboutComplex}>
            <div className={style.wrapper}>
                <h2>
                  Mriya Resort & SPA — <span>больше чем просто отдых</span>
                </h2>

                <img className={style.icon} src='../../Image/svg/about-flower.svg' alt="flower" />
            </div>
        </div>
    )
}

export default AboutComplex;