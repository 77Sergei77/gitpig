import React from "react";
import classes from "./css/FonButton.module.css";

const FonButton = () => {

    return (
        <div>
            <div className={classes.card}>

                <h1 className={classes.text}>Saving money is easy</h1>

            </div>


            <header className={classes.headerButton}>
                <p style={{marginLeft: "1.5vw"}}>автор: С.А. Рябов </p >
                <p style={{ marginRight: "1.5vw" }}>тел:   +7 950 ### ## ##</p>
            </header>
        </div>


    );
};

export default FonButton;