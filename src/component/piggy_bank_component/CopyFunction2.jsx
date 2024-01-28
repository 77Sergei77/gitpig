import React, { useEffect, useState } from "react";
import classes from "../css/CoppyFunction.module.css"
import ClickOutside from "./Circle/ClickOutside";
import imgRev from "../../img/сжать.png";
import imgVer from "../../img/разжать.png";

const CopyyFunction2 = ({ id }) => {
    const [reveal, setReveal] = useState(false)
    const [inputValue2, setInputValue2] = useState("")

    function clickReveal() {
        setReveal(!reveal)
    };

    useEffect(() => {
        const SavedInputValue2 = localStorage.getItem("inputValue2")
        if (SavedInputValue2) { setInputValue2(SavedInputValue2); }
    }, [])

    useEffect(() => {
        localStorage.setItem("inputValue2", inputValue2)
    }, [inputValue2]);


    return (

        <div className={classes.card2}>

            <div className={reveal ? `${classes.card}` : `${classes.cardss}`}>

                <div className={classes.card3}>
                    <div style={{ width: "3vw" }}>
                        <div className={classes.id}>{id}</div>
                    </div>


                    <div style={{ width: "32.5vw", display: "flex", alignItems: "center", marginLeft: "2.5vw" }}>
                        <h2 style={{ fontSize: "2vw" }}>Цель:</h2>


                        <input className={classes.purpose}
                            value={inputValue2}
                            onChange={(e) => setInputValue2(e.target.value)}
                        />


                    </div>


                    <div style={{ width: "20vw" }}>
                        <p className={classes.text}>100 - 10 000 руб</p>
                    </div>
                </div>

                <div className={classes.card4}>
                    <div className={classes.card5}>
                        <ClickOutside count={100} />
                        <ClickOutside count={200} />
                        <ClickOutside count={300} />
                        <ClickOutside count={400} />
                        <ClickOutside count={500} />
                        <ClickOutside count={600} />
                        <ClickOutside count={700} />
                        <ClickOutside count={800} />
                        <ClickOutside count={900} />
                        <ClickOutside count={1 + ' k'} />
                        <ClickOutside count={1100} />
                        <ClickOutside count={1200} />
                        <ClickOutside count={1300} />
                        <ClickOutside count={1400} />
                        <ClickOutside count={1500} />
                        <ClickOutside count={1600} />
                        <ClickOutside count={1700} />
                        <ClickOutside count={1800} />
                        <ClickOutside count={1900} />
                        <ClickOutside count={2 + ' k'} />
                        <ClickOutside count={2100} />
                        <ClickOutside count={2200} />
                        <ClickOutside count={2300} />
                        <ClickOutside count={2400} />
                        <ClickOutside count={2500} />
                        <ClickOutside count={2600} />
                        <ClickOutside count={2700} />
                        <ClickOutside count={2800} />
                        <ClickOutside count={2900} />
                        <ClickOutside count={3 + ' k'} />
                        <ClickOutside count={3100} />
                        <ClickOutside count={3200} />
                        <ClickOutside count={3300} />
                        <ClickOutside count={3400} />
                        <ClickOutside count={3500} />
                        <ClickOutside count={3600} />
                        <ClickOutside count={3700} />
                        <ClickOutside count={3800} />
                        <ClickOutside count={3900} />
                        <ClickOutside count={4 + ' k'} />
                        <ClickOutside count={4100} />
                        <ClickOutside count={4200} />
                        <ClickOutside count={4300} />
                        <ClickOutside count={4400} />
                        <ClickOutside count={4500} />
                        <ClickOutside count={4600} />
                        <ClickOutside count={4700} />
                        <ClickOutside count={4800} />
                        <ClickOutside count={4900} />
                        <ClickOutside count={5 + ' k'} />
                        <ClickOutside count={5100} />
                        <ClickOutside count={5200} />
                        <ClickOutside count={5300} />
                        <ClickOutside count={5400} />
                        <ClickOutside count={5500} />
                        <ClickOutside count={5600} />
                        <ClickOutside count={5700} />
                        <ClickOutside count={5800} />
                        <ClickOutside count={5900} />
                        <ClickOutside count={6 + ' k'} />
                        <ClickOutside count={6100} />
                        <ClickOutside count={6200} />
                        <ClickOutside count={6300} />
                        <ClickOutside count={6400} />
                        <ClickOutside count={6500} />
                        <ClickOutside count={6600} />
                        <ClickOutside count={6700} />
                        <ClickOutside count={6800} />
                        <ClickOutside count={6900} />
                        <ClickOutside count={7 + ' k'} />
                        <ClickOutside count={7100} />
                        <ClickOutside count={7200} />
                        <ClickOutside count={7300} />
                        <ClickOutside count={7400} />
                        <ClickOutside count={7500} />
                        <ClickOutside count={7600} />
                        <ClickOutside count={7700} />
                        <ClickOutside count={7800} />
                        <ClickOutside count={7900} />
                        <ClickOutside count={8 + ' k'} />
                        <ClickOutside count={8100} />
                        <ClickOutside count={8200} />
                        <ClickOutside count={8300} />
                        <ClickOutside count={8400} />
                        <ClickOutside count={8500} />
                        <ClickOutside count={8600} />
                        <ClickOutside count={8700} />
                        <ClickOutside count={8800} />
                        <ClickOutside count={8900} />
                        <ClickOutside count={9 + ' k'} />
                        <ClickOutside count={9100} />
                        <ClickOutside count={9200} />
                        <ClickOutside count={9300} />
                        <ClickOutside count={9400} />
                        <ClickOutside count={9500} />
                        <ClickOutside count={9600} />
                        <ClickOutside count={9700} />
                        <ClickOutside count={9800} />
                        <ClickOutside count={9900} />
                        <ClickOutside count={10 + ' k'} />

                    </div>
                </div>

            </div>
            <div onClick={clickReveal}>
                {reveal ? <img src={imgVer} alt="разжать" className={classes.reveal} /> : <img src={imgRev} className={classes.reveal} />}
            </div>
        </div>
    );
};

export default CopyyFunction2;