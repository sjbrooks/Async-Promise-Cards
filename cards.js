let deckID;
let shuffleDeckURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
// let drawCardURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`
// let pilesURL = `https://deckofcardsapi.com/api/deck/${deckID}/pile/<<pile_name>>/add/?cards=AS,2S`
// let listingCardsInPilesURL =`https://deckofcardsapi.com/api/deck/${deckID}/pile/<<pile_name>>/list/`


async function getNewDeck() {
    let response = await $.getJSON(shuffleDeckURL)
    console.log("deck   ", response);
    deckID = response.deck_id;
    console.log("deckID is   ", deckID);
}


async function drawCard() {
    let drawURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
    let drawnCardObj = await $.getJSON(drawURL);
    console.log("drawnCardObj    ", drawnCardObj)
    let drawnCard = drawnCardObj.cards[0];
    console.log(`${drawnCard.value} of ${drawnCard.suit} from deck${deckID}`);
    let cardPNG = drawnCard.image;
    $('.card').append(`<img width="30%" height="auto" src="${cardPNG}">`);
};

$(function () {
    getNewDeck()
    $('.new-deck').on('click', getNewDeck)
    $('.draw-card').on('click', drawCard)

})