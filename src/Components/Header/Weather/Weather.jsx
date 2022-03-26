import React from 'react';
import style from './Weather.module.css';


const Weather = () => {
    return (
        <div className={style.weather} >
           
          
          <div className={style.item}>
             <span className={style.temp}>27°</span>
             <span className={style.sky}>Облачно</span>
             <span className={style.place}>Ялта, Россия</span>
          </div>
          
        </div>
    )
}

export default Weather;