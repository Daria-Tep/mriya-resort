import React from 'react';
import style from './Navigation.module.css';


const Navigation = (props) => {
    return (
    <nav className={style.menu} style={ {color: `${props.textColor}`} }>
        <div className={style.menuItem}>О комплексе</div>
        <div className={style.menuItem}>Блог</div>
        <div className={style.menuItem}>FAQ</div>
        <div className={style.menuItem}>Контакты</div>
    </nav>
    )
}

export default Navigation;