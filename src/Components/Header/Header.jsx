import React, { useCallback } from 'react';
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
             <Navigation textColor='#3D3C3C' />
              
              <div className={style.logo}>
                 <Logo />
              </div>
              
              <div className={style.langs}>
                  <span className={`${style.langsItem} ${style.active}`}>RU</span>
                  <span className={style.langsItem}>ENG</span>
              </div>

              <Entrance />

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