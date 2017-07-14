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
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Bricks.crc2 = canvas.getContext("2d");
        Bricks.crc2.fillRect(0, 0, canvas.width, canvas.height);
        let ball = new Bricks.Ball();
        ball.draw();
        setInterval(function () {
            //            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            ball.update();
        }, 10);
    } //init
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=main.js.map