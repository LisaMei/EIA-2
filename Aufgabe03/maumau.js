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
    let hand = document.getElementById("hand");
    deck.addEventListener("click", take);
    hand.addEventListener("click", giveAway);
    //for (let i:number = 0;i<5;i++){
    //    
    //    function take(_event: Event): void {
    //   let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
    //        hand.innerText += randomCard;
    //   
    //        console.lognt);
    //    }
    //}
    function take(_event) {
        let randomCard = allCards[Math.floor(Math.random() * allCards.length)];
        hand.innerText += randomCard;
        console.log(Event);
    }
    function giveAway() {
    }
});
//# sourceMappingURL=maumau.js.map