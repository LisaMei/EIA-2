/*
Aufgabe: Aufgabe 3
Name: Lisa Meister
Matrikel: 254761
Datum: 06.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    let allCards = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];
    let deck = document.getElementById("deck");
    let discard = document.getElementById("discard");
    let hand = document.getElementById("hand");
    let handCards = []; //Array mit 5 gezogenen Karten 
    //    let i: number = 0;
    deck.addEventListener("click", take);
    function take(_event) {
        if (handCards.length < 5) {
            let handCard = document.createElement("div"); //gezogene Karte
            document.body.appendChild(handCard); //Div an den Body hängen
            let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
            handCard.innerText += randomCard; //Zufallswert in gezogener Karte speichern
            //            i++; //Anzahl der Karten in der Hand plus 1
            handCards.push(randomCard);
            allCards.splice(allCards.indexOf(randomCard), 1);
            handCard.addEventListener("click", giveAway);
        }
        console.log(Event, handCards);
    }
    function giveAway(_event) {
        let clickedCard = _event.target;
        let cardContent = clickedCard.innerText;
        clickedCard.style.display = "none"; //Karte ausblenden
        //        i--;
        handCards.splice(handCards.indexOf(cardContent), 1);
        discard.innerText = cardContent; //Wert der geklickten Karte auf dem Ablagestapel anzeigen
        console.log(cardContent, Event);
    }
});
//# sourceMappingURL=maumau.js.map