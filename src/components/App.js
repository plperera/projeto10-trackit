import Menu from "./Menu"
import Footer from "./Footer"
import Habitos from "./Habitos"
import Historico from "./Historico"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Hoje from "./Hoje"
import { Container } from "./styles"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

export default function App (){

    const [menu, setMenu] = useState (false)
    const [footer, setFooter] = useState (false)
    const [checkAmount, setCheckAmount] = useState(0)
    const [tapped, setTapped] = useState(false)
    const [user, setUser] = useState ({
        email: '',
        id: '',
        image: '',
        name: '',
        password: '',
        token: ''
    })

 
    return(
        <Container>
            <BrowserRouter>

                <Menu 
                    menu={menu}
                    setMenu={setMenu}
                    user={user}
                    setUser={setUser}
                />

                <Routes>

                    <Route path="/" element={<Login
                        menu={menu}
                        setMenu={setMenu}
                        footer={footer}
                        setFooter={setFooter}
                        user={user}
                        setUser={setUser}

                    />} />

                    <Route path="/cadastro" element={<Cadastro/>} />

                    <Route path="/habitos" element={<Habitos 
                       user={user}
                       setUser={setUser} 
                    />} />

                    <Route path="/hoje" element={<Hoje 
                        user={user}
                        setUser={setUser}
                        checkAmount={checkAmount}
                        setCheckAmount={setCheckAmount}
                        tapped={tapped}
                        setTapped={setTapped}
                    />} />

                    <Route path="/historico" element={<Historico />} />
                    {/* <Route path="/teste" element={<Teste />} /> */}


                </Routes>

                <Footer
                    footer={footer}
                    setFooter={setFooter}
                    checkAmount={checkAmount}
                    setCheckAmount={setCheckAmount}
                    tapped={tapped}
                    setTapped={setTapped}
                    user={user}
                />

            </BrowserRouter>

        </Container>
    )
}

