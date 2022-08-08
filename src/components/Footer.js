import styled from "styled-components"
import { useNavigate } from "react-router-dom";

import Progreso from "./Progresso";
import { useEffect } from "react";
import axios from "axios";

export default function Footer ({footer, setFooter,checkAmount, setCheckAmount,tapped, setTapped, user}){
    const navigate = useNavigate()
    let display = footer ? ("flex"):("none")

    const config = {
        headers: {
            Authorization: 'Bearer ' + user.token
        }
    }

    useEffect (()=>{

        if (footer){
            const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then((res)=>success(res.data))
            .catch()
        }
                
    }, [tapped, footer])

    function success(res){
        setCheckAmount((res.filter((arr)=>arr.done === true).length)/res.length)
        console.log(checkAmount)
    }
    return (
        <Container display={display}>

            <h3 onClick={() => navigate("/habitos")}>Hábitos</h3>
      
            <Progreso pocentagem={checkAmount*100}/>
           
            <h3 onClick={() => navigate("/historico")}>Histórico</h3>

        </Container>
    )
}

const Container = styled.div`

    position:fixed;
    bottom: 0;

    display:${(props) => props.display};
    align-items:center;
    justify-content:space-around;

    width: 100%;
    height: 70px;

    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);


    h3{
        font-size: 18px;
        color: #52B6FF;
    }
    
    div{
        /*
        width: 91px;
        height: 91px;

        margin-bottom: 50px;
        
        display:flex;
        align-items:center;
        justify-content:center;

        background-color: #52B6FF;
        
        border-radius: 50px;

        color: white;
        font-size: 18px;
        */

    }
`
