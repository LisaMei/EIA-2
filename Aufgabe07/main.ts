/*  
Aufgabe: Aufgabe 4
Name: Lisa Meister
Matrikel: 254761
Datum: 06.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace Classes {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let bees: Bee[] = [];
    let flowers: Flower[] = [];
    let beeNumber: number = 10;
    let imgData: ImageData;




    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
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

        for (let i: number = 0; i < 5; i++) {
            
            let flower: Flower = new Flower(200, 200);
            flower.drawTulip();
            flowers.push(flower);
        }

        console.log(flowers);

        //Fertige Landschaft wird gespeichert
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);



        for (let i: number = 0; i < beeNumber; i++) {
            let b: Bee = new Bee(65, 183);
            bees[i] = b;
            b.setRandomStyle();

        }

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", addBee); //Canvas lauscht auf Klick -> neue Biene

    }


    function animate(): void {
        crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden

        for (let i: number = 0; i < bees.length; i++) {
            let b: Bee = bees[i];
            b.update(); //Bienen erhalten neue Werte aus Schleife
        }
        window.setTimeout(animate, 20);
    }


    //neue Biene bei Klick
    function addBee(): void {
        let b: Bee = new Bee(65, 183);
        b.setRandomStyle();
        bees.push(b);
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





    //Zufällige Blumenwiese
    function drawRandomFlowers(): void {
        for (var i = 0; i < 25; i++) {
            //            let randomPosition:number = f.x;
            let f: Flower = new Flower(1, 1);
            f.drawRandomFlowers();
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







