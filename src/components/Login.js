import logo from "../img/logo.svg"
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function Login({footer, setFooter, menu, setMenu, user, setUser}) {

    const [form, setForm] = useState({
        email:'',
        password: ''      
    })
    const navigate = useNavigate()

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }
    function sendForm(){
        console.log(form)

        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',form)
        promisse.then(res => {
            sucesso(res.data)     
        })     
    }
    function sucesso(res){

        console.log(res)

        setUser({...user,
            email:res.email,
            id:res.id,
            name:res.name,
            image:res.image,
            password:res.password,
            token:res.token
        })
        navigate("/habitos")
        setFooter(!footer)
        setMenu(!menu)
    }
    return(


        <Container>

            <img src={logo}></img>

            <Formulario>
                
                <input placeholder="email" name="email" onChange={handleForm} value={form.email} required></input>

                <input placeholder="senha" name="password" onChange={handleForm} value={form.password} required></input>

                <div onClick={sendForm}>Login</div>

            </Formulario>
            <p>Não tem uma conta? Cadastre-se!</p>
        </Container>
    )
}
const Container = styled.div`

    img{
        width:180px;
        height:180px;
    }
    p{

        margin-top: 25px;
        width: 232px;
        height: 17px;

        font-size: 14px;
        text-decoration-line: underline;
        color: #52B6FF;

        text-align:center;
    }

    margin-top: 68px;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

    width:100%;
    height:100%;

    
`
const Formulario = styled.form`

    margin-top: 28px;


    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

    input{

        margin-top: 6px;

        width: 300px;
        height: 45px;

        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;

        border-radius: 5px;

    }
    input::placeholder { 
        margin-left: 11px;
        color: #DBDBDB;
    }

    div{

        margin-top: 6px;

        font-size: 21px;
        color:white;

        display:flex;
        align-items:center;
        justify-content:center;
        width: 300px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
    }
`