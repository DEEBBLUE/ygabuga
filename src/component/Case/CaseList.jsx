import {React,useState} from "react";
import Case from "./Case";

export const CaseList = () => {
    const [active1, setActivet1] = useState(false);
    const [active2, setActivet2] = useState(false);
    return (
        <div>
            <Case state={active1} setState={setActivet1}/>
            <Case state={active1} setState={setActivet2}/>
        </div>
    )

}

export default CaseList;
