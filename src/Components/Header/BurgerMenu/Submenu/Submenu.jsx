import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Submenu.module.css';


const Submenu = (props) => {
   

    return (
        <nav className={`${style.submenu} `}>
            <NavLink to='/' className={style.submenuLink}>Клиника персонализированной медицины</NavLink> 
            <NavLink to='/' className={style.submenuLink}>Медицинский центр</NavLink> 
         
            <p>
              Международные стандарты лечения и современные методики
              в сочетании с высококлассным сервисом и проживанием в одном
              из лучших семейных курортов мира Mriya Resort & SPA 5* 
            </p>
        </nav>
    )
}


export default Submenu;