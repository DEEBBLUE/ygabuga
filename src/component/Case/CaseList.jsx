import {React,useEffect,useState} from "react";
import Case from "./Case";
import {useTelegram} from '../../hooks/useTelegram.js'

export const CaseList = () => {
    const [activeId, setActiveId] = useState(0);
    const {MainButton} = useTelegram();
    const setState = (value) =>{
        setActiveId(value);
    };
    useEffect(() => {
        console.log(activeId);
        if (activeId == '0'){
            MainButton.hide(); 
        }else{
            MainButton.show();
        }

    },[activeId]);
    return (
        <div>
            <Case id={1} setState={setState} activeId={activeId}/>
            <Case id={2} setState={setState} activeId={activeId}/>
        </div>
    )

}

export default CaseList;
