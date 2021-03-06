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
    let randomBeeColor;
    let randomStripeColor;
    let beeColors = [
        "#F8C471", "#f7a92c", "#ffca2b"
    ];
    let stripeColors = ["#000000", "#443622"];
    window.addEventListener("load", init);
    let crc2;
    //    let x: number[] = [];
    //    let y: number[] = [];
    let bees = [];
    let beeNumber = 10;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Landschaft Aufrufe
        drawSky();
        drawMountain(300, 170, "#BDC3C7", "#BDC3C7");
        drawLawn();
        drawSun();
        drawHive(65, 183);
        drawTree(40, 275);
        //        drawFlower(60, 260, "#196F3D", "#F8C471", "#FBFCFC");
        //        drawTulip(100, 280, "#196F3D", "#CB4335");
        drawRandomFlowers();
        drawCloud(160, 90, "white"); //Wolke zeichnen
        //Fertige Landschaft wird gespeichert
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i = 0; i < beeNumber; i++) {
            let b = { x: 65, y: 183, color: "#F8C471", stripeColor: "#000000" };
            bees[i] = b;
            randomBeeColor = beeColors[Math.floor(Math.random() * beeColors.length)];
            randomStripeColor = stripeColors[Math.floor(Math.random() * stripeColors.length)];
            b.color = randomBeeColor;
            b.stripeColor = randomStripeColor;
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", addBee); //Canvas lauscht auf Klick -> neue Biene
    }
    function animate() {
        crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            b.x += Math.random() * 4.5 - 2;
            b.y += Math.random() * 4 - 2;
            //Bienen kommen immer an der entgegengesetzten Seite wieder ins Bild geflogen
            if (b.x > crc2.canvas.width) {
                b.x = 0;
            }
            if (b.y > crc2.canvas.height) {
                b.y = 0;
            }
            if (b.y < 0) {
                b.y = crc2.canvas.height;
            }
            drawBee(b); //Bienen erhalten neue Werte aus Schleife
        }
        window.setTimeout(animate, 20);
    }
    function drawBee(_b) {
        //hinterer Flügel
        crc2.beginPath();
        crc2.arc(_b.x + 2, _b.y - 1, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#3ECFFF";
        crc2.stroke();
        //vorderer Flügel
        crc2.beginPath();
        crc2.arc(_b.x + 1, _b.y - 2, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#B2ECFF";
        crc2.stroke();
        //Stachel
        crc2.beginPath();
        crc2.moveTo(_b.x - 3, _b.y - 1); //obere Ecke Dreieck
        crc2.lineTo(_b.x - 5, _b.y); //linke Ecke
        crc2.lineTo(_b.x - 3, _b.y + 1);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();
        //Hinterteil
        crc2.beginPath();
        crc2.arc(_b.x, _b.y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        //        crc2.fillStyle = "#F8C471";
        crc2.fillStyle = _b.color;
        crc2.fill();
        //Bienenkopf
        crc2.beginPath();
        crc2.arc(_b.x + 3, _b.y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        //        crc2.fillStyle = "#F8C471";
        crc2.fillStyle = _b.color;
        crc2.fill();
        //Körpermitte
        crc2.beginPath();
        crc2.moveTo(_b.x - 1, _b.y - 3); //Rechteck linke obere Ecke
        crc2.lineTo(_b.x + 3, _b.y - 3); //Ecke rechts oben
        crc2.lineTo(_b.x + 3, _b.y + 3); //Ecke rechts unten
        crc2.lineTo(_b.x - 1, _b.y + 3); //Ecke links unten
        crc2.closePath();
        crc2.fillStyle = _b.stripeColor;
        crc2.fill();
        //Auge
        crc2.beginPath();
        crc2.arc(_b.x + 4.5, _b.y - 0.5, 0.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();
    }
    //neue Biene bei Klick
    function addBee() {
        let b = { x: 65, y: 183, color: "#F8C471", stripeColor: "#000000" };
        randomBeeColor = beeColors[Math.floor(Math.random() * beeColors.length)];
        randomStripeColor = stripeColors[Math.floor(Math.random() * stripeColors.length)];
        b.color = randomBeeColor;
        b.stripeColor = randomStripeColor;
        bees.push(b);
        beeNumber++;
    }
    //Himmel  
    function drawSky() {
        crc2.beginPath();
        crc2.moveTo(0, 230); //Wiese Startpunkt
        crc2.lineTo(0, 0);
        crc2.lineTo(400, 0);
        crc2.lineTo(400, 300);
        crc2.fillStyle = "#D6EAF8";
        crc2.fill();
    }
    //Wiese
    function drawLawn() {
        crc2.beginPath();
        crc2.moveTo(0, 230);
        crc2.lineTo(400, 200);
        crc2.lineTo(400, 300);
        crc2.lineTo(0, 300);
        crc2.closePath();
        //        crc2.fillStyle = "#7DCEA0";
        crc2.fillStyle = "#89bc71";
        crc2.fill();
    }
    //Sonne  
    function drawSun() {
        crc2.beginPath();
        crc2.arc(110, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F8C471";
        crc2.fill();
    }
    //BAUM
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
        //Rest Stamm
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
    //BERG
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
    //BLUME
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
    //TULPE
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
    }
    //Zufällige Blumenwiese
    function drawRandomFlowers() {
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
        crc2.closePath();
    }
    function drawHive(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "#CF882B";
        crc2.fillStyle = "#CF882B";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 15, _y);
        crc2.lineTo(_x + 20, _y + 20);
        crc2.lineTo(_x - 5, _y + 20);
        crc2.closePath();
        crc2.moveTo(_x - 5, _y + 20);
        crc2.lineTo(_x, _y + 25);
        crc2.lineTo(_x + 15, _y + 25);
        crc2.lineTo(_x + 20, _y + 20);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.strokeStyle = "#CF882B";
        crc2.moveTo(_x + 5, _y);
        crc2.lineTo(_x + 5, _y - 5);
        crc2.lineTo(_x + 10, _y - 5);
        crc2.lineTo(_x + 10, _y);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 15);
        crc2.lineTo(_x + 10, _y + 15);
        crc2.lineTo(_x + 12, _y + 20);
        crc2.lineTo(_x + 3, _y + 20);
        crc2.lineTo(_x + 5, _y + 15);
        crc2.strokeStyle = "#A66F27";
        crc2.fillStyle = "#A66F27";
        crc2.stroke();
        crc2.fill();
    }
})(L4_Canvas || (L4_Canvas = {})); //namespace
//# sourceMappingURL=04.js.map