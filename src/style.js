import styled from "styled-components"
import backDark from "./Assets/backdark.jpg"


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${backDark});
    background-color: black;
    min-height:100vh;
`