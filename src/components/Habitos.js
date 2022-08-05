import styled from "styled-components"

export default function Habitos({user, setUser}){

    console.log(user)

    return (
        <Container>
            <Tittle> 
                <h3>Meus hábitos</h3>
                <div>+</div>
            </Tittle>

            {/* mostrar habitos, ou texto de nao tiver habitos ainda */}

        </Container>
    )
}

const Container = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;

    height: 100%;
    width: 100%;
    padding-top: 70px;

    background-color: #E5E5E5;


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

