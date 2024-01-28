import React, { useEffect, useRef, useState } from "react";
import Circle from "./Circle";

const ClickOutside = ({ count }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isCount, setIsCount] = useState(count)
    const [fill, setFill] = useState(count)
    const cardRef = useRef(null)

    function hendleClick() {
        setIsCount(!isCount)
        setFill(true)

    }

    function hendleClick2() {
        setFill(!fill)
        setIsCount(true)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsOpen(false)
            };
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.addEventListener("mousedown", handleClickOutside)
        };
    }, [])
    


    return (
        <div ref={cardRef}>
            <div onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <Circle count={count} isCount={isCount} fill={fill} />
                ) : (
                    <Circle count={count} isCount={isCount} fill={fill} />
                )}
            </div>

            {isOpen && (
                <div style={{ position: "absolute", display:"flex", width:"3vw", justifyContent:"center" }}>
                    <button onClick={hendleClick2} style={{ width: "4.5vw", height:"1.5vw", fontSize: "0.8vw"}}>Заполнить</button>
                    <button onClick={hendleClick} style={{ width: "4.5vw", height: "1.5vw", fontSize: "0.8vw"}}>Выделить</button>
                </div>
            )}
        </div>
    );
};

export default ClickOutside;