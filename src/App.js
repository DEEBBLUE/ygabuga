import "./App.css";
import { CaseList } from "./component/Case/CaseList";
import PageUp from "./component/PageUp/page-up";
import { useState } from "react";


function App(){
    return(
        <div className="App">
            <PageUp/>
            <CaseList/>
        </div>
    );
}

export default App;
