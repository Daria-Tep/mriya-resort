import React from 'react';
import style from './Header.module.css';
import logo from '../../Images/svg/logo.svg';
import keyIcon from '../../Images/svg/key.svg';
import flowerGif from '../../Images/gif/flower.gif';
import flowerStroke from '../../Images/svg/flower_stroke.svg';
import intersectStroke from '../../Images/svg/intersect_stroke.svg';


import Weather from './Weather/Weather';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Navigation from './Navigation/Navigation';

import { useState } from 'react';
import Logo from './Logo/Logo';
import Entrance from './Entrance/Entrance';


const Header = (props) => {

  const [open, setOpen] = useState(false);
  
    return (
        <div className={style.header} >
          <div className={`${style.burgerIcon} ${open ? style.right : style.left}`} onClick={() => { setOpen(!open) } } >
              <div className={`${style.burgerItem} ${open ? style.right : style.left}`}></div>
          </div>

          {open ? <BurgerMenu isOpen={true} /> : <BurgerMenu isOpen={false} />}  

          <div className={style.headerWrapper}>

            <div className={style.navWrapper}>
                <Navigation textColor='#3D3C3C' />
            </div>
             
              
              <div className={style.logo}>
                 <Logo />
              </div>
              
              <div className={style.langs}>
                  <span className={`${style.langsItem} ${style.active}`}>RU</span>
                  <span className={style.langsItem}>ENG</span>
              </div>

              <div className={style.entrance}>
              <Entrance />
              </div>
              
              <div className={style.entranceMini}>
                <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.87398 5C7.42994 6.72523 5.86384 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C5.86384 0 7.42994 1.27477 7.87398 3H11V1H14V3H15V5L7.87398 5ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
                </svg>
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