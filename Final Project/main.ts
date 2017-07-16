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
    let enterKey: boolean = false;
    export let bar: Bar;
    export let gameOver: boolean = false;
    

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        
        bar = new Bar(0, canvas.height - 40); // (canvas.width-this.width)/2 !?
        
        
        bar.draw();
        console.log(bar.x, bar.y);
        let ball: Ball = new Ball();
        ball.draw();


        /*
        
        ANIMATION
        
        */

        setInterval (function () {
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height); //clear old path
            
            ball.update();
            bar.draw();

            document.addEventListener("keydown", handleKeyPress, false);
            document.addEventListener("keyup", handleKeyRelease, false);
            
            if (gameOver == true) {
                document.addEventListener("keydown", handleEnterPress, false);
                document.addEventListener("keyup", handleEnterRelease, false);
                
            }
        },10);

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
            }
            else if (_event.keyCode == 37) {//left
                leftKey = false;
            }
        }//handleKeyRelease
        
        
        
         //return key
        function handleEnterPress(_event: KeyboardEvent) {
            if (_event.keyCode == 13) {
                enterKey = true;
                reloadGame();
            }
           
        }
        function handleEnterRelease (_event: KeyboardEvent) {
            if (_event.keyCode == 13) {
                enterKey = false;
            }
        }
        
        function reloadGame(): void {
//            setTimeout(function() {
                        document.location.reload();
//                    }, 3000);    
        }

    }//init
} //namespace