import React, { useState } from "react";

const Coun = () => {
    const [is, setIs] = useState(false)

    function hendeleClick() {
        setIs(!is)
    }

    return (
        <div>
            <button onClick={hendeleClick}>нажми на меня</button>
            {is ? (<h1>hi</h1>) : (<h2>не</h2>)}
            {is && (<h1>Hi</h1>)}
        </div>
    );
};

export default Coun;