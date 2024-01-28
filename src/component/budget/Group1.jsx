import React from "react";
import classes from "../css/Group.module.css"
import Group1img from "../../img/Group 1.png"

const Group1 = () =>{

    return (
        <div className={classes.group1}>
            <p className={classes.text1}>1 Выберете деопозон своих накоплений.</p>
            <img src={Group1img} alt="картинка прикиньте" className={classes.img1}/>
        </div>
    );
};

export default Group1;