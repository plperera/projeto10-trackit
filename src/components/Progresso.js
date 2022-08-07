import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components"


export default function Progreso ({pocentagem}) {
    const navigate = useNavigate()
    return(
        <Container onClick={() => navigate("/hoje")}>
            <CircularProgressbar
            value={pocentagem}
            text={``}
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            strokeLinecap: 'round'
            })}
            />
            <p>Hoje</p>
        </Container>
    )
}
const Container = styled.div`

    width: 91px;
    height: 91px;

    margin-bottom: 50px;
        
    display:flex;
    align-items:center;

    position: relative;
    
    p {

        position:absolute;
        left: 33%;

        color: #FFFFFF;
        font-size: 18px;

    }

`
