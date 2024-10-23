import React, { useState } from "react";
import Case from "./Case";
import useTelegram from '../../hooks/useTelegram.js'

export const CaseList = () => {
    const {onToggleButton} = useTelegram();
    const [active,setActive] = useState(false)
    function handlerClick(){
        let doc = document.querySelector('.Case');
        if (active){
            doc.style.backgroundColor = 'unset';
            onToggleButton();
            setActive(false);
        }
        else{
            doc.style.backgroundColor = 'rgd(255,170,0)';
            setActive(true);
            onToggleButton();
        }
    } 
    return (
        <div>
            <Case onClick={handlerClick}/>
        </div>
    )

}
