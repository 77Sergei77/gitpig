import React from "react";
import classes from "./css/MyMainHeader.module.css";
import piggyImg from "../img/piggy.png"

const MainHeader = () => {

    return (
        <>

            <header className={classes.header} >


                <div className={classes.card}>

                    <div className={classes.img1}>
                        <img src={piggyImg} alt="иконка"  className="imgIcon"/>
                    </div>

                    <p className={classes.p}>piggy bank</p>

                </div>

                <div className={classes.card4}>

                </div>



            </header>

        </>
    );

};

export default MainHeader;