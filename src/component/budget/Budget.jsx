import React from "react";
import { Link } from 'react-router-dom';
import classes from "../css/MyHome.module.css";
import classes2 from "../css/MyMainHeader.module.css";
import piggyImg from "../../img/piggy.png"
import HerdBudget from "./HerdBudget";
import Group1 from "./Group1";
import Group2 from "./Group2";
import Group3 from "./Group3";
import Group4 from "./Group4";
import Group5 from "./Group5";


const Budget = () => {
    return (
        <>
            <header className={classes2.header} >
                <div className={classes2.img1}>
                    <img src={piggyImg} alt="иконка" className={classes2.cardIcone} />
                </div>

                <div className={classes2.cardText}>
                    <p className={classes2.p}>piggy bank</p>
                </div>

                <div className={classes.card2}>
                    <div className={classes.cardHeard}>

                        <div className={classes.cardd}>
                            <Link to="/" className={classes.text}>Главная</Link>
                        </div>

                        <div className={classes.cardd}>
                            <Link to="/pigg" className={classes.text}>Копилка</Link>
                        </div>

                        <div className={classes.cardd}>
                            <Link to="/budget" className={classes.text}>Инструкция</Link>
                        </div>

                    </div>
                </div>
            </header>
            <HerdBudget/>

            <Group1/>
            <Group2/>
            <Group3/>
            <Group4/>
            <Group5/>
        </>
    )
}

export default Budget;