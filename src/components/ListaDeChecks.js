import axios from "axios"
import styled from "styled-components"
import { useState } from "react"
import check from "../img/check.svg"

export default function ListaDeChecks ({id, name, done, currentSequence, highestSequence, user, tapped, setTapped}){
    const config = {
        headers: {
            Authorization: 'Bearer ' + user.token
        }
    }
    const linkApi = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'+id+'/'+ (done ? ('uncheck'):('check'))
    console.log(linkApi)

    function clicked(){

        const promisse = axios.post(linkApi, config)
        promisse.then(setTapped(tapped + 1))
        promisse.catch(res => console.log(res))
        
    }

    return(
        <Container>
            <div>
                <h4>{name}</h4>
                <h5>Sequência atual: <Green color={()=>done ? ("#8FC549"):("#666666")}>{currentSequence} dias</Green></h5>
                <h5>Seu recorde: {highestSequence} dias</h5>
            </div>
            <ButtonCheck onClick={clicked} background={()=>done ? ("#8FC549"):("#EBEBEB")} border={()=>done ? ("none"):("1px solid #E7E7E7")}>
                <img src={check}/>
            </ButtonCheck>   
        </Container>
    )
}

const Container = styled.div`
    width: 340px;
    height: 94px;
    border-radius: 5px;
    margin-left: 17px;
    
    display:flex;
    align-items:center;
    justify-content:space-between;

    margin-top:10px;

    background-color:white;
    h4 {
        font-size:20px;
        color:#666666;
        width: 208px;
        line-height: 25px;
        margin-left: 15px;
        margin-bottom:4px;
    }
    h5 {
        margin-bottom:2px;
        font-size:13px;
        color:#666666;
        margin-left: 13px;
        width: 146px;
        line-height: 16px;
    }
`
const ButtonCheck = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
    margin-right: 17px;
    background-color:${props => props.background};
    width: 69px;
    height: 69px;
    border:${props => props.border};
    border-radius: 5px;
`
const Green = styled.span`
    color:${props => props.color};
`