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


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
//        crc2.fillRect(0, 0, canvas.width, canvas.height);


        let ball = new Ball();
        ball.draw();
        
        setInterval(function() {
            ball.update();
        }, 10);
        
        
        
        
        
    }//init










} //namespace