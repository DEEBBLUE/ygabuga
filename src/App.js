import "./App.css";
import { CaseList } from "./component/Case/CaseList";
import {useTelegram} from "./hooks/useTelegram";
import axios from "axios";

const BASE_URL = "https://gildbot.ru/api/v1";
axios.defaults.baseURL = BASE_URL;
function App(){
    const {_ , tg} = useTelegram();
    const initData = tg.initData;
    const response = async() =>{ 
        await axios.post("/user/Auth",{
            body: initData,
            tg_id: tg.initDataUnsafe.user.id
        });
    };
    if (response.data["message"] === null){
        return(
            <div className="App">
                <CaseList/>
            </div>
        );
    }
}

export default App;
