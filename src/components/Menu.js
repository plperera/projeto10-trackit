import styled from "styled-components"

export default function Menu ({menu, setMenu}){

    let display = menu ? ("flex"):("none")

    return (
        <Container display={display}>
            <h1>TrackIt</h1>
            <img src="https://uploads-ssl.webflow.com/602d151a812ce93ee387ebe5/624763a85861ff0bf6d28fd1_Cachorro%20pode%20ter%20autismo.jpeg"/>
        </Container>
    )
}

const Container = styled.div`

    position: fixed;

    width: 100%;
    height: 70px;

    display:${(props) => props.display};
    align-items:center;
    justify-content:space-between;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img{

        width: 51px;
        height: 51px;
        border-radius: 50px;
        object-fit: cover;
        margin-right: 18px;


    }

    h1{
        @import url('https://fonts.googleapis.com/css2?family=Playball&family=Recursive:wght@300;400;500;600;700&display=swap');
        font-family: 'Playball', cursive;
        font-family: 'Recursive', sans-serif;


        font-size: 38.982px;
        margin-left:18px;

        color: white;
    }
`