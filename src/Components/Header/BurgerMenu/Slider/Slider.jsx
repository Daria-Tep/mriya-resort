import React, {useState, useEffect} from 'react';
import style from './Slider.module.css';
import slideImg1 from '../../../../Images/img/slide1.jpg'
import slideImg2 from '../../../../Images/img/slide2.jpg'
import slideImg3 from '../../../../Images/img/slide3.jpg'

import Slide from './Slide/Slide';


const Slider = () => {
  let slidesArr = [
    <Slide img={slideImg1} title='Антистресс' text='10-21 дня' />,
    <Slide img={slideImg2} title='Тест1' text='ваш текст' />,
    <Slide img={slideImg3} title='Тест2' text='любой текст' />,
  ]

  let [count, setCount] = useState(0);


  useEffect(() => { 
    // Запускаем интервал
    const interval = setInterval(() => {
        // Меняем состояние
        setCount((count) => {
          const result = count === slidesArr.length-1 ? 0 : count+1; 
          return result;
        })

    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
}, [])



    return (
        <div className={style.slider}>
           {slidesArr[count]}
     
           <div className={style.switchesWrapper}>
               <div onClick={() => { setCount((count) => count = 0) } } className={`${style.switch} ${count === 0 ? style.active : style.no}`}></div>
               <div onClick={() => { setCount((count) => count = 1) } } className={`${style.switch} ${count === 1 ? style.active : style.no}`}></div>
               <div onClick={() => { setCount((count) => count = 2) } } className={`${style.switch} ${count === 2 ? style.active : style.no}`}></div>
           </div>
        </div>
    )
}

export default Slider;