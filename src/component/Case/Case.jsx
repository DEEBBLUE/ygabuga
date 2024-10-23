import React from "react";
import "./Case.css";

export const Case = (props) => {
   return (
        <div className="Case" onClick={props.onClick}>
            <div className="Name"><h3>Case name</h3></div>
            <div className="img"></div>
            <div className="Price"><h3>Price</h3></div>
            <div className="Description">Description</div> 
        </div>
    )
}

export default Case;
