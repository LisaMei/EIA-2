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

    export let rightKey: boolean = false;
    export let leftKey: boolean = false;
    let enterKey: boolean = false;
    export let bar: Bar;
    export let ball: Ball;

    export let gameOver: boolean=false;
    export let bricks: Brick[] = [];
    let imgData: ImageData;
    let brickNumber: number = 20;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        bar = new Bar(canvas.width/2-50, canvas.height - 40); // (canvas.width-this.width)/2 !?
        ball = new Ball();
        createBrickField();
               
        window.setTimeout(animate, 10);
    }//init


    document.addEventListener("keydown", handleKeyPress, false);
    document.addEventListener("keyup", handleKeyRelease, false);


    function animate(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height); //clear old path       
        spliceDeadBricks();
        drawActiveBricks();
        
        ball.update();      
        bar.draw();    

        if (gameOver == true) {
            document.addEventListener("keydown", handleEnterKey, false);
            document.addEventListener("keyup", handleEnterRelease, false);
        }
        window.setTimeout(animate, 10);
    } //animate


    function createBrickField(): void {
        let brickPosx: number = 50;
        let brickPosy: number = 50;
        for (let i: number = 0; i < brickNumber; i++) {

            let brick: Brick = new Brick(brickPosx, brickPosy);
            if (i % 5 == 0 && i != 0) {
                brickPosx = 50;
                brickPosy += brick.ySpacer;
            } else if (i != 0) {
                brickPosx += brick.xSpacer;
            }
            bricks[i] = brick; //brick in Array legen
        }
    }//createBrickField

    function drawActiveBricks(): void {
        for (let i: number = 0; i < bricks.length; i++) {
            bricks[i].draw();
        }
    }

    
    function spliceDeadBricks(): void {
        for (let i: number = 0; i < bricks.length; i++) {
            //bricks[i].checkStatus();
            let hit:boolean= ball.detectCollision(bricks[i].x,bricks[i].y,bricks[i].width,bricks[i].height);
                    
            if (hit == true) {
                bricks.splice(i,1);
                console.log("brick spliced");
            }           
        }
    }//spliceBricks

    //Key is pressed
    function handleKeyPress(_event: KeyboardEvent) {
        if (_event.keyCode == 39) {//right
            rightKey = true;
//            console.log("rightKey: " + rightKey);
            bar.move();
        }
        else if (_event.keyCode == 37) {//left
            leftKey = true;
//            console.log("leftKey: " + leftKey);
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


    //enter key
    function handleEnterKey(_event: KeyboardEvent) {
        if (_event.keyCode == 13) {
            enterKey = true;
            reloadGame();
        }
    }

    function handleEnterRelease(_event: KeyboardEvent) {
        if (_event.keyCode == 13) {
            enterKey = false;
        }
    }

    function reloadGame(): void {
        document.location.reload();
    }

    
} //namespace