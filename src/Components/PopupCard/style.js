import styled from "styled-components";


export const PopupCardContainer = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display:flex;
    width:100%;
    height: 100vh;
    overflow-y: auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const DetailsContainer = styled.div`
    background-color: white;
    display:flex;
    width: 50vw;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 16px;
    flex-wrap: wrap;
    margin-top: 32px;
    margin-bottom: 32px;
    border-radius: 10px;

    @media (max-width: 720px) {
    justify-content: center;
    margin: 1rem auto 3rem auto;
    gap: 1rem;
    width: 90vw;
  }
`
export const ImgCard = styled.img`
    width: 12vw;
    height: 35vh;
    border-color: black;
    border-style: solid;
    border-radius: 10px;
    border-width: 4px;
    @media (max-width: 720px) {
    justify-content: center;
    margin: 1rem auto 3rem auto;
    gap: 1rem;
    width: 50vw;
  }
`

export const PopupTexts = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 32vw;
    font-family: 'Roboto', serif;
    text-align: justify;
    hyphens: auto;

    @media (max-width: 720px) {
    justify-content: center;
    margin: 1rem auto 3rem auto;
    gap: 1rem;
    width: 70vw;
  }
`