import styled from "styled-components"
import { useNavigate } from "react-router-dom";

import Progreso from "./Progresso";

export default function Footer ({footer, setFooter}){
    const navigate = useNavigate()
    let display = footer ? ("flex"):("none")

    return (
        <Container display={display}>

            <h3 onClick={() => navigate("/habitos")}>Hábitos</h3>
      
            <Progreso pocentagem={70}/>
           
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
