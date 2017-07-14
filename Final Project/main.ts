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
    let imgData: ImageData;

    let barX: number;
    let barY: number;
    export let rightKey:boolean=false;
    export let leftKey:boolean=false;




    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        let bar: Bar = new Bar((canvas.width - this.width) / 2, barY);
        bar.draw();
        let ball: Ball = new Ball();
        ball.draw();

        setInterval(function() {
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            ball.update();
            bar.draw();
                
            document.addEventListener("keydown", bar.handleDownKey);
            document.addEventListener("keyup", bar.handleUpKey);
            
        }, 10);






    }//init



    






} //namespace