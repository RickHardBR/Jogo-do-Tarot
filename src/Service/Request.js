import axios from "axios"

export const getCards = (cards, setCards) => {
    axios.get('tarot.json')
        .then((res) => {
            console.log(cards.cards)
            setCards(res.data.cards)
        })
        .catch((err) => {
            console.log(err)
        })
}