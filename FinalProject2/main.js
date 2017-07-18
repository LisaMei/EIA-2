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
    let imgData;
    let brickNumber = 20;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Bricks2.crc2 = canvas.getContext("2d");
        Bricks2.crc2.fillRect(0, 0, canvas.width, canvas.height);
        Bricks2.bar = new Bricks2.Bar(canvas.width / 2 - 50, canvas.height - 40); // (canvas.width-this.width)/2 !?
        Bricks2.ball = new Bricks2.Ball();
        createBrickField();
        window.setTimeout(animate, 10);
    } //init
    document.addEventListener("keydown", handleKeyPress, false);
    document.addEventListener("keyup", handleKeyRelease, false);
    function animate() {
        Bricks2.crc2.clearRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height); //clear old path       
        spliceDeadBricks();
        drawActiveBricks();
        Bricks2.ball.update();
        Bricks2.bar.draw();
        if (Bricks2.gameOver == true) {
            document.addEventListener("keydown", handleEnterKey, false);
            document.addEventListener("keyup", handleEnterRelease, false);
        }
        window.setTimeout(animate, 10);
    } //animate
    function createBrickField() {
        let brickPosx = 50;
        let brickPosy = 50;
        for (let i = 0; i < brickNumber; i++) {
            let brick = new Bricks2.Brick(brickPosx, brickPosy);
            if (i % 5 == 0 && i != 0) {
                brickPosx = 50;
                brickPosy += brick.ySpacer;
            }
            else if (i != 0) {
                brickPosx += brick.xSpacer;
            }
            Bricks2.bricks[i] = brick; //brick in Array legen
        }
    } //createBrickField
    function drawActiveBricks() {
        for (let i = 0; i < Bricks2.bricks.length; i++) {
            Bricks2.bricks[i].draw();
        }
    }
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
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=main.js.map