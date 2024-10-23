import React from "react";
import "./Case.css";

export const Case = ({props}) => {
   return (
        <div className="Case" onClick={props.onClick}>
            <span>"Это кейс"</span>
        </div>
    )
}

export default Case;
