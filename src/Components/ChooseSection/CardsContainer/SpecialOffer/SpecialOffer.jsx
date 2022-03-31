import React from 'react';
import Card from '../Card/Card';
import style from './SpecialOffer.module.css';

import specImg1 from '../../../../Images/img/spec-1.jpg';
import specImg2 from '../../../../Images/img/spec-2.jpg';
import specCircle from '../../../../Images/png/circle.png';

const SpecialOffer = (props) => {
    return (
       <div className={style.wrapper}>
            <Card img={specImg1} discount='-20%' circle={specCircle} text={'Для тех кто рядом'} />
            <Card img={specImg2} discount='-10%' circle={specCircle} text={'Раннее бронирование'} />
       </div>
    )
  
}

export default SpecialOffer;