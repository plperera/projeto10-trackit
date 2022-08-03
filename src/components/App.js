import Menu from "./Menu"
import Footer from "./Footer"
import Habitos from "./Habitos"
import Historico from "./Historico"
import Login from "./Login"
import Hoje from "./Hoje"



import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hoje from "./Hoje"

export default function App (){
    return(

        //<Login/>
        //<Habitos/>

        <BrowserRouter>

            <Menu/>

            <Routes>

                <Route path="/Login" element={Login} />

                <Route path="/Habitos" element={Habitos} />

                <Route path="/Hoje" element={Hoje} />

                <Route path="/Historico" element={Historico} />

            </Routes>

            <Footer/>

        </BrowserRouter>

        
    )
}
