import { useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Case.css";

export const Case = () => {
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
        <div className="Case" onClick={handlerClick} >
            <span>"Это кейс"</span>
        </div>
    )
}

export default Case;
