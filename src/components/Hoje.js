import axios from "axios"
import styled from "styled-components"
import { useState, useEffect } from "react"
import ListaDeChecks from "./ListaDeChecks"
import dayjs from "dayjs"

export default function Hoje({user,tapped,setTapped, checkAmount, setCheckAmount}) {
   
    const [lista, setLista] = useState(undefined)
    const config = {
        headers: {
            Authorization: 'Bearer ' + user.token
        }
    }
    useEffect (() => {
        
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promisse.then(res => success(res))
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tapped])

    function success(res){
        setLista(res.data) 
    }
    function WeekDay (dia){
        switch (dia) {
            case 0: return "Domingo"
            case 1: return "Segunda"
            case 2: return "Terça"
            case 3: return "Quarta"
            case 4: return "Quinta"
            case 5: return "Sexta"
            case 6: return "Sabado"
            default: return ""
        }
    }
    return(
        <Container>
            <h3>{WeekDay(dayjs().locale('pt-br').$W)}, {dayjs().locale('pt-br').format('DD/MM')}</h3>
            {checkAmount > 0 ? (<Green>{(checkAmount*100).toFixed(0)}% dos hábitos concluídos</Green>):(<p>Nenhum hábito concluído ainda</p>)}

            {lista === undefined ? (<></>):(
                lista.map((arr, i)=>

                    <ListaDeChecks 
                        id={arr.id} 
                        name={arr.name} 
                        done={arr.done} 
                        currentSequence={arr.currentSequence} 
                        highestSequence={arr.highestSequence} 
                        user={user}
                        tapped={tapped}
                        setTapped={setTapped}
                        key={i}
                    />)
            )}
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #E5E5E5;

    display:flex;
    align-items:left;
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
        margin-top: 3px;
        margin-bottom: 18px;
    }
`
const Green = styled.p`
    color:#8FC549 !important;
`