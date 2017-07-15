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
    export let rightKey: boolean = false;
    export let leftKey: boolean = false;
    export let barX: number;
    export let barY: number;
    export let barWidth:number=100;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        barX = canvas.width / 2;
        barY = canvas.height - 40;
        let bar: Bar = new Bar(barX, barY); // (canvas.width-this.width)/2 !?
        console.log(bar.x, bar.y);
        bar.draw();
        let ball: Ball = new Ball();
        ball.draw();


        /*
        
        ANIMATION
        
        */

        setInterval(function() {
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height); //clear old path
            ball.update();
            bar.draw();

            document.addEventListener("keydown", handleKeyPress, false);
            document.addEventListener("keyup", handleKeyRelease, false);
            
        }, 10);

        //Key is pressed
        function handleKeyPress(_event: KeyboardEvent) {
            if (_event.keyCode == 39) {//right
                rightKey = true;
                console.log("rightKey: " + rightKey);
                bar.move();
            }
            else if (_event.keyCode == 37) {//left
                leftKey = true;
                console.log("leftKey: " + leftKey);
                bar.move();
            }
        }//handleDownkey


        //Key is released
        function handleKeyRelease(_event: KeyboardEvent) {
            if (_event.keyCode == 39) {//right
                rightKey = false;
                bar.move();
            }
            else if (_event.keyCode == 37) {//left
                leftKey = false;
                bar.move();
            }
        }//handleKeyRelease




    }//init










} //namespace