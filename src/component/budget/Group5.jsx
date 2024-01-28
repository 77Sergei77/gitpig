import React from "react";
import classes from "../css/Group.module.css"
import Group5img from "../../img/Group 5.png"

const Group5 = () => {

    return (
        <div className={classes.group2}>

            <p className={classes.text1}>5 Далее вносим начальную сумму каторую имеем на данный момент.
                “Например 5000 руб.” Для этого заполняем карточки до 5000 рублей.</p>

            <img src={Group5img} alt="картинка прикиньте" className={classes.img2} />
        </div>
    );
};

export default Group5;