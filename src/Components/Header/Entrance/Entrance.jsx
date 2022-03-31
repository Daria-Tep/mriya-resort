import React from 'react';
import style from './Entrance.module.css';


const Entrance = () => {
    return (
        <div className={style.entrance}>
            <svg className={style.keyIcon} width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.87398 5C7.42994 6.72523 5.86384 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C5.86384 0 7.42994 1.27477 7.87398 3H11V1H14V3H15V5L7.87398 5ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
            </svg>
            <span>Вход</span>
        </div>
    )
}

export default Entrance;