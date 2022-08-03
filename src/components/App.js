import Menu from "./Menu"
import Footer from "./Footer"
import Habitos from "./Habitos"
import Historico from "./Historico"
import Login from "./Login"
import Hoje from "./Hoje"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App (){

    const [menu, setMenu] = useState (false)
    const [footer, setFooter] = useState (false)
 
    return(

        <BrowserRouter>

            <Menu 
                menu={menu}
                setMenu={setMenu}
            />

            <Routes>

                <Route path="/" element={<Login
                    menu={menu}
                    setMenu={setMenu}
                    footer={footer}
                    setFooter={setFooter}
                />} />

                <Route path="/Habitos" element={<Habitos />} />

                <Route path="/Hoje" element={<Hoje />} />

                <Route path="/Historico" element={<Historico />} />

            </Routes>

            <Footer
                footer={footer}
                setFooter={setFooter}
            />

        </BrowserRouter>

        
    )
}
