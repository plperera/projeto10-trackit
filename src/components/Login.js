import logo from "../img/logo.svg"
import styled from "styled-components"
export default function Login() {

    return(
        <Container>

            <img src={logo}></img>

            <Formulario>
                
                <input required></input>

                <input required></input>

                <div>Entrar</div>

            </Formulario>
            
            <p>Não tem uma conta? Cadastre-se!</p>

        </Container>
    )
}
const Container = styled.div`

    margin-top: 68px;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

    width:100%;
    height:100%;

    p{
        margin-top: 25px;
        width: 232px;
        height: 17px;

        font-size: 14px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
    img{
        width:180px;
        height:180px;
    }
`
const Formulario = styled.form`

    margin-top: 28px;


    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

    input{

        margin-top: 6px;

        width: 300px;
        height: 45px;

        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;

        border-radius: 5px;

    }
    div{

        margin-top: 6px;

        font-size: 21px;
        color:white;

        display:flex;
        align-items:center;
        justify-content:center;
        width: 300px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 5px;
    }
`