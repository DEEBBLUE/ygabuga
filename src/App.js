import "./App.css";
import { CaseList } from "./component/Case/CaseList";
import {useTelegram} from "./hooks/useTelegram";
import axios from "axios";

const BASE_URL = "http://5.159.100.37:8000";

function App(){
    const {_ , tg} = useTelegram();
    const initData = tg.initData;
    res = axios({
        method: "post",
        url: BASE_URL + "/userAuth",
        data: {
            "initData": initData
        }
    });
    console.log(res);
    return(
        <div className="App">
            <CaseList/>
        </div>
    );
}

export default App;
