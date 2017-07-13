/*
Aufgabe: Finales Projekt
Name: Lisa Meister
Matrikel: 254761
Datum: 13.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Bricks;
(function (Bricks) {
    let canvas;
    canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
    Bricks.crc2 = canvas.getContext("2d");
    window.addEventListener("load", init);
    function init(_event) {
        Bricks.crc2.fillRect(0, 0, canvas.width, canvas.height);
    } //init
    let ball = new Bricks.Ball(Bricks.crc2.canvas.width / 2, Bricks.crc2.canvas.height - 30);
    setInterval(function () {
        ball.update();
    }, 10);
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=main.js.map