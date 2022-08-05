import { useState } from "react"
import styled from "styled-components"

export default function Dias ({dia, i, dias, setDias}){

    const [clicou, setClicou] = useState(false)

    function click (){

        setClicou(!clicou)

        if (!clicou) {
            setDias([...dias, i])
        } else {
            setDias(dias.filter((arr) => arr !== i))
        }
        
    }

    return(
        <InputDia onClick={() => click()} color={clicou ? ("#FFFFFF"):("#DBDBDB")} background={clicou ? ("#CFCFCF"):("#FFFFFF")}>
            {dia}
        </InputDia>
    )
}
const InputDia = styled.div`

    margin-right: 4px;
    display:flex;
    align-items:center;
    justify-content:center;

    width: 30px;
    height: 30px;

    background-color: ${props => props.background};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-size: 20px;
    color: ${props => props.color};

`