import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "image action";
  grid-template-columns: 50% minmax(auto, 50%);
  grid-template-rows: 100vh;
  font-family: "Roboto";
    -webkit-font-smoothing: antialiased;

  @media (max-width: 768px) {
    
    grid-template-areas:"image" "action" ;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(50vh, 1fr) 1fr;
    
  }
`;

export const ImageContainer = styled.div`
  background: ${({ src }) => `url(${src})`} no-repeat;
  background-size: cover;
  grid-area: image;

  @media (max-width: 768px) {
    height: 30%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  display: block;
`;

export const ButtonContainer = styled.div`
  grid-area: action;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  font-family: "Roboto";
    -webkit-font-smoothing: antialiased;

  @media (max-width: 768px) {
    margin: 40px 0;
  }
`;

export const Title = styled.h1`
color: #fff;
@media (max-width: 768px) {
    margin-top: -240px;
  }
`

export const Subtitle = styled.h2`
  margin: 20px;
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5rem;
  text-indent: 3em;
  text-align: justify;
  color: #fff;
`;

export const PlayButton = styled.button`
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
    font-family: 'Cinzel Decorative', cursive;
    box-sizing: border-box;
    flex-wrap:wrap;
    margin-top: 16px;
    margin-right: 16px;
    cursor: pointer;
    font-family: "Roboto";
    -webkit-font-smoothing: antialiased;
    
    :hover {
        background: #282A2E;
   background-image: -webkit-linear-gradient(top, #282A2E, #41577A);
   background-image: -moz-linear-gradient(top, #282A2E, #41577A);
   background-image: -ms-linear-gradient(top, #282A2E, #41577A);
   background-image: -o-linear-gradient(top, #282A2E, #41577A);
   background-image: -webkit-gradient(to bottom, #282A2E, #41577A);
    }
`;
