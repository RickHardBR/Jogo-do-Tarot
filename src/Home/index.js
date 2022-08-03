import React from "react";
import { useNavigate } from 'react-router-dom'
import * as H from "./style";
import BackgroundImage from "../Assets/psicodelico.jpg";

export default function Home (){
  const history = useNavigate()

  return (
    <H.Container>
      <H.ImageContainer src={BackgroundImage} />

        <H.ButtonContainer>
          <H.Title>O tarot</H.Title>
 
          <H.Subtitle>
          Tarô é uma ferramenta de adivinhação usada para obter clareza sobre qualquer situação. Para o passado, presente e futuro, a primeira carta representa o passado. Use este cartão para obter mais clareza sobre as influências passadas que afetam sua consulta. A segunda carta representa o presente. Use este cartão para obter clareza sobre as influências atuais que afetam sua consulta. A última carta representa o futuro. Use este cartão para obter mais informações sobre onde seu caminho atual está levando você.
          </H.Subtitle>

        <H.PlayButton type="button" onClick={() => history("/cards")}>
          Iniciar
        </H.PlayButton>
        </H.ButtonContainer>
    </H.Container>
  );
}