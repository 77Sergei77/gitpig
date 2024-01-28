import React from "react";
import classes from "../css/Group.module.css"
import Group2img from "../../img/Group 2.png"

const Group2 = () => {

    return (
        <div className={classes.group1}>
            <p className={classes.text1}>2 Запишите название своей цели.</p>
            <img src={Group2img} alt="картинка прикиньте" className={classes.img1} />
        </div>
    );
};

export default Group2;