/*
Aufgabe: Aufgabe 8
Name: Lisa Meister
Matrikel: 254761
Datum: 18.05.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Classes;
(function (Classes) {
    window.addEventListener("load", init);
    let bees = [];
    let nectarBees = [];
    //    let randomTargetX:number = targetX[Math.floor(Math.random() * targetX.length)];
    //    let randomTargetY:number = targetY[Math.floor(Math.random() * targetY.len)]  
    let flowers = [];
    let beeNumber = 10;
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Classes.crc2 = canvas.getContext("2d");
        Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
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
        for (let i = 0; i < 5; i++) {
            let r = new Classes.RegularFlower(200, 200);
            r.draw();
            flowers.push(r);
        }
        console.log("Blumen-Array: " + flowers);
        //Fertige Landschaft wird gespeichert
        imgData = Classes.crc2.getImageData(0, 0, Classes.crc2.canvas.width, Classes.crc2.canvas.height);
        for (let i = 0; i < beeNumber; i++) {
            let b = new Classes.Bee(65, 183);
            bees[i] = b;
        }
        for (let i = 0; i < 5; i++) {
            let targetX = flowers[Math.floor(Math.random() * flowers.length)].x;
            let targetY = flowers[Math.floor(Math.random() * flowers.length)].y;
            let nB = new Classes.NectarBee(65, 183, targetX, targetY);
            bees.push(nB);
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", addBee); //Canvas lauscht auf Klick -> neue Biene
        console.log(bees);
    }
    function animate() {
        Classes.crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            b.update(); //Bienen erhalten neue Werte aus Schleife
        }
        window.setTimeout(animate, 20);
    }
    //neue Biene bei Klick
    function addBee() {
        let b = new Classes.Bee(65, 183);
        b.setRandomStyle();
        bees.push(b);
        beeNumber++;
    }
    //Himmel  
    function drawSky() {
        Classes.crc2.beginPath();
        Classes.crc2.moveTo(0, 230); //Wiese Startpunkt
        Classes.crc2.lineTo(0, 0);
        Classes.crc2.lineTo(400, 0);
        Classes.crc2.lineTo(400, 300);
        Classes.crc2.fillStyle = "#D6EAF8";
        Classes.crc2.fill();
    }
    //Wiese
    function drawLawn() {
        Classes.crc2.beginPath();
        Classes.crc2.moveTo(0, 230);
        Classes.crc2.lineTo(400, 200);
        Classes.crc2.lineTo(400, 300);
        Classes.crc2.lineTo(0, 300);
        Classes.crc2.closePath();
        Classes.crc2.fillStyle = "#89bc71";
        Classes.crc2.fill();
    }
    //Sonne  
    function drawSun() {
        Classes.crc2.beginPath();
        Classes.crc2.arc(110, 70, 30, 0, 2 * Math.PI);
        Classes.crc2.fillStyle = "#F8C471";
        Classes.crc2.fill();
    }
    //BAUM
    function drawTree(_x, _y) {
        //Stamm 20, 250
        Classes.crc2.beginPath();
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.lineTo(_x + 20, _y);
        //Ast  
        Classes.crc2.lineTo(_x + 20, _y - 65);
        Classes.crc2.lineTo(_x + 40, _y - 65);
        Classes.crc2.lineTo(_x + 40, _y - 60);
        Classes.crc2.lineTo(_x + 20, _y - 60);
        //Rest Stamm
        Classes.crc2.lineTo(_x + 20, _y - 100);
        Classes.crc2.lineTo(_x, _y - 100);
        Classes.crc2.fillStyle = "#8e795e";
        Classes.crc2.fill();
        Classes.crc2.closePath();
        //Krone
        Classes.crc2.fillStyle = "#2d774c";
        Classes.crc2.beginPath();
        Classes.crc2.arc(_x + 10, _y - 110, 25, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.arc(_x + 30, _y - 120, 25, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.arc(_x + 20, _y - 140, 15, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.arc(_x, _y - 120, 30, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.arc(_x - 10, _y - 95, 10, 0, 2 * Math.PI);
        Classes.crc2.fill();
    }
    //BERG
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
        Classes.crc2.beginPath();
        Classes.crc2.fillStyle = _fillColor;
        Classes.crc2.strokeStyle = _strokeColor;
        Classes.crc2.moveTo(_x - 50, _y + 50);
        Classes.crc2.lineTo(_x, _y - 80); //Spitze
        Classes.crc2.lineTo(_x + 20, _y - 50);
        Classes.crc2.lineTo(_x + 40, _y - 60); //2.Spitze
        Classes.crc2.lineTo(_x + 80, _y + 40);
        Classes.crc2.closePath();
        Classes.crc2.fill();
        //        crc2.stroke();
        //Bergkuppe
        Classes.crc2.beginPath();
        Classes.crc2.fillStyle = "white";
        Classes.crc2.moveTo(_x - 15, _y - 40);
        Classes.crc2.lineTo(_x, _y - 30);
        Classes.crc2.lineTo(_x + 10, _y - 40);
        Classes.crc2.lineTo(_x + 20, _y - 20);
        Classes.crc2.lineTo(_x + 30, _y - 35);
        Classes.crc2.lineTo(_x + 50, _y - 30);
        Classes.crc2.lineTo(_x + 40, _y - 60); //2.Spitze
        Classes.crc2.lineTo(_x + 20, _y - 50);
        Classes.crc2.lineTo(_x, _y - 80); //Spitze
        Classes.crc2.lineTo(_x - 15, _y - 40);
        Classes.crc2.closePath();
        Classes.crc2.fill();
        Classes.crc2.stroke();
    }
    //Zufällige Blumenwiese
    function drawRandomFlowers() {
        for (var i = 0; i < 25; i++) {
            let f = new Classes.Flower(1, 1);
            f.drawRandomFlowers();
        }
    }
    function drawCloud(_x, _y, _fillColor) {
        Classes.crc2.fillStyle = _fillColor;
        Classes.crc2.beginPath();
        Classes.crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(_x - 30, _y + 15, 25, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.beginPath();
        Classes.crc2.arc(_x + 35, _y + 8, 28, 0, 2 * Math.PI);
        Classes.crc2.fill();
        Classes.crc2.closePath();
    }
    function drawHive(_x, _y) {
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "#CF882B";
        Classes.crc2.fillStyle = "#CF882B";
        Classes.crc2.moveTo(_x, _y);
        Classes.crc2.lineTo(_x + 15, _y);
        Classes.crc2.lineTo(_x + 20, _y + 20);
        Classes.crc2.lineTo(_x - 5, _y + 20);
        Classes.crc2.closePath();
        Classes.crc2.moveTo(_x - 5, _y + 20);
        Classes.crc2.lineTo(_x, _y + 25);
        Classes.crc2.lineTo(_x + 15, _y + 25);
        Classes.crc2.lineTo(_x + 20, _y + 20);
        Classes.crc2.stroke();
        Classes.crc2.fill();
        Classes.crc2.closePath();
        Classes.crc2.beginPath();
        Classes.crc2.strokeStyle = "#CF882B";
        Classes.crc2.moveTo(_x + 5, _y);
        Classes.crc2.lineTo(_x + 5, _y - 5);
        Classes.crc2.lineTo(_x + 10, _y - 5);
        Classes.crc2.lineTo(_x + 10, _y);
        Classes.crc2.stroke();
        Classes.crc2.closePath();
        Classes.crc2.beginPath();
        Classes.crc2.moveTo(_x + 5, _y + 15);
        Classes.crc2.lineTo(_x + 10, _y + 15);
        Classes.crc2.lineTo(_x + 12, _y + 20);
        Classes.crc2.lineTo(_x + 3, _y + 20);
        Classes.crc2.lineTo(_x + 5, _y + 15);
        Classes.crc2.strokeStyle = "#A66F27";
        Classes.crc2.fillStyle = "#A66F27";
        Classes.crc2.stroke();
        Classes.crc2.fill();
    }
})(Classes || (Classes = {})); //namespace
//# sourceMappingURL=main.js.map