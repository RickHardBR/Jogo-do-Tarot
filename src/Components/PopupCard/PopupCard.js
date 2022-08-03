import React from "react";
import { BASE_URL } from "../../Constants/BASE_URL";
import { DetailsContainer, PopupCardContainer, ImgCard, PopupTexts } from "./style";


export default function PopupCard({ trigger, setTrigger, card }) {


    return trigger ? (
        <PopupCardContainer onClick={() => setTrigger(false)}>
            <DetailsContainer>
                <ImgCard
                src={`${BASE_URL}/${card.image}`}
                alt={card.name} />
                <PopupTexts>
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </PopupTexts>
            </DetailsContainer>
        </PopupCardContainer>
    ) : (
        ""
    )
        ;
}