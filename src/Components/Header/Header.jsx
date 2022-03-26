import React from 'react';
import style from './Header.module.css';
import logo from '../../Images/svg/logo.svg';
import keyIcon from '../../Images/svg/key.svg';
import flowerGif from '../../Images/gif/flower.gif';
import flowerStroke from '../../Images/svg/flower_stroke.svg';
import intersectStroke from '../../Images/svg/intersect_stroke.svg';
import Weather from './Weather/Weather';

const Header = () => {
    return (
        <div className={style.header} >
          <div className={style.burgerIcon}>
              <div className={style.burgerItem}></div>
          </div>

          <div className={style.headerWrapper}>
              <div className={style.menu}>
                  <div className={style.menuItem}>О комплексе</div>
                  <div className={style.menuItem}>Блог</div>
                  <div className={style.menuItem}>FAQ</div>
                  <div className={style.menuItem}>Контакты</div>
              </div>
              
              <div className={style.logo}>
                 <img src={logo} alt="logo" />
              </div>
              
              <div className={style.langs}>
                  <span className={`${style.langsItem} ${style.active}`}>RU</span>
                  <span className={style.langsItem}>ENG</span>
              </div>

              <div className={style.entrance}>
                  <img className={style.keyIcon} src={keyIcon} alt="key" />
                  <span>Вход</span>
              </div>

              <span className={style.phone}>8 800 500 6847</span>
          </div>

         
          <div className={style.flower}>
            <img className={style.flowerGif} src={flowerGif} alt="loading..." /> 
            <img className={style.flowerStroke} src={flowerStroke} alt="flower" /> 
            
            <div className={style.weatherWrapper}>
              <img className={style.intersectStroke} src={intersectStroke} alt="intersect" />
              
              <div className={style.weatherInfo}>
                <Weather />
              </div>
             
            </div>
          </div>
          
        </div>
    )
}

export default Header;