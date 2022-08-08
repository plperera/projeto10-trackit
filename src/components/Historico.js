import styled from "styled-components"
export default function Historico() {

    return(
        <Container>
            <h3>Histórico</h3>
            <h4>Em breve você poderá ver o histórico dos seus hábitos aqui!</h4>
        </Container>
    )
}
const Container = styled.div`

    display:flex;
    align-items:left;
    justify-content:center;
    flex-direction:column;

    padding-top: 70px;

    h3{ 
        margin-top:28px;
        margin-left:17px;
        font-size: 22.976px;
        color: #126BA5;
    }
    h4{
        margin-top:17px;
        margin-left:17px;
        width: 85%;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
`