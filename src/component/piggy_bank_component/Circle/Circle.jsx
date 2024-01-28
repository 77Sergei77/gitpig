import React from "react";
import classes from "../../css/Circle.module.css"
import imgGal from "../../../img/Galochka.png"

const Circle = ({ count, isCount, fill }) => {

    return (
        <div className={isCount ? `${classes.circle}` : `${classes.fill}`}>
            <h1 className={classes.text}>
                <div className={classes.card1}>
                    {fill ? null : <img src={imgGal} alt="Galochka" className={classes.cardDel} />}
                    {isCount ? <div className={fill ? {count} : count = null}>
                        {count}
                    </div> : <div className={classes.card}>
                        {count}
                    </div>}
                </div>

            </h1>
        </div>

    );
};

export default Circle;

