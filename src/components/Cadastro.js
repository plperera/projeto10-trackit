import logo from "../img/logo.svg"
import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from  'react-loader-spinner'

export default function Cadastro() {

    const [form, setForm] = useState({
        email:'',
        name:'',
        image: '',
        password: ''      
    })
    const [carregar, setCarregar] = useState(false)
    const navigate = useNavigate()

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function sendForm(){
        console.log(form)
        setCarregar(!carregar)
        
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', form)
        promisse.then(res => {sucesso()})
        promisse.catch( () => erro())         

    }
    function sucesso (){
        navigate("/")
    }
    function erro (){
        setTimeout(() => {

            setCarregar(false)

          }, 2000);

    }
    return(


        <Container opacity={() => carregar ? (0.5):(1)}>

            <img src={logo}></img>

            <Formulario opacity={() => carregar ? (0.5):(1)} clicou={() => carregar ? ("none"):("all")}>
                
                <input placeholder="email" name="email" onChange={handleForm} value={form.email} required></input>

                <input placeholder="senha" name="password" onChange={handleForm} value={form.password} required></input>

                <input placeholder="nome" name="name" onChange={handleForm} value={form.name} required></input>

                <input placeholder="foto" name="image" onChange={handleForm} value={form.image} required></input>

                <div onClick={sendForm}>
                    { carregar  ? (
                        <ThreeDots color="#FFFFFF" height={50} width={50} />
                    ):(
                        <>Cadastrar</>
                    )}
                </div>

            </Formulario>
            <p onClick={()=> {navigate("/")}}>Já tem uma conta? Faça login!</p>
        </Container>
    )
}
const Container = styled.div`

    img{
        width:180px;
        height:180px;
    }
    p{
        opacity: ${props => props.opacity};
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

    opacity: ${props => props.opacity};
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
        pointer-events:${(props) => props.clicou} !important;

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
        pointer-events:${(props) => props.clicou} !important;
    }
`