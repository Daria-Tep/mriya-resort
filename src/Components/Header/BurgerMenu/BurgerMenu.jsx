import React from 'react';
import style from './BurgerMenu.module.css';

import Navigation from '../Navigation/Navigation';
import Logo from './../Logo/Logo';
import Entrance from '../Entrance/Entrance';
import BurgerNav from './BurgerNav/BurgerNav';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu/Submenu';
import Slider from './Slider/Slider';



const BurgerMenu = (props) => {

  return (
      <div className={`${style.burgerMenu}  ${props.isOpen ? style.show : style.close}` }>
          
          <div className={style.burgerHeader}>
            <div className={style.logoBurger}>
              <Logo />
            </div>
            
            <div className={style.nav}>
              <Navigation textColor='#ffffff' />
            </div>
            
            <div className={style.entrance}>
               <Entrance />
            </div>
            
          </div>
          
         <div className={style.burgerMain}>
           <div className={style.social}>
               <div className={style.socialWrapper}>
               <NavLink to="/" className={style.socialItem}>
                    <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.6688 10H7V18H3V10H0V7H3V4.53906C3 3.60156 3 2.5 4 1.5C5 0.5 6.37591 0 8.18796 0C10
                     0 11.5 0.5 11.5 0.5L10 3.5C10 3.5 8 3 7.5 3.5C7 4 7 4.26562 7 4.75781V7H10.5L9.6688 10Z" fill="#D9C287"/>
                    <path d="M9.6688 10H7V18H3V10H0V7H3V4.53906C3 3.60156 3 2.5 4 1.5C5 0.5 6.37591 0
                     8.18796 0C10 0 11.5 0.5 11.5 0.5L10 3.5C10 3.5 8 3 7.5 3.5C7 4 7 4.26562 7 4.75781V7H10.5L9.6688 10Z" fill="#D9C287"/>
                    </svg>
                  </NavLink>
                  
                  <NavLink to="/" className={style.socialItem}>
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1367 3.8125C16.1602 3.90385 16.1719 4.05228 16.1719 4.25781C16.1719 5.46815 15.9375
                     6.67849 15.4688 7.88882C15 9.07632 14.332 10.1725 13.4648 11.1773C12.6211 12.1593 11.5195 12.9585
                     10.1602 13.5751C8.80078 14.1917 7.30078 14.5 5.66016 14.5C3.59766 14.5 1.71094 13.9633 0
                     12.89C0.257812 12.9129 0.550781 12.9243 0.878906 12.9243C2.58984 12.9243 4.125 12.4105 5.48438
                     11.3828C4.66406 11.3828 3.9375 11.1544 3.30469 10.6977C2.69531 10.2181 2.27344 9.6244 2.03906
                     8.91647C2.27344 8.9393 2.49609 8.95072 2.70703 8.95072C3.03516 8.95072 3.36328 8.91647 3.69141
                     8.84796C3.12891 8.73377 2.625 8.50541 2.17969 8.16286C1.73438 7.82031 1.38281 7.40926 1.125
                     6.92969C0.867187 6.42728 0.738281 5.89062 0.738281 5.31971V5.2512C1.25391 5.54808 1.80469
                     5.70793 2.39062 5.73077C1.28906 5 0.738281 3.99519 0.738281 2.71635C0.738281 2.07692 0.914062
                     1.47175 1.26562 0.900841C2.17969 2.01983 3.29297 2.91046 4.60547 3.57272C5.94141 4.23498
                     7.35938 4.60036 8.85938 4.66887C8.8125 4.39483 8.78906 4.12079 8.78906 3.84675C8.78906
                     2.86478 9.14062 2.01983 9.84375 1.3119C10.5703 0.603966 11.4375 0.25 12.4453 0.25C13.5234
                     0.25 14.4258 0.626803 15.1523 1.38041C15.9961 1.22055 16.7812 0.935096 17.5078 0.524038C17.2266
                     1.36899 16.6875 2.03125 15.8906 2.51082C16.5938 2.41947 17.2969 2.22536 18 1.92849C17.4844
                     2.65925 16.8633 3.28726 16.1367 3.8125Z" fill="#D9C287"/>
                    </svg>
                  </NavLink>
                  
                  <NavLink to="/" className={style.socialItem}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9598 5.30357C17.9866 6.02679 18 7.25893 18 9C18 10.7411 17.9866 11.9732 17.9598
                     12.6964C17.8795 14.3304 17.3839 15.6027 16.4732 16.5134C15.5893 17.3973 14.3304 17.8661 12.6964
                     17.9196C11.9732 17.9732 10.7411 18 9 18C7.25893 18 6.02679 17.9732 5.30357 17.9196C3.66964
                      17.8393 2.41071 17.3571 1.52679 16.4732C1.17857 16.1518 0.897321 15.7768 0.683036 15.3482C0.46875
                      14.9196 0.308036 14.5045 0.200893 14.1027C0.120536 13.7009 0.0803571 13.2321 0.0803571
                      12.6964C0.0267857 11.9732 0 10.7411 0 9C0 7.25893 0.0267857 6.01339 0.0803571 5.26339C0.160714
                      3.65625 0.642857 2.41071 1.52679 1.52679C2.41071 0.616072 3.66964 0.120536 5.30357 0.0401786C6.02679
                      0.0133929 7.25893 0 9 0C10.7411 0 11.9732 0.0133929 12.6964 0.0401786C14.3304 0.120536 15.5893
                      0.616072 16.4732 1.52679C17.3839 2.41071 17.8795 3.66964 17.9598 5.30357ZM15.6384 14.3036C15.7187
                      14.0893 15.7857 13.8214 15.8393 13.5C15.8929 13.1518 15.933 12.75 15.9598 12.2946C15.9866 11.8125
                      16 11.4241 16 11.1295C16 10.8348 16 10.4196 16 9.88393C16 9.34822 16 9.05357 16 9C16 8.91964 16
                      8.625 16 8.11607C16 7.58036 16 7.16518 16 6.87054C16 6.57589 15.9866 6.20089 15.9598 5.74554C15.933
                      5.26339 15.8929 4.86161 15.8393 4.54018C15.7857 4.19196 15.7187 3.91071 15.6384 3.69643C15.317 2.86607
                      15.1339 2.68304 14.3036 2.36161C14.0893 2.28125 13.808 2.21429 13.4598 2.16071C13.1384 2.10714
                      12.7366 2.06696 12.2545 2.04018C11.7991 2.01339 11.4241 2 11.1295 2C10.8616 2 10.4464 2 9.88393
                      2C9.34822 2 9.05357 2 9 2C8.94643 2 8.65179 2 8.11607 2C7.58036 2 7.16518 2 6.87054 2C6.57589
                      2 6.1875 2.01339 5.70536 2.04018C5.25 2.06696 4.84821 2.10714 4.5 2.16071C4.17857 2.21429 3.91071
                      2.28125 3.69643 2.36161C2.86607 2.68304 2.68304 2.86607 2.36161 3.69643C2.28125 3.91071 2.21429
                      4.19196 2.16071 4.54018C2.10714 4.86161 2.06696 5.26339 2.04018 5.74554C2.01339 6.20089 2 6.57589
                      2 6.87054C2 7.13839 2 7.55357 2 8.11607C2 8.65179 2 8.94643 2 9C2 9.10714 2 9.36161 2 9.76339C2
                      10.1384 2 10.4598 2 10.7277C2 10.9688 2 11.2902 2 11.692C2.02679 12.0938 2.05357 12.442 2.08036
                      12.7366C2.10714 13.0045 2.14732 13.2857 2.20089 13.5804C2.25446 13.875 2.30804 14.1161 2.36161
                      14.3036C2.70982 15.1339 2.89286 15.317 3.69643 15.6384C3.91071 15.7187 4.17857 15.7857 4.5 15.8393C4.84821
                      15.8929 5.25 15.933 5.70536 15.9598C6.1875 15.9866 6.5625 16 6.83036 16C7.125 16 7.54018 16 8.07589
                      16C8.63839 16 8.94643 16 9 16C9.08036 16 9.375 16 9.88393 16C10.4196 16 10.8348 16 11.1295 16C11.4241
                      16 11.7991 15.9866 12.2545 15.9598C12.7366 15.933 13.1384 15.8929 13.4598 15.8393C13.808 15.7857 14.0893
                      15.7187 14.3036 15.6384C15.1339 15.2902 15.317 15.1071 15.6384 14.3036Z" fill="#D9C287"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569
                     6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12ZM9 14C11.7614 14 14 11.7614 14 9C14 6.23858
                      11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14Z" fill="#D9C287"/>
                    <path d="M15 4C15 4.55228 14.5523 5 14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3C14.5523
                     3 15 3.44772 15 4Z" fill="#D9C287"/>
                    </svg>
                  </NavLink>
               </div>              
           </div>

           <div className={style.category}>
             <BurgerNav />
           </div>
            

            <div className={style.submenu}>
              <Submenu />
            </div>

           <div className={style.slider}>
             <Slider />
           </div>
         </div>
         

         <div className={style.burgerFooter}>
           <a href="#">info@mriyaresort.com</a>
         </div>
          
      </div>
  )
}


export default BurgerMenu;