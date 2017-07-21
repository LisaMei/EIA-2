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

    export let playing: boolean = false;
    export let gameOver: boolean = false;
    let win: boolean = false;
    let score: number = 0;
    

    export let rightKey: boolean = false;
    export let leftKey: boolean = false;

    export let bar: Bar;
    export let ball: Ball;
//    export let bricks: Brick[] = []; //array for brickfield
    let brickNumber: number = 20;
    
        let bricks: Brick[][] = [];   
        let columnNr: number = 5;
        let rowNr: number= 4;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        bar = new Bar(canvas.width / 2 - 50, canvas.height - 40); // (canvas.width-this.width)/2 !?
        ball = new Ball();
        createBrickField();
        drawStartScreen();

        //Eventlisteners
        document.addEventListener("keydown", handleKeyPress, false);
        document.addEventListener("keyup", handleKeyRelease, false);
        canvas.addEventListener("click", handleMouseClick, false);
        document.addEventListener("mousemove", handleMouseMove, false);
        canvas.addEventListener("touchstart", handleTouchStart, false);
        canvas.addEventListener("touchmove", handleTouchMove, false);
        //        window.addEventListener("resize", resizeCanvas, false);      
    }//init

    //start actual game
    function startGame(): void {
        window.setTimeout(animate, 10);
        playing = true;
    }

    function animate(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height); //clear old paths       

        drawActiveBricks();
        spliceDeadBricks();
        bar.draw();
        
        if (win == false) {
            ball.update();
        }
        drawScore();
        if (gameOver == true) {
            drawGameOverScreen();
            //            document.addEventListener("touchstart", handleTouchStart, false);
        }
        if (gameOver == false && score > 5) { //YOU WIN
            win = true;
            drawWinScreen();
        }
        window.setTimeout(animate, 10);
    } //animate


//    function createBrickField(): void {
//        let brickPosx: number = 50; //starting pos
//        let brickPosy: number = 50;
//        
//        for (let i: number = 1; i <= brickNumber; i++) {  //bei 1 starten, um Proeblem mit 0 zu umgehen
//            let brick: Brick = new Brick(brickPosx, brickPosy);
//            let brick2: Brick2 = new Brick2(brickPosx, brickPosy);
//            if (i % 5 == 0) { //neue Reihe
//                brickPosx = 50;
//                brickPosy += brick.ySpacer;
//
//            } else {// x spacing zum nächsten brick
//                brickPosx += brick.xSpacer;
//            }
//            brick.setRandomColor();
//            if (i>15) {
//                bricks[i-1] = brick2;
//            } else {
//                bricks[i-1] = brick; //brick in Array legen
////                console.log(i + " " + bricks[i].x + " Spacer: " + bricks[i].xSpacer);
//            }
//        }
//        
//    }//createBrickField

        //2d array version
        function createBrickField(): void {
            
            let brickPosx: number;
            let brickPosy: number;
            let brickPadding = 10;
            let offsetTop = 20;
            let offsetLeft = 20;
    
            for (let c: number = 0; c < columnNr; c++) {
                bricks[c] = []; //in den Spaltenarray einen Array legen
                for (let r: number = 0; r < rowNr; r++) {
                    let brick: Brick = new Brick(brickPosx, brickPosy);  
                    bricks[c][r] = brick;                  
                    bricks[c][r].x = 0;
                    bricks[c][r].y = 0;
                    bricks[c][r].x = brickPosx;
                    bricks[c][r].y = brickPosy;
                    brickPosx = (c*(brick.width+brick.spacer))+offsetLeft;
                    brickPosy = (r*(brick.height+brick.spacer))+offsetTop;
                    
                    //special bricks
                }
            }   
        }

    
         //2d array version
        function drawActiveBricks(): void {  
            for (let c: number = 0; c < columnNr; c++) {            
                for (let r: number = 0; r < rowNr; r++) {
                    var b = bricks[c][r];
                    b.draw();
                }
            }
        }


//    function drawActiveBricks(): void {
//        for (let i: number = 0; i < bricks.length; i++) {
//            bricks[i].draw();
//
//        }
//    }

        //2d array version
        function spliceDeadBricks(): void {
           
            for (let c = 0; c < columnNr; c++) {
                for (let r = 0; r < rowNr; r++) {
                    let b = bricks[c][r];
                    let hit: boolean = ball.detectCollision(b.x, b.y, b.width, b.height);
                    if (hit == true && b.lives==0) {
                        bricks.splice(r, 1);
                        console.log("brick spliced");
                        score++;
                    }
                }
                }
            }


//    function spliceDeadBricks(): void {
//        for (let i: number = 0; i < bricks.length; i++) {
//            let hit: boolean = ball.detectCollision(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
//
//            if (hit == true) {
//                bricks[i].lives -= 1;
//                if (bricks[i].lives == 0) {
//                    bricks.splice(i, 1);
//                    score++;
//                    if(i>=15){
//                        score++;    
//                    }
//                    
//                } else if (bricks[i].lives == 1) {
//                    bricks[i].color = "#4d4d4d";
//                }
//            }
//        }
//    }//spliceBricks


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
        if (_event.keyCode == 32) {
            startGame();
            if(win==true){
              reloadGame();  
            }
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


    function handleMouseMove(_event: MouseEvent) {
        let mouseX = _event.clientX - crc2.canvas.offsetLeft;
        if (mouseX >= bar.width/2-20 && mouseX <= crc2.canvas.width-bar.width/2+20) {
            bar.x = mouseX - bar.width / 2;
        }
    }

    function handleMouseClick(_event: MouseEvent) {
        if (gameOver == true || win == true) {
            reloadGame();
        } else if (playing == false) {
            startGame();
        }
    }

    function handleTouchMove(_event: TouchEvent) {
        let touchX = _event.touches[0].screenX;
        if (touchX > 0 && touchX < crc2.canvas.width) {
            bar.x = touchX - bar.width / 2;
        }
    }

    function handleTouchStart(_event: TouchEvent) {
        if (gameOver == true) {
            reloadGame();
        }
    }

    function reloadGame(): void {
        document.location.reload();
    }
    

    function drawScore() {
        crc2.beginPath();
        crc2.font = "16px Courier New";
        crc2.fillStyle = "#FFFFFF";
        crc2.fillText("Score: " + score, 60, 30);
        crc2.closePath();
    }

    function drawStartScreen(): void {
        let centerX: number = crc2.canvas.width / 2;
        crc2.strokeStyle = 'red';
        crc2.moveTo(centerX, 20);
        crc2.lineTo(centerX, 100);
        //crc2.stroke();
        let startImg: HTMLImageElement;
        startImg = <HTMLImageElement>document.getElementById("startImg");
        crc2.drawImage(startImg, 90, 10);
        crc2.textAlign = 'center';
        crc2.font = "20px Courier New";
        crc2.fillStyle = "#FFFFFF";
        crc2.fillText("Hit spacebar or click to start", centerX, 400);
    }


    function drawGameOverScreen(): void {
        crc2.fillStyle = "#F15A4F";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let centerX: number = crc2.canvas.width / 2;
        crc2.beginPath();
        crc2.strokeStyle = 'black';
        crc2.moveTo(centerX, 20);
        crc2.lineTo(centerX, 100);
        //   crc2.stroke();
        crc2.closePath();
        crc2.textAlign = 'center';
        crc2.font = "50px Courier New";
        crc2.fillStyle = "#000000";
        crc2.fillText("GAME OVER", centerX, 200);
        crc2.font = "16px Courier New";
        crc2.fillText("Hit spacebar or click to restart", centerX, 400);
    }

    function drawWinScreen(): void {
        gameOver = false;
        crc2.fillStyle = "#6AC17C";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        let centerX: number = crc2.canvas.width / 2;
        crc2.beginPath();
        crc2.strokeStyle = 'black';
        crc2.moveTo(centerX, 20);
        crc2.lineTo(centerX, 100);
        //   crc2.stroke();
        crc2.closePath();
        crc2.textAlign = 'center';
        crc2.font = "50px Courier New";
        crc2.fillStyle = "#000000";
        crc2.fillText("YOU WIN !", centerX, 200);
        crc2.font = "16px Courier New";
        crc2.fillText("Hit spacebar or click to restart", centerX, 400);
    }
} //namespace