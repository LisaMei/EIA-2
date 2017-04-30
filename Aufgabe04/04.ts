/*  
Aufgabe: Aufgabe 4
Name: Lisa Meister
Matrikel: 254761
Datum: 06.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace L4_Canvas {

    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;
    let x: number[] = [];
    let y: number[] = [];
    let beeNumber: number = 10;
    let imgData: ImageData;



    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        console.log(crc2, canvas);
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
        animate();

        for (let i: number = 0; i < beeNumber; i++) {
            x[i] = 65; //Start am beeHive
            y[i] = 183;
        }
        window.setTimeout(animate, 20, canvas.width, canvas.height);
        canvas.addEventListener("click", addBee); //Canvas lauscht auf Klick -> neue Biene
    }


    function animate(): void {
        console.log("Animate called");
        crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden

        for (let i: number = 0; i < beeNumber; i++) {
            x[i] += Math.random() * 4.5 - 2;
            y[i] += Math.random() * 4 - 2;

            //Bienen kommen immer an der entgegengesetzten Seite wieder ins Bild geflogen
            if (x[i] > crc2.canvas.width) {
                x[i] = 0;
            }
            if (y[i] > crc2.canvas.height) {
                y[i] = 0;
            }
            if (y[i] < 0) {
                y[i] = crc2.canvas.height;
            }

            drawBee(x[i], y[i]); //Bienen erhalten neue Werte aus Schleife
        }
        window.setTimeout(animate, 20);
    }


    function drawBee(_x: number, _y: number): void {

        //hinterer Flügel
        crc2.beginPath();
        crc2.arc(_x + 2, _y - 1, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#3ECFFF";
        crc2.stroke();

        //vorderer Flügel
        crc2.beginPath();
        crc2.arc(_x + 1, _y - 2, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#B2ECFF";
        crc2.stroke();

        //Stachel
        crc2.beginPath();
        crc2.moveTo(_x - 3, _y - 1); //obere Ecke Dreieck
        crc2.lineTo(_x - 5, _y); //linke Ecke
        crc2.lineTo(_x - 3, _y + 1);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();

        //Hinterteil
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#F8C471";
        crc2.fill();

        //Bienenkopf
        crc2.beginPath();
        crc2.arc(_x + 3, _y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#F8C471";
        crc2.fill();

        //Körpermitte
        crc2.beginPath();
        crc2.moveTo(_x - 1, _y - 3); //Rechteck linke obere Ecke
        crc2.lineTo(_x + 3, _y - 3);//Ecke rechts oben
        crc2.lineTo(_x + 3, _y + 3);//Ecke rechts unten
        crc2.lineTo(_x - 1, _y + 3); //Ecke links unten
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();

        //Auge
        crc2.beginPath();
        crc2.arc(_x + 4.5, _y - 0.5, 0.5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();
    }

    //neue Biene bei Klick
    function addBee(): void {
        x.push(65);
        y.push(183);
        beeNumber++;
    }

    //Himmel  
    function drawSky(): void {
        crc2.beginPath();
        crc2.moveTo(0, 230); //Wiese Startpunkt
        crc2.lineTo(0, 0);
        crc2.lineTo(400, 0);
        crc2.lineTo(400, 300);
        crc2.fillStyle = "#D6EAF8";
        crc2.fill();
    }

    //Wiese
    function drawLawn(): void {
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
    function drawSun(): void {
        crc2.beginPath();
        crc2.arc(110, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#F8C471";
        crc2.fill();
    }

    //BAUM
    function drawTree(_x: number, _y: number): void {
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
    function drawMountain(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
    function drawFlower(_x: number, _y: number, _stalkColor: string, _centerColor: string, _petalColor: string): void {
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
    function drawTulip(_x: number, _y: number, _stalkColor: string, _petalColor: string): void {
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
    function drawRandomFlowers(): void {
        //        var flowers = [
        //            drawFlower(randomX, randomY, "#196F3D", "#F8C471", "#FBFCFC"),
        //            drawTulip(randomX, randomY, "#196F3D", "#CB4335")
        //        ];
        var colors: string[] = [
            "#FBFCFC", "#CB4335", "#2E86C1", "#AF7AC5"
        ];


        for (var i = 0; i < 25; i++) {
            var randomX = (Math.random() * (400 - 1)) + 1;
            var randomY = (Math.random() * (300 - 230)) + 230;
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            //            var randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
            console.log("X ist " + randomX, "Y ist " + randomY, randomFlower);

            var randomFlower: number = Math.floor((Math.random() * 2)) + 1;
            if (randomFlower == 1) {
                drawFlower(randomX, randomY, "#196F3D", "#F8C471", randomColor);
            } else {
                drawTulip(randomX, randomY, "#196F3D", randomColor);
            }
        }

    }

    function drawCloud(_x: number, _y: number, _fillColor: string): void {
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

    function drawHive(_x: number, _y: number): void {
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

} //namespace







