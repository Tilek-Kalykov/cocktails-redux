import {Route , Routes} from "react-router-dom";
import Header from "../components/Header";
import Detail from "./Detail";
import Home from "./Home";
import Instructions from "./Instructions";


export default function Main() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
            <Route path='ingredient/:name' element={<Instructions/>}/>
        </Routes>
      
    </div>
  )
}