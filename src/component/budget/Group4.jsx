import React from "react";
import classes from "../css/Group.module.css"
import Group4img from "../../img/Group 4.png"

const Group4 = () => {

    return (
        <div className={classes.group2}>
            <p className={classes.text1}>4 В открывшемся меню выбераем суму каторой соответствует цели вашего накопления и  выделяем его.
                “Например моя цель смартфон стоимостью 15 000 руб.”
          </p>
            <img src={Group4img} alt="картинка прикиньте" className={classes.img2} />
        </div>
    );
};

export default Group4;