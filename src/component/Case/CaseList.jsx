import React from "react";
import Case from "./Case";
import useTelegram from '../../hooks/useTelegram.js'

export const CaseList = () => {
    const {onToggleButton} = useTelegram();
    return (
        <div>
            <Case onClick={onToggleButton}/>
            <Case onClick={onToggleButton}/>
        </div>
    )

}

export default CaseList;
