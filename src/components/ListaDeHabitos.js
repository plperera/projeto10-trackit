import styled from "styled-components"
import trash from "../assets/img/trash.png"
import axios from "axios"

export default function ListaDeHabitos ({name, days, i, id, user, setUser, changes, setChanges}) {
    const arr = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    const config = {
        headers: {
            Authorization: 'Bearer '+ user.token
        }
    }

    function verifySelect (dia, i, days){

        if (days.filter((a)=> a === i).length > 0){
            return <DivDaySelect key={i}>{dia}</DivDaySelect>
        }
        else return <DivDay key={i}>{dia}</DivDay>
    }
    function Delete(){
        console.log(id)
        console.log(config)

        const promisse = axios.delete('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/'+id, config)
        .then(() => setChanges(changes + 1))
        .catch(res => console.log(res))

    }
    return(  
            <Container>
                <Tittle>{name}</Tittle>
                <DaysList>

                    {arr.map((dia, i) =>
                    verifySelect(dia,i,days)
                    )}               
                        
                </DaysList>
                <img src={trash} onClick={Delete} alt=""/>
            </Container>
    )
}
const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: left;
    flex-direction:column;

    margin-top: 22px;
    width: 340px;
    height: 91px;

    background-color: #FFFFFF;
    border-radius: 5px;

    position:relative;

    img {
    
        position: absolute;
        right: 15px;
        top: 10px;
        
    }
`
const Tittle = styled.div`
    margin-top:13px;
    width: 90%;
    height: 25px;

    font-size: 20px;
    color: #666666;
        
`
const DaysList = styled.div`
    margin-top: 8px;

    display:flex;
    align-items:left;
    justify-content:left;

    width:90%;
`
const DivDay = styled.div`

    margin-right: 4px;
    display:flex;
    align-items:center;
    justify-content:center;

    width: 30px;
    height: 30px;

    background-color: white;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 20px;
    color: #DBDBDB;
`
const DivDaySelect = styled.div`

    margin-right: 4px;
    display:flex;
    align-items:center;
    justify-content:center;

    width: 30px;
    height: 30px;

    background-color: #CFCFCF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 20px;
    color: white;

`