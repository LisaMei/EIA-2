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
    window.addEventListener("load", init);
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Bricks.crc2 = canvas.getContext("2d");
        //        crc2.fillRect(0, 0, canvas.width, canvas.height);
        let ball = new Bricks.Ball();
        ball.draw();
        setInterval(function () {
            ball.update();
        }, 10);
    } //init
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=main.js.map