import React from 'react';
import style from './Allinclusive.module.css';
import Description from './Description/Description';
import BigCard from './BigCard/BigCard';
import SmallCard from './SmallCard/SmallCard';

import bigCardImg from '../../Images/img/allinclusive-big.jpg';
import smallCardImg from '../../Images/img/allinclusive-small.jpg';
import mediumCardImg from '../../Images/img/allinclusive-medium.jpg';

import marbleLeft from '../../Images/svg/marble-l.svg';
import marbleRight from '../../Images/svg/marble-r.svg';
import MediumCard from './MediumCard/MediumCard';



const Allinclusive = () => {
    return (
        <div className={style.allinclusive}>
           <div className={style.wrapper}>

               <div className={style.titleBtnWrapper}>
                <h2>Все включено</h2>
                <div className={style.btnWrapper}>
                    <div className={style.leftBtn}>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.3625 7.72816L0.2625 2.4466C0.0875 2.26537 0 2.04531 0 1.78641C0 1.52751 0.0875 1.30744 0.2625 1.12621L1.125 0.271845C1.3 0.0906149 1.5125 0 1.7625 0C2.0125 0 2.225 0.0906149 2.4 0.271845L6 4L9.6 0.271845C9.775 0.0906149 9.9875 0 10.2375 0C10.4875 0 10.7 0.0906149 10.875 0.271845L11.7375 1.12621C11.9125 1.30744 12 1.52751 12 1.78641C12 2.04531 11.9125 2.26537 11.7375 2.4466L6.6375 7.72816C6.4625 7.90939 6.25 8 6 8C5.75 8 5.5375 7.90939 5.3625 7.72816Z" fill="#ffffff"/>
                            </svg>
                    </div>
                    <div className={style.rightBtn}>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.3625 7.72816L0.2625 2.4466C0.0875 2.26537 0 2.04531 0 1.78641C0 1.52751 0.0875 1.30744 0.2625 1.12621L1.125 0.271845C1.3 0.0906149 1.5125 0 1.7625 0C2.0125 0 2.225 0.0906149 2.4 0.271845L6 4L9.6 0.271845C9.775 0.0906149 9.9875 0 10.2375 0C10.4875 0 10.7 0.0906149 10.875 0.271845L11.7375 1.12621C11.9125 1.30744 12 1.52751 12 1.78641C12 2.04531 11.9125 2.26537 11.7375 2.4466L6.6375 7.72816C6.4625 7.90939 6.25 8 6 8C5.75 8 5.5375 7.90939 5.3625 7.72816Z" fill="#ffffff"/>
                            </svg>
                    </div>
                </div>
               </div>
              
               
               <div className={style.cardsWrapper}>
                 <BigCard img={bigCardImg} text='Заниматесь в тренажерном зале и посещайте групповые тренировки' />
                 
                 <div className={style.columnWrapper}>
                    <Description title='Оздоровление' paragraph='Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу' />
                    <SmallCard img={smallCardImg} text='Питаться в ресторане шведской линии согласно выбранному варианту' />
                 </div>
                 
                 <MediumCard img ={mediumCardImg} text='Исследовать все общедоступные зоны и территории комплекса' />
              </div>

              <img className={style.marbleLeft} src={marbleLeft} alt="marble" />
              <img className={style.marbleRight} src={marbleRight} alt="marble" />
           </div>
        </div>
    )
}


export default Allinclusive;