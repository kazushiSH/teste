import { Route,Routes } from "react-router-dom";
import Home from "./home";
import Aboutus from "./aboutus";
const Router = () => (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/aboutus" element={<Aboutus />}/>


    
    </Routes>
)

export default Router;