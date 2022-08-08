import axios from "axios"
import styled from "styled-components"
import { useState, useEffect } from "react"
import check from "../img/check.svg"
import ListaDeChecks from "./ListaDeChecks"

export default function Hoje({user, setUser}) {

    const [lista, setLista] = useState(undefined)
    const config = {
        headers: {
            Authorization: 'Bearer ' + user.token
        }
    }
    useEffect (() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promisse.then(res => setLista(res.data))
    }, [])
    console.log(lista)
    return(
        <Container>
            <h3>Segunda, 17/05</h3>
            <p>Nenhum hábito concluído ainda</p>

            {lista === undefined ? (<></>):(
                lista.map((arr)=>

                    <ListaDeChecks 
                        id={arr.id} 
                        name={arr.name} 
                        done={arr.name} 
                        currentSequence={arr.currentSequence} 
                        highestSequence={arr.highestSequence} 
                    />      
                )
            )}
            

        </Container>
    )
}

const Container = styled.div`
    height:100%;
    width:100%;
    
    display:flex;
    align-items:left;
    justify-content:center;
    flex-direction:column;

    padding-top: 70px;
    padding-bottom: 100px;
    margin-top:30px;
    h3 {
        font-size:23px;
        color:#126BA5;
        margin-left: 17px;
    }
    p {
        font-size:18px;
        color:#BABABA;
        margin-left: 17px;
    }
`