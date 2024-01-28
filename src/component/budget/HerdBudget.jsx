import React from "react";
import HeardImg from "../../img/инструкция.jpg"
import classes from "../css/HeredBudget.module.css"
const HerdBudget = () => {

    return (
        <div className={classes.cardh}>
            <h1 className={classes.title}>Инструкция</h1>
            <img src={HeardImg} alt=" картинка" className={classes.himg} />
        </div>

    );
};

export default HerdBudget;