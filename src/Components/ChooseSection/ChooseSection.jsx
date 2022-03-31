import React from "react";
import { NavLink } from "react-router-dom";
import CardsContainer from "./CardsContainer/CardsContainer";
import style from "./ChooseSection.module.css";

const ChooseSection = () => {

  return (
    <div className={style.chooseSection}>
      <div className={style.wrapper}>
        <h2>Выберите свой отдых</h2>

        <div className={style.inputsWrapper}>
          <select className={style.select}>
            <option>Семейный отдых</option>
            <option>Один</option>
          </select>

          <input type="date" />

          <div className={style.total}>
            <div className={style.totalItems}>
              <span>2 взрослых</span>
              <span>•</span>
              <span>без детей</span>
              <span>•</span>
              <span>1 номер</span>
            </div>
            <div className={style.totalIcon}></div>
          </div>

          <button className={style.search}>Найти</button>
        </div>

        <div className={style.variants}>
          <div className={style.menuContainer}>
            <div className={style.menu}>
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? style.active : style.item
                }
              >
                <div>Спецпредложения</div>
              </NavLink>
              <NavLink
                to="/afisha"
                className={(navData) =>
                  navData.isActive ? style.active : style.item
                }
              >
                <div>Афиша</div>
              </NavLink>
              <NavLink
                to="/category"
                className={(navData) =>
                  navData.isActive ? style.active : style.item
                }
              >
                <div>Категории отдыха</div>
              </NavLink>
            </div>

            
          </div>

          <CardsContainer  />
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
