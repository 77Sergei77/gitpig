import React from "react";
import classes from "../css/Group.module.css"
import Group3img from "../../img/Group 3.png"

const Group3 = () => {

    return (
        <div className={classes.group1}>
            <p className={classes.text1}>3 Расскройте копилку нажав на кнопку с права.</p>
            <img src={Group3img} alt="картинка прикиньте" className={classes.img1} />
        </div>
    );
};

export default Group3;