import React from "react";
import classes from "../css/MyPiggyBankSection.module.css"
import imgPlan from "../../img/план.png"

const PiggyBankSection = () => {
    return (
        <div className={classes.card}>
            <h1 className={classes.title} >Раздел копилка</h1>
            <ul className={classes.ull}>
                <li>Ставьте новые идеи.</li>
                <li>Визуализируйте свои накопления.</li>
                <li>Определяйте свои достижения.</li>
            </ul>
            <img src={imgPlan} className={classes.imgPlan}/>
        </div>
    );
};

export default PiggyBankSection;