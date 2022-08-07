import styled from "styled-components"

export default function ListaDeHabitos ({name, days, i}) {
    const arr = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    console.log("testeeeeeeeeeeeeee")
    function verifySelect (dia, i, days){

        if (days.filter((a)=> a === i).length > 0){
            return <DivDaySelect>{dia}</DivDaySelect>
        }
        else return <DivDay>{dia}</DivDay>
    }
    return(
        <Container>
            <Tittle>{name}</Tittle>
            <DaysList>

                {arr.map((dia, i) =>
                verifySelect(dia,i,days)
                )}               
                    
            </DaysList>
            <div></div>
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