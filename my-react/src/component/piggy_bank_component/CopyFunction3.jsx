import React, { useEffect, useState } from "react";
import classes from "../css/CoppyFunction.module.css"
import ClickOutside from "./Circle/ClickOutside";
import imgRev from "../../img/сжать.png";
import imgVer from "../../img/разжать.png";

const CopyyFunction3 = ({ id }) => {
    const [reveal, setReveal] = useState(false)
    const [inputValue3, setInputValue3] = useState("")

    function clickReveal() {
        setReveal(!reveal)
    };

    useEffect(() => {
        const SavedInputValue3 = localStorage.getItem("inputValue3")
        if (SavedInputValue3) { setInputValue3(SavedInputValue3); }
    }, [])

    useEffect(() => {
        localStorage.setItem("inputValue3", inputValue3)
    }, [inputValue3]);


    return (

        <div className={classes.card2}>


            <div className={reveal ? `${classes.card}` : `${classes.cardss}`}>

                <div className={classes.card3}>
                    <div style={{ width: "60px" }}>
                        <div className={classes.id}>{id}</div>
                    </div>


                    <div style={{ width: "650px", display: "flex", alignItems: "center", marginLeft: "50px" }}>
                        <h2 style={{ fontSize: "40px" }}>Цель:</h2>


                        <input className={classes.purpose}
                            value={inputValue3}
                            onChange={(e) => setInputValue3(e.target.value)}
                        />


                    </div>


                    <div style={{ width: "400px" }}>
                        <p className={classes.text}>1 000 - 100 000 руб</p>
                    </div>
                </div>

                <div className={classes.card4}>
                    <div className={classes.card5}>
                        <ClickOutside count={1000} />
                        <ClickOutside count={2000} />
                        <ClickOutside count={3000} />
                        <ClickOutside count={4000} />
                        <ClickOutside count={5000} />
                        <ClickOutside count={6000} />
                        <ClickOutside count={7000} />
                        <ClickOutside count={8000} />
                        <ClickOutside count={9000} />
                        <ClickOutside count={10 + ' k'} />
                        <ClickOutside count={11000} />
                        <ClickOutside count={12000} />
                        <ClickOutside count={13000} />
                        <ClickOutside count={14000} />
                        <ClickOutside count={15000} />
                        <ClickOutside count={16000} />
                        <ClickOutside count={17000} />
                        <ClickOutside count={18000} />
                        <ClickOutside count={19000} />
                        <ClickOutside count={20 + ' k'} />
                        <ClickOutside count={21000} />
                        <ClickOutside count={22000} />
                        <ClickOutside count={23000} />
                        <ClickOutside count={24000} />
                        <ClickOutside count={25000} />
                        <ClickOutside count={26000} />
                        <ClickOutside count={27000} />
                        <ClickOutside count={28000} />
                        <ClickOutside count={29000} />
                        <ClickOutside count={30 + ' k'} />
                        <ClickOutside count={31000} />
                        <ClickOutside count={32000} />
                        <ClickOutside count={33000} />
                        <ClickOutside count={34000} />
                        <ClickOutside count={35000} />
                        <ClickOutside count={36000} />
                        <ClickOutside count={37000} />
                        <ClickOutside count={38000} />
                        <ClickOutside count={39000} />
                        <ClickOutside count={40 + ' k'} />
                        <ClickOutside count={41000} />
                        <ClickOutside count={42000} />
                        <ClickOutside count={43000} />
                        <ClickOutside count={44000} />
                        <ClickOutside count={45000} />
                        <ClickOutside count={46000} />
                        <ClickOutside count={47000} />
                        <ClickOutside count={48000} />
                        <ClickOutside count={49000} />
                        <ClickOutside count={5 + ' k'} />
                        <ClickOutside count={51000} />
                        <ClickOutside count={52000} />
                        <ClickOutside count={53000} />
                        <ClickOutside count={54000} />
                        <ClickOutside count={55000} />
                        <ClickOutside count={56000} />
                        <ClickOutside count={57000} />
                        <ClickOutside count={58000} />
                        <ClickOutside count={59000} />
                        <ClickOutside count={60 + ' k'} />
                        <ClickOutside count={61000} />
                        <ClickOutside count={62000} />
                        <ClickOutside count={63000} />
                        <ClickOutside count={64000} />
                        <ClickOutside count={65000} />
                        <ClickOutside count={66000} />
                        <ClickOutside count={67000} />
                        <ClickOutside count={68000} />
                        <ClickOutside count={69000} />
                        <ClickOutside count={70 + ' k'} />
                        <ClickOutside count={71000} />
                        <ClickOutside count={72000} />
                        <ClickOutside count={73000} />
                        <ClickOutside count={74000} />
                        <ClickOutside count={75000} />
                        <ClickOutside count={76000} />
                        <ClickOutside count={77000} />
                        <ClickOutside count={78000} />
                        <ClickOutside count={79000} />
                        <ClickOutside count={80 + ' k'} />
                        <ClickOutside count={81000} />
                        <ClickOutside count={82000} />
                        <ClickOutside count={83000} />
                        <ClickOutside count={84000} />
                        <ClickOutside count={85000} />
                        <ClickOutside count={86000} />
                        <ClickOutside count={87000} />
                        <ClickOutside count={88000} />
                        <ClickOutside count={89000} />
                        <ClickOutside count={90 + ' k'} />
                        <ClickOutside count={91000} />
                        <ClickOutside count={92000} />
                        <ClickOutside count={93000} />
                        <ClickOutside count={94000} />
                        <ClickOutside count={95000} />
                        <ClickOutside count={96000} />
                        <ClickOutside count={97000} />
                        <ClickOutside count={98000} />
                        <ClickOutside count={99000} />
                        <ClickOutside count={100 + ' k'} />

                    </div>
                </div>

            </div>
            <div onClick={clickReveal}>
                {reveal ? <img src={imgVer} alt="разжать" className={classes.reveal} /> : <img src={imgRev} className={classes.reveal} />}
            </div>
        </div>
    );
};

export default CopyyFunction3;