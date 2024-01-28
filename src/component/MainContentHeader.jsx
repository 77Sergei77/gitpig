import React from "react";
import classes from "./css/MyMainContentHeader.module.css"
import imgMain from "../img/картинка фона.png"

const MainContentHeader = () => {
    return (
        <div className={classes.cardMain}>

            <h1 className={classes.titleMain} >Умная копилка</h1>

            <img src={imgMain} alt="Копилка" className={classes.imgMain} />

        </div>
    );
};

export default MainContentHeader;