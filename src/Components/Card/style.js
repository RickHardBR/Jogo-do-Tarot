import styled from "styled-components";


export const CardsContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width: 70vw;
    justify-content: space-around;
    row-gap: 8px;
    margin-top: 32px;
    cursor: pointer;
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
`

export const ButtonContainer = styled.div`
    display:flex;
    justify-content: center;
    width:70vw;
    margin: 16px 0 0 0 ;
    flex-wrap:wrap;
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
`

export const StyledButton = styled.button`
    background: #41577A;
    background-image: -webkit-linear-gradient(top, #41577A, #282A2E);
    background-image: -moz-linear-gradient(top, #41577A, #282A2E);
    background-image: -ms-linear-gradient(top, #41577A, #282A2E);
    background-image: -o-linear-gradient(top, #41577A, #282A2E);
    background-image: -webkit-gradient(to bottom, #41577A, #282A2E);
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    border-radius: 8px;
    box-sizing: border-box;
    flex-wrap:wrap;
    margin-top: 16px;
    margin-right: 16px;
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    
    :hover {
    background: #282A2E;
    background-image: -webkit-linear-gradient(top, #282A2E, #41577A);
    background-image: -moz-linear-gradient(top, #282A2E, #41577A);
    background-image: -ms-linear-gradient(top, #282A2E, #41577A);
    background-image: -o-linear-gradient(top, #282A2E, #41577A);
    background-image: -webkit-gradient(to bottom, #282A2E, #41577A);
    }
  
`
export const StyledImg = styled.img`
    width: 246px;
    height: 397px;
    border-radius: 20px;
`