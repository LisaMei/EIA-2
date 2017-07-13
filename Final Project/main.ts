/*  
Aufgabe: Finales Projekt
Name: Lisa Meister
Matrikel: 254761
Datum: 13.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace Bricks {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let ball: Ball;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);   

        ball = new Ball(crc2.canvas.width / 2, crc2.canvas.height - 30);
        
        setInterval(animate, 10);
    }//init
    
    function animate(): void {
        ball.update();
    }
} //namespace
