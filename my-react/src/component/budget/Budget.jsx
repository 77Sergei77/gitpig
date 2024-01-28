import React from "react";
import { Link } from 'react-router-dom';
import classes from "../css/MyHome.module.css";
import Seif from "./Seif";


const Budget = () => {
    return (
        <>
            <div className={classes.cardHeard}>

                <div>
                    <Link to="/" className={classes.text}>Главная</Link>
                </div>

                <div>
                    <Link to="/pigg" className={classes.text}>Копилка</Link>
                </div>

                <div>
                    <Link to="/budget" className={classes.text}>Инструкция</Link>
                </div>

            

            </div>

            <h1>Buget</h1>
        </>
    )
}

export default Budget;