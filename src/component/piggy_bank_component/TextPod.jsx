import React from "react";
import classes from "../css/CoppyFunction.module.css"

const TextPod = () => {

    return (
        <div className={classes.text_pod}>
            <p>
                1 ставите цель
            </p>

            <p>
                2 выбираете и выделяете сумму
            </p>

            <p>
                3 по мере ваших откладываний заполняете сумму вклада
            </p>

            <p className={classes.border_text}>
                4 подробно в инструкции...
            </p>
        </div>
    );
};
export default TextPod;