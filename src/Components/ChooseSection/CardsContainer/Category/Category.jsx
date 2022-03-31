import React from 'react';
import Card from '../Card/Card';
import style from './Category.module.css';

import catCircle from '../../../../Images/png/category-circle.png';
import catImg1 from '../../../../Images/img/category1.jpg';
import catImg2 from '../../../../Images/img/category2.jpg';
import catImg3 from '../../../../Images/img/category3.jpg';
import catImg4 from '../../../../Images/img/category4.jpg';

const Category = (props) => {

    return (
       <div className={style.wrapper}>
            <Card img={catImg1} discount='' circle={catCircle} text={'Семейный отдых'} />
            <Card img={catImg2} discount='' circle={catCircle} text={'Оздоровление'}  />
            <Card img={catImg3} discount='' circle={catCircle} text={'Релакс и красота'}  />
            <Card img={catImg4} discount='' circle={catCircle} text={'Новые впечатления'}  />
       </div>
    )
  
}

export default Category;