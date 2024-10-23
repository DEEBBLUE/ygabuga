import React from "react";
import "./Case.css";

export const Case = (props) => {
   const onClick = () => {
       if (props.id == props.activeId){
            props.setState('0');
       }
       else{
            props.setState(props.activeId);
       }
   } 

   return (
        <div className="Case" onClick={onClick}>
            <div className="Name"><h3>Case name</h3></div>
            <div className="img"></div>
            <div className="Price"><h3>Price</h3></div>
            <div className="Description">Description</div> 
        </div>
    )
}

export default Case;
