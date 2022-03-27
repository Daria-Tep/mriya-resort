import React from 'react';
import style from './Description.module.css';


const Description = (props) => {
    return (
        <div className={style.description}>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
}


export default Description;