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
    export let gameOver: boolean = false;
    let win: boolean = false;
    export let bricks: Brick[] = [];
    //    let bricks: Brick[][] = [];
    let columnNr: number = 5;
    let rowNr: number = 4;
    let brickNumber: number = 20;

    let score: number = 0;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        bar = new Bar(canvas.width / 2 - 50, canvas.height - 40); // (canvas.width-this.width)/2 !?
        ball = new Ball();
        createBrickField();

        document.addEventListener("keydown", handleKeyPress, false);
        document.addEventListener("keyup", handleKeyRelease, false);
        document.addEventListener("mousemove", handleMouseMove, false);
        document.addEventListener("touchstart", handleTouchStart, false);
        canvas.addEventListener("touchmove", handleTouchMove, false);
        
        //        window.addEventListener("resize", resizeCanvas, false);
        drawStartScreen();
    }//init



    function startGame(): void {
        window.setTimeout(animate, 10);
    }

    function animate(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height); //clear old path       
        spliceDeadBricks();
        drawActiveBricks();

        bar.draw();
        drawScore();
        ball.update();

        if (gameOver == true) {
            drawGameOverScreen();
            document.addEventListener("touchstart", handleTouchStart, false);
        }

        window.setTimeout(animate, 10);
    } //animate


    function createBrickField(): void {
        let brickPosx: number = 50;
        let brickPosy: number = 50;

        for (let i: number = 0; i < 21; i++) {
            let brick: Brick = new Brick(brickPosx, brickPosy);
            if (i % 5 == 0 && i != 0) { //neue Reihe
                brickPosx = 50;
                brickPosy += brick.ySpacer;

            } else if (i != 0) {
                brickPosx += brick.xSpacer;
            }
            brick.setRandomColor();
            bricks[i] = brick; //brick in Arregen
        }
    }//createBrickField




    //    function createBrickField(): void {
    //        
    //        let brickPosx: number;
    //        let brickPosy: number;
    //
    //        for (let c: number = 0; c < columnNr; c++) {
    //            bricks[c] = []; //in den Spaltenarray einen Array legen
    //            for (let r: number = 0; r < rowNr; r++) {
    //                let brick: Brick = new Brick(brickPosx, brickPosy);
    //                bricks[c][r] = brick;
    //                brickPosx = (c * (brick.width + brick.xSpacer));
    //                brickPosy = (r * (brick.height + brick.ySpacer));
    //
    //                //                bricks[c][r].x = 0;
    //                //                bricks[c][r].y = 0;
    //                bricks[c][r].x = brickPosx;
    //                bricks[c][r].y = brickPosy;
    //                con.log(bricks[c][r]);
    //
    //            }
    //        }
    //
    //    }

    //    function drawBrickField(): void {
    //        let columnNr: number = 5;
    //        let rowNr: number = 4;
    //
    //
    //        for (let c: number = 0; c < columnNr; c++) {            
    //            for (let r: number = 0; r < rowNr; r++) {
    //                var b = bricks[c][r];
    //                b.draw();
    //
    //            }
    //        }
    //
    //    }




    function drawActiveBricks(): void {
        for (let i: number = 0; i < bricks.length; i++) {
            bricks[i].draw();

        }
    }


    //    function spliceBricks(): void {
    //       
    //        for (let c = 0; c < columnNr; c++) {
    //            for (let r = 0; r < rowNr; r++) {
    //                let b = bricks[c][r];
    //                let hit: boolean = ball.detectCollision(b.x, b.y, b.width, b.height);
    //                if (hit == true) {
    //                    bricks.splice([c][r], 1);
    //                    console.log("brick spliced");
    //                }
    //            }
    //            }
    //        }


    function spliceDeadBricks(): void {
        for (let i: number = 0; i < bricks.length; i++) {
            let hit: boolean = ball.detectCollision(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);

            if (hit == true) {
                bricks.splice(i, 1);
                console.log("brick spliced");
                score++;
            }
            if (bricks.length == 0) {
                drawWinScreen();
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
        if (_event.keyCode == 32) {
            startGame();
        }

        if (_event.keyCode == 13) {
            enterKey = true;
            reloadGame();

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
        if (_event.keyCode == 13) {
            enterKey = false;
        }
    }//handleKeyRelease


    function handleMouseMove(_event: MouseEvent) {        
        let mouseX = _event.clientX - crc2.canvas.offsetLeft;
        if (mouseX > 0 && mouseX < crc2.canvas.width) {
            bar.x = mouseX - bar.width / 2;
        }
    }
    
    function handleTouchMove(_event: TouchEvent){
        let touchX= _event.touches[0].screenX;
        if (touchX > 0 && touchX < crc2.canvas.width) {
            bar.x = touchX - bar.width / 2;
        }
    }

    function handleTouchStart(_event: TouchEvent){
        startGame();  
        crc2.canvas.removeEventListener("touchmove", handleTouchMove, false);  
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
        crc2.drawImage(startImg, 30, 10);
        crc2.textAlign = 'center';
        crc2.font = "20px Courier New";
        crc2.fillStyle = "#FFFFFF";
        crc2.fillText("Hit spacbar to start game", centerX, 400);
    }


    function drawGameOverScreen(): void {
        crc2.fillStyle = "#FF0000";
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
        crc2.fillText("GAME OVER", centerX, 100);
        crc2.font = "20px Courier New";
        crc2.fillText("hit enter to restart", centerX, 400);
    }

    function drawWinScreen(): void {
        crc2.fillStyle = "#00FF00";
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
        crc2.fillText("YOU WIN !", centerX, 100);
        crc2.font = "20px Courier New";
        crc2.fillText("hit enter to restart", centerX, 400);
    }





    //    function resizeCanvas(): void {
    //        let windowWidth:number=window.innerWidth;
    //        let windowHeight:number=window.innerHeight
    //        let scaleX:number = windowWidth/crc2.canvas.width;
    //        let scaleY:number = windowHeight/crc2.canvas.height;
    //        let screenRatio:number = windowWidth/windowHeight;
    //        let optimalRatio:number=Math.min(scaleX, scaleY);
    //        
    //        if(screenRatio>=1.77&&screenRatio<=1.79){
    //            crc2.canvas.style.width = windowWidth+"px";
    //            crc2.canvas.style.height = windowHeight+"px";               
    //        }else{
    //            crc2.canvas.style.width = crc2.canvas.width*optimalRatio+"px";
    //            crc2.canvas.style.height = crc2.canvas.height*optimalRatio+"px";      
    //        }
    //    }

} //namespace