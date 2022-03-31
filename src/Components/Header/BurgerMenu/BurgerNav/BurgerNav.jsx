import React, {useState} from 'react';
import Submenu from '../Submenu/Submenu';

import style from './BurgerNav.module.css';
import BurgerNavItem from './BurgerNavItem/BurgerNavItem';

let state = {
  accommodation: ['Клиника персонализированной медицины', 'Медицинский центр']
}


const BurgerNav = () => {


    return (
        <nav className={style.burgerNav}>         
          
          <BurgerNavItem mainLink='Размещение' submenu={state.accommodation} />
          <BurgerNavItem mainLink='Медицина' submenu='medicine' />
          <BurgerNavItem mainLink='Мероприятия' submenu='events' />
          <BurgerNavItem mainLink='Красота и восстановление' submenu='beauty' />
          <BurgerNavItem mainLink='Бары и рестораны' submenu='restaurants' />
          <BurgerNavItem mainLink='Развлечения' submenu='entertainment' />
          <BurgerNavItem mainLink='Спорт' submenu='sport' />
          <BurgerNavItem mainLink='Детям' submenu='children' />
          <BurgerNavItem mainLink='Транспорт' submenu='transport' onMouseEnter="true" /> 
         </nav>
    )
}

export default BurgerNav;