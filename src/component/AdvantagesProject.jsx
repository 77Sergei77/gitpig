import React, { useState } from "react";
import classes from "./css/MyAdvantagesProject.module.css";
import imgPlus from "../img/плюс.png";
import imgPlus2 from "../img/плюс2.png";
import imgMoney from "../img/копилка.png";
import imgWatch from "../img/часы 1.png";
import imgDiorama from "../img/диограмма 1.png";
import imgUp from "../img/выкл.png";
import imgBot from "../img/вкл.png";

const AdvantagesProject = () => {
const [upni, setUpni] = useState  (true);

function topButton () {
    setUpni(!upni)
}


    return (
        <div>
            <div className={upni ? `${classes.card8}` : `${classes.card8_1}`}>

                <div className={classes.cardPlus}>
                    <img src={imgPlus} alt="+" className={classes.imgPlus}/>
                    <h2 className={classes.plus}>Плюсы !</h2>
                    <img src={imgPlus2} alt="+" className={classes.imgPlus} />
                </div>

                <div className={classes.card10}>
                    <p className={classes.plus1}>1  удобное распределение финансов</p>
                </div>

                <div className={classes.card9}>
                    <img src={imgMoney} alt="копилка" className={classes.money} />
                    <img src={imgDiorama} alt="диограмма" className={classes.diograma} />
                    <img src={imgWatch} alt="часы" className={classes.watch} />
                </div>

                <div className={classes.card11}>
                    <p className={classes.plus1}>3  удобная копилка для накоплений</p>
                    <p className={classes.plus1}>2  подходит для всех возрастов</p>
                </div>

            </div>

            <div onClick={topButton} className={upni ? `${classes.yes}` : `${classes.no}`}> <img src = {imgUp} alt = "верх" className={classes.imgUp}/></div>
            <div onClick={topButton} className={upni ? `${classes.no}` : `${classes.yes}`}> <img src={imgBot} alt="вниз" className={classes.imgUp}/> </div>

        </div>
    );
};

export default AdvantagesProject;