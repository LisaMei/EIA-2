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
    Bricks2.rightKey = false;
    Bricks2.leftKey = false;
    let enterKey = false;
    Bricks2.gameOver = false;
    Bricks2.bricks = [];
    //    let bricks: Brick[][] = [];
    let columnNr = 5;
    let rowNr = 4;
    //    let bricks= [    
    let brickNumber = 20;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Bricks2.crc2 = canvas.getContext("2d");
        Bricks2.crc2.fillRect(0, 0, canvas.width, canvas.height);
        drawStartScreen();
        Bricks2.bar = new Bricks2.Bar(canvas.width / 2 - 50, canvas.height - 40); // (canvas.width-this.width)/2 !?
        Bricks2.ball = new Bricks2.Ball();
        //        createBrickField();
        createBrickField();
        document.addEventListener("keydown", handleKeyPress, false);
        document.addEventListener("keyup", handleKeyRelease, false);
        window.addEventListener("resize", resizeCanvas, false);
        //window.setTimeout(animate, 10);           
    } //init
    function startGame() {
        window.setTimeout(animate, 10);
    }
    function animate() {
        Bricks2.crc2.clearRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height); //clear old path       
        spliceDeadBricks();
        drawActiveBricks();
        //        spliceBricks();
        //        draeld();
        Bricks2.bar.draw();
        Bricks2.ball.update();
        if (Bricks2.gameOver == true) {
            document.addEventListener("keydown", handleEnterKey, false);
            document.addEventListener("keyup", handleEnterRelease, false);
        }
        window.setTimeout(animate, 10);
    } //animate
    function createBrickField() {
        let brickPosx = 50;
        let brickPosy = 50;
        for (let i = 0; i < 21; i++) {
            let brick = new Bricks2.Brick(brickPosx, brickPosy);
            if (i % 5 == 0 && i != 0) {
                brickPosx = 50;
                brickPosy += brick.ySpacer;
            }
            else if (i != 0) {
                brickPosx += brick.xSpacer;
            }
            Bricks2.bricks[i] = brick; //brick in Arregen
        }
    } //createBrickField
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
    function drawActiveBricks() {
        for (let i = 0; i < Bricks2.bricks.length; i++) {
            Bricks2.bricks[i].draw();
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
    function spliceDeadBricks() {
        for (let i = 0; i < Bricks2.bricks.length; i++) {
            //bricks[i].checkStatus();
            let hit = Bricks2.ball.detectCollision(Bricks2.bricks[i].x, Bricks2.bricks[i].y, Bricks2.bricks[i].width, Bricks2.bricks[i].height);
            if (hit == true) {
                Bricks2.bricks.splice(i, 1);
                console.log("brick spliced");
            }
        }
    } //spliceBricks
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
    //enter key
    function handleEnterKey(_event) {
        if (_event.keyCode == 13) {
            enterKey = true;
            reloadGame();
        }
    }
    function handleEnterRelease(_event) {
        if (_event.keyCode == 13) {
            enterKey = false;
        }
    }
    function reloadGame() {
        document.location.reload();
    }
    function drawStartScreen() {
        let centerX = Bricks2.crc2.canvas.width / 2;
        Bricks2.crc2.strokeStyle = 'red';
        Bricks2.crc2.moveTo(centerX, 20);
        Bricks2.crc2.lineTo(centerX, 100);
        //crc2.stroke();
        let startImg;
        startImg = document.getElementById("startImg");
        Bricks2.crc2.drawImage(startImg, 30, 10);
        Bricks2.crc2.textAlign = 'center';
        Bricks2.crc2.font = "20px Courier New";
        Bricks2.crc2.fillStyle = "#FFFFFF";
        Bricks2.crc2.fillText("Hit spacbar to start game", centerX, 400);
    }
    function resizeCanvas() {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let scaleX = windowWidth / Bricks2.crc2.canvas.width;
        let scaleY = windowHeight / Bricks2.crc2.canvas.height;
        let screenRatio = windowWidth / windowHeight;
        let optimalRatio = Math.min(scaleX, scaleY);
        if (screenRatio >= 1.77 && screenRatio <= 1.79) {
            Bricks2.crc2.canvas.style.width = windowWidth + "px";
            Bricks2.crc2.canvas.style.height = windowHeight + "px";
        }
        else {
            Bricks2.crc2.canvas.style.width = Bricks2.crc2.canvas.width * optimalRatio + "px";
            Bricks2.crc2.canvas.style.height = Bricks2.crc2.canvas.height * optimalRatio + "px";
        }
    }
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=main.js.map