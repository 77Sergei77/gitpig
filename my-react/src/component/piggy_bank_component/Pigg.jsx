import React from "react";
import { Link } from 'react-router-dom';
import classes from "../css/MyHome.module.css";
import PiggyBankSection from "./PiggyBankSection";
import CopyyFunction from "./CopyFunction";
import CopyyFunction2 from "./CopyFunction2";
import CopyyFunction3 from "./CopyFunction3";
import CopyyFunction4 from "./CopyFunction4";
import TextPod from "./TextPod";
import classes2 from "../css/MyMainHeader.module.css";
import piggyImg from "../../img/piggy.png"

const Pigg = () => {
    return (
        <>




            <header className={classes2.header} >


                <div className={classes2.card}>

                    <div className={classes2.img1}>
                        <img src={piggyImg} alt="иконка" className="imgIcon" />
                    </div>

                    <p className={classes2.p}>piggy bank</p>

                </div>

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


                <div className={classes2.card4}>

                </div>



            </header>



            <PiggyBankSection />

            <CopyyFunction id={1} />
            <TextPod/>
            <CopyyFunction2 id={2} />
            <TextPod />
            <CopyyFunction3 id={3} />
             <TextPod/>
            <CopyyFunction4 id={4} />
            <TextPod />

        </>
    )
}

export default Pigg;