import "./App.css";
import { CaseList } from "./component/Case/CaseList";
import {useTelegram} from "./hooks/useTelegram";
import axios from "axios";

const BASE_URL = "https://gildbot.ru/api/v1";
axios.defaults.baseURL = BASE_URL;
function App(){
    const {_ , tg} = useTelegram();
    const initData = tg.initData;
    const data = initData;
    const res = axios.post("/user/Auth",{
        body: data
    }).then(function (response){
        console.log(response.data)
    });
    if (res){
        return(
            <div className="App">
                <CaseList/>
            </div>
        );
    }
}

export default App;
