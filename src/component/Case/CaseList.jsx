import {React,useEffect,useState} from "react";
import Case from "./Case";
import {useTelegram} from '../../hooks/useTelegram.js'

export const CaseList = () => {
    const [activeId, setActiveId] = useState('0');
    const {MainButton} = useTelegram();
    useEffect(() => {
        if (activeId === '0'){
            MainButton.hide(); 
        }else{
            MainButton.show();
        }

    },[activeId,MainButton]);
    return (
        <div>
            <Case id={'1'} setState={setActiveId} activeId={activeId}/>
            <Case id={'2'} setState={setActiveId} activeId={activeId}/>
        </div>
    )

}

export default CaseList;
