import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from '../../Submenu/Submenu';


import style from './BurgerNavItem.module.css';


const BurgerNavItem = (props) => {
    
    return (
        <div>
        <NavLink to='/' className={style.navItem}  >
           <span>{props.mainLink} </span>
                 
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875005 1.52751 -6.67695e-08 1.78641 -7.80864e-08C2.04531 -8.94032e-08 2.26537 0.0875005 2.4466 0.2625L7.72816 5.3625C7.90938 5.5375 8 5.75 8 6C8 6.25 7.90938 6.4625 7.72816 6.6375Z" fill="white" fill-opacity="0.24"/>
            </svg> 
        </NavLink>
        </div>
    )
}

export default BurgerNavItem;