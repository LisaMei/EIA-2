/*  
Aufgabe: Finales Projekt
Name: Lisa Meister
Matrikel: 254761
Datum: 13.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace Bricks2 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;
    let ball:Ball;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        
        ball= new Ball();
        
        ball.draw();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setTimeout(animate, 20);
        
    }//init

    


    

    function animate() {
        crc2.putImageData(imgData, 0, 0);
//        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
//        let ball:Ball = new Ball();
        ball.update();
        window.setTimeout(animate, 20);
    }
    








} //namespace