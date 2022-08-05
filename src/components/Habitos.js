import styled from "styled-components"
import { useState } from "react"

import Dias from "./Dias"

export default function Habitos({user, setUser}){

    console.log(user)
    const [criarHabito, setCriarHabito] = useState(!false)
    const [form, setForm] = useState({})
    const [dias, setDias] = useState([])
    const arr = ["D", "S", "T", "Q", "Q", "S", "S"]

    console.log(dias)

    return (
        <Container>
            <Tittle> 
                <h3>Meus hábitos</h3>
                <div>+</div>
            </Tittle>

            <ContainerHabito>

                {criarHabito ? (
                    <>
                    <input placeholder="nome do hábito"></input>

                    <ContainerDias>

                       {arr.map((dia, i) => 
                            <Dias dia={dia} i={i} key={i} dias={dias} setDias={setDias}/>                           
                       )}

                    </ContainerDias>

                    <ButttonDiv>
                        <ButtonCancel>Cancelar</ButtonCancel>
                        <ButtonSave>Salvar</ButtonSave>
                    </ButttonDiv>
                    </>

                ):(
                    <></>
                )}
                
                
            </ContainerHabito>

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>

        </Container>
    )
}

const Container = styled.div`

    display:flex;
    align-items: center;
    flex-direction:column;

    height: 100vw;
    width: 100%;
    padding-top: 70px;

    background-color: #E5E5E5;

    p {
        margin-top: 28px;
        width: 90%;
        height: 74px;

        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

`
const Tittle = styled.div`

    margin-top: 28px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;


    h3 {

        margin-left: 17px;
        width: 148px;
        height: 29px;

        font-size: 23px;

        color: #126BA5;

    }
    div {

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 17px;

        width: 40px;
        height: 35px;
        font-size: 27px;

        color: white;
        background-color: #52B6FF;
        border-radius: 4.63636px;

    }
`
const ContainerHabito = styled.div`

    padding-bottom: 15px;

    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

    margin-top: 22px;
    background-color:white;

    width:90%;
    height: 180px;

    border-radius: 5px;

    input {
        margin-top: 18px;
        width: 303px;
        height: 45px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
`
const ButtonCancel = styled.span`
    display: flex;
    align-items:center;
    justify-content: center;

    width: 69px;
    height: 20px;

    font-size: 16px;
    color: #52B6FF;
`
const ButtonSave = styled.div`

    margin-left: 23px;
    display: flex;
    align-items:center;
    justify-content: center;

    width: 84px;
    height: 35px;

    font-size: 16px;
    color: white;

    background-color: #52B6FF;
    border-radius: 4.63636px;
`
const ButttonDiv = styled.div`

    margin-top: 29px;
    width: 90%;
    display: flex;
    align-items:center;
    justify-content: right;

`
const ContainerDias = styled.div`

    margin-top: 8px;

    display:flex;
    align-items:left;
    justify-content:left;

    width:90%;
`

