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
    let canvas;
    canvas = document.getElementsByTagName("canvas")[0];
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x += dx;
        y += dy;
    }
    setInterval(draw, 10);
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=withoutobjects.js.map