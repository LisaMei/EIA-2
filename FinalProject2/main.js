/*
Aufgabe: Finales Projekt
Name: Lisa Meister
Matrikel: 254761
Datum: 13.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Bricks2;
(function (Bricks2) {
    window.addEventListener("load", init);
    Bricks2.playing = false;
    Bricks2.gameOver = false;
    let win = false;
    let score = 0;
    Bricks2.rightKey = false;
    Bricks2.leftKey = false;
    //    export let bricks: Brick[] = []; //array for brickfield
    let brickNumber = 20;
    let bricks = [];
    let columnNr = 5;
    let rowNr = 4;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Bricks2.crc2 = canvas.getContext("2d");
        Bricks2.crc2.fillRect(0, 0, canvas.width, canvas.height);
        Bricks2.bar = new Bricks2.Bar(canvas.width / 2 - 50, canvas.height - 40); // (canvas.width-this.width)/2 !?
        Bricks2.ball = new Bricks2.Ball();
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
    } //init
    //start actual game
    function startGame() {
        window.setTimeout(animate, 10);
        Bricks2.playing = true;
    }
    function animate() {
        Bricks2.crc2.clearRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height); //clear old paths       
        drawActiveBricks();
        spliceDeadBricks();
        Bricks2.bar.draw();
        if (win == false) {
            Bricks2.ball.update();
        }
        drawScore();
        if (Bricks2.gameOver == true) {
            drawGameOverScreen();
        }
        if (Bricks2.gameOver == false && score > 5) {
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
    //            } else {// x spacing zum n�chsten brick
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
    function createBrickField() {
        let brickPosx;
        let brickPosy;
        let brickPadding = 10;
        let offsetTop = 20;
        let offsetLeft = 20;
        for (let c = 0; c < columnNr; c++) {
            bricks[c] = []; //in den Spaltenarray einen Array legen
            for (let r = 0; r < rowNr; r++) {
                let brick = new Bricks2.Brick(brickPosx, brickPosy);
                bricks[c][r] = brick;
                bricks[c][r].x = 0;
                bricks[c][r].y = 0;
                bricks[c][r].x = brickPosx;
                bricks[c][r].y = brickPosy;
                brickPosx = (c * (brick.width + brick.spacer)) + offsetLeft;
                brickPosy = (r * (brick.height + brick.spacer)) + offsetTop;
            }
        }
    }
    //2d array version
    function drawActiveBricks() {
        for (let c = 0; c < columnNr; c++) {
            for (let r = 0; r < rowNr; r++) {
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
    function spliceDeadBricks() {
        for (let c = 0; c < columnNr; c++) {
            for (let r = 0; r < rowNr; r++) {
                let b = bricks[c][r];
                let hit = Bricks2.ball.detectCollision(b.x, b.y, b.width, b.height);
                if (hit == true && b.lives == 0) {
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
    function handleKeyPress(_event) {
        if (_event.keyCode == 39) {
            Bricks2.rightKey = true;
            //            console.log("rightKey: " + rightKey);
            Bricks2.bar.move();
        }
        else if (_event.keyCode == 37) {
            Bricks2.leftKey = true;
            //            console.log("leftKey: " + leftKey);
            Bricks2.bar.move();
        }
        if (_event.keyCode == 32) {
            startGame();
            if (win == true) {
                reloadGame();
            }
        }
    } //handleDownkey
    //Key is released
    function handleKeyRelease(_event) {
        if (_event.keyCode == 39) {
            Bricks2.rightKey = false;
        }
        else if (_event.keyCode == 37) {
            Bricks2.leftKey = false;
        }
    } //handleKeyRelease
    function handleMouseMove(_event) {
        let mouseX = _event.clientX - Bricks2.crc2.canvas.offsetLeft;
        if (mouseX >= Bricks2.bar.width / 2 - 20 && mouseX <= Bricks2.crc2.canvas.width - Bricks2.bar.width / 2 + 20) {
            Bricks2.bar.x = mouseX - Bricks2.bar.width / 2;
        }
    }
    function handleMouseClick(_event) {
        if (Bricks2.gameOver == true || win == true) {
            reloadGame();
        }
        else if (Bricks2.playing == false) {
            startGame();
        }
    }
    function handleTouchMove(_event) {
        let touchX = _event.touches[0].screenX;
        if (touchX > 0 && touchX < Bricks2.crc2.canvas.width) {
            Bricks2.bar.x = touchX - Bricks2.bar.width / 2;
        }
    }
    function handleTouchStart(_event) {
        if (Bricks2.gameOver == true) {
            reloadGame();
        }
    }
    function reloadGame() {
        document.location.reload();
    }
    function drawScore() {
        Bricks2.crc2.beginPath();
        Bricks2.crc2.font = "16px Courier New";
        Bricks2.crc2.fillStyle = "#FFFFFF";
        Bricks2.crc2.fillText("Score: " + score, 60, 30);
        Bricks2.crc2.closePath();
    }
    function drawStartScreen() {
        let centerX = Bricks2.crc2.canvas.width / 2;
        Bricks2.crc2.strokeStyle = 'red';
        Bricks2.crc2.moveTo(centerX, 20);
        Bricks2.crc2.lineTo(centerX, 100);
        //crc2.stroke();
        let startImg;
        startImg = document.getElementById("startImg");
        Bricks2.crc2.drawImage(startImg, 90, 10);
        Bricks2.crc2.textAlign = 'center';
        Bricks2.crc2.font = "20px Courier New";
        Bricks2.crc2.fillStyle = "#FFFFFF";
        Bricks2.crc2.fillText("Hit spacebar or click to start", centerX, 400);
    }
    function drawGameOverScreen() {
        Bricks2.crc2.fillStyle = "#F15A4F";
        Bricks2.crc2.fillRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height);
        let centerX = Bricks2.crc2.canvas.width / 2;
        Bricks2.crc2.beginPath();
        Bricks2.crc2.strokeStyle = 'black';
        Bricks2.crc2.moveTo(centerX, 20);
        Bricks2.crc2.lineTo(centerX, 100);
        //   crc2.stroke();
        Bricks2.crc2.closePath();
        Bricks2.crc2.textAlign = 'center';
        Bricks2.crc2.font = "50px Courier New";
        Bricks2.crc2.fillStyle = "#000000";
        Bricks2.crc2.fillText("GAME OVER", centerX, 200);
        Bricks2.crc2.font = "16px Courier New";
        Bricks2.crc2.fillText("Hit spacebar or click to restart", centerX, 400);
    }
    function drawWinScreen() {
        Bricks2.gameOver = false;
        Bricks2.crc2.fillStyle = "#6AC17C";
        Bricks2.crc2.fillRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height);
        let centerX = Bricks2.crc2.canvas.width / 2;
        Bricks2.crc2.beginPath();
        Bricks2.crc2.strokeStyle = 'black';
        Bricks2.crc2.moveTo(centerX, 20);
        Bricks2.crc2.lineTo(centerX, 100);
        //   crc2.stroke();
        Bricks2.crc2.closePath();
        Bricks2.crc2.textAlign = 'center';
        Bricks2.crc2.font = "50px Courier New";
        Bricks2.crc2.fillStyle = "#000000";
        Bricks2.crc2.fillText("YOU WIN !", centerX, 200);
        Bricks2.crc2.font = "16px Courier New";
        Bricks2.crc2.fillText("Hit spacebar or click to restart", centerX, 400);
    }
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=main.js.map