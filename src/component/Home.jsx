import React from "react";
import { Link } from 'react-router-dom';
import classes from "./css/MyHome.module.css";
import MainContentHeader from "./MainContentHeader";
import AboutProject from "./AboutProject";
import AdvantagesProject from "./AdvantagesProject";
import classes2 from "./css/MyMainHeader.module.css";
import piggyImg from "../img/piggy.png"

const Home = () => {
    return (
        <>
            <header className={classes2.header} >
                <div className={classes2.img1}>
                    <img src={piggyImg} alt="иконка" className={classes2.cardIcone} />
                </div>

                <div className={classes2.cardText}>
                    <p className={classes2.p}>piggy bank</p>
                </div>

                <div className={classes.card2}>
                    <div className={classes.cardHeard}>

                        <div className={classes.cardd}>
                            <Link to="/" className={classes.text}>Главная</Link>
                        </div>

                        <div className={classes.cardd}>
                            <Link to="/pigg" className={classes.text}>Копилка</Link>
                        </div>

                        <div className={classes.cardd}>
                            <Link to="/budget" className={classes.text}>Инструкция</Link>
                        </div>

                    </div>
                </div>
            </header>


            <MainContentHeader />

            <div className={classes.card6}>
                <AboutProject />

                <AdvantagesProject />

            </div>

        </>
    )
}

export default Home;