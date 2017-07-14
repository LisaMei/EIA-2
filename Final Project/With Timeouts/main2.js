/*
Aufgabe: Finales Projekt
Name: Lisa Meister
Matrikel: 254761
Datum: 13.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Bricks2;
(function (Bricks2) {
    window.addEventListener("load", init);
    let imgData;
    let ball;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Bricks2.crc2 = canvas.getContext("2d");
        Bricks2.crc2.fillRect(0, 0, canvas.width, canvas.height);
        ball = new Bricks2.Ball();
        ball.draw();
        imgData = Bricks2.crc2.getImageData(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height);
        window.setTimeout(animate, 20);
    } //init
    function animate() {
        Bricks2.crc2.putImageData(imgData, 0, 0);
        //        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //        let ball:Ball = new Ball();
        ball.update();
        window.setTimeout(animate, 20);
    }
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=main2.js.map