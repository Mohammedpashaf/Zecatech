import { Routes, Route} from "react-router-dom";
import Firstpage from "./pages/first page/Firstpage";
import Secondpage from "./pages/second page/Secondpage";
import Thirdpage from "./pages/Third page/Thirdpage";
import Fourpage from "./pages/Four page/Fourpage";

function Router(){
    return(
        <div>
            <Routes>
                <Route path='/' Component={Firstpage}></Route>
                <Route path='/secondPage' Component={Secondpage}></Route>
                <Route path='/thirdPage' Component={Thirdpage}></Route>
                <Route path='/Fourpage' Component={Fourpage}></Route>
            </Routes>
        </div>
    )
}

export default Router;