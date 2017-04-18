/*
Aufgabe: Aufgabe 4
Name: Lisa Meister
Matrikel: 254761
Datum: 06.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Himmel
        crc2.beginPath();
        crc2.moveTo(0, 230); //Wiese Startpunkt
        crc2.lineTo(0, 0);
        crc2.lineTo(400, 0);
        crc2.lineTo(400, 300);
        crc2.fillStyle = "#D6EAF8";
        crc2.fill();
        drawMountain(300, 170, "#BDC3C7", "#BDC3C7");
        //Sonne
        crc2.beginPath();
        crc2.arc(110, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F8C471";
        crc2.fill();
        //Wiese
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(400, 200);
        crc2.lineTo(400, 300);
        crc2.lineTo(0, 300);
        crc2.closePath();
        //        crc2.fillStyle = "#7DCEA0";
        crc2.fillStyle = "#89bc71";
        crc2.fill();
        //        var flowers = [
        //            drawFlower(randomX, randomY, "#196F3D", "#F8C471", "#FBFCFC"),
        //            drawTulip(randomX, randomY, "#196F3D", "#CB4335")
        //        ];
        var colors = [
            "#FBFCFC", "#CB4335", "#2E86C1", "#AF7AC5"
        ];
        for (var i = 0; i < 25; i++) {
            var randomX = (Math.random() * (400 - 1)) + 1;
            var randomY = (Math.random() * (300 - 230)) + 230;
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            //            var randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
            console.log("X ist " + randomX, "Y ist " + randomY, randomFlower);
            var randomFlower = Math.floor((Math.random() * 2)) + 1;
            if (randomFlower == 1) {
                drawFlower(randomX, randomY, "#196F3D", "#F8C471", randomColor);
            }
            else {
                drawTulip(randomX, randomY, "#196F3D", randomColor);
            }
        }
        drawTree(40, 275);
        //        drawFlower(60, 260, "#196F3D", "#F8C471", "#FBFCFC");
        //        drawTulip(100, 280, "#196F3D", "#CB4335");
        drawCloud(160, 90, "white");
        function drawTree(_x, _y) {
            //Stamm 20, 250
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 20, _y);
            //Ast  
            crc2.lineTo(_x + 20, _y - 65);
            crc2.lineTo(_x + 40, _y - 65);
            crc2.lineTo(_x + 40, _y - 60);
            crc2.lineTo(_x + 20, _y - 60);
            //stamm
            crc2.lineTo(_x + 20, _y - 100);
            crc2.lineTo(_x, _y - 100);
            crc2.fillStyle = "#8e795e";
            crc2.fill();
            crc2.closePath();
            //Krone
            crc2.fillStyle = "#2d774c";
            crc2.beginPath();
            crc2.arc(_x + 10, _y - 110, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.arc(_x + 30, _y - 120, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.arc(_x + 20, _y - 140, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.arc(_x, _y - 120, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.arc(_x - 10, _y - 95, 10, 0, 2 * Math.PI);
            crc2.fill();
        }
        function drawMountain(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x - 50, _y + 50);
            crc2.lineTo(_x, _y - 80); //Spitze
            crc2.lineTo(_x + 20, _y - 50);
            crc2.lineTo(_x + 40, _y - 60); //2.Spitze
            crc2.lineTo(_x + 80, _y + 40);
            crc2.closePath();
            crc2.fill();
            //        crc2.stroke();
            //Bergkuppe
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.moveTo(_x - 15, _y - 40);
            crc2.lineTo(_x, _y - 30);
            crc2.lineTo(_x + 10, _y - 40);
            crc2.lineTo(_x + 20, _y - 20);
            crc2.lineTo(_x + 30, _y - 35);
            crc2.lineTo(_x + 50, _y - 30);
            crc2.lineTo(_x + 40, _y - 60); //2.Spitze
            crc2.lineTo(_x + 20, _y - 50);
            crc2.lineTo(_x, _y - 80); //Spitze
            crc2.lineTo(_x - 15, _y - 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
        function drawFlower(_x, _y, _stalkColor, _centerColor, _petalColor) {
            //stalk
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 20);
            crc2.stroke();
            crc2.closePath();
            //leafs
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 7);
            crc2.lineTo(_x + 5, _y - 7);
            crc2.lineTo(_x, _y);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = _stalkColor;
            crc2.fill();
            //petals
            crc2.fillStyle = _petalColor;
            crc2.beginPath();
            crc2.arc(_x, _y - 25, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 5, _y - 20, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 5, _y - 20, 5, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y - 15, 5, 0, 2 * Math.PI);
            crc2.fill();
            //center
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = _centerColor;
            crc2.fill();
        }
        function drawTulip(_x, _y, _stalkColor, _petalColor) {
            //stalk
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 20);
            crc2.stroke();
            crc2.closePath();
            //leafs
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 12);
            crc2.lineTo(_x - 5, _y - 18);
            crc2.lineTo(_x, _y - 5);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = _stalkColor;
            crc2.fill();
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 12);
            crc2.lineTo(_x + 5, _y - 18);
            crc2.lineTo(_x, _y - 5);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = _stalkColor;
            crc2.fill();
            //blossom
            crc2.fillStyle = _petalColor;
            crc2.beginPath();
            crc2.moveTo(_x, _y - 25);
            crc2.arc(_x, _y - 30, 10, 0, Math.PI);
            crc2.fillStyle = _petalColor;
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = _petalColor;
            crc2.moveTo(_x - 5, _y - 25);
            crc2.lineTo(_x, _y - 32);
            crc2.lineTo(_x + 5, _y - 25);
            crc2.closePath();
            crc2.fill();
            //    crc2            
        }
        function drawCloud(_x, _y, _fillColor) {
            crc2.fillStyle = _fillColor;
            crc2.beginPath();
            crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x - 30, _y + 15, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(_x + 35, _y + 8, 28, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=04.js.map