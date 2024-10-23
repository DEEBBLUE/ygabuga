import React from "react";
import "./Case.css";
import useTelegram from '../../hooks/useTelegram.js'

export const Case = (props) => {
    const [showMainButton,hideMainButton] = useTelegram();
   const onClick = () => {
       if (!props.state){
           showMainButton();
           props.setState(true);
       } 
       else{
            hideMainButton();
            props.setState(false);
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
