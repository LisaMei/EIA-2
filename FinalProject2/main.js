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
        Bricks2.bar = new Bricks2.Bar(canvas.width / 2, canvas.height - 40); // (canvas.width-this.width)/2 !?
        Bricks2.ball = new Bricks2.Ball();
        let brick = new Bricks2.Brick(50, 20);
        for (let i = 0; i < brickNumber; i++) {
            if (i % 5 == 0 && i != 0) {
                brick.x = 50;
                brick.y += brick.ySpacer;
            }
            else if (i != 0) {
                brick.x += brick.xSpacer;
            }
            Bricks2.bricks[i] = brick; //brick in Array legen
            Bricks2.bricks[i].draw();
            console.log(Bricks2.bricks);
        }
        imgData = Bricks2.crc2.getImageData(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height);
        window.setTimeout(animate, 10);
    } //init
    document.addEventListener("keydown", handleKeyPress, false);
    document.addEventListener("keyup", handleKeyRelease, false);
    /*
        
        ANIMATION
        
        */
    function animate() {
        Bricks2.crc2.clearRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height); //clear old path
        Bricks2.crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden
        for (let i = 0; i < Bricks2.bricks.length; i++) {
            Bricks2.bricks[i].checkStatus();
            if (Bricks2.bricks[i].active == false) {
                Bricks2.bricks.splice(i);
            }
            else {
                Bricks2.bricks[i].draw();
            }
        }
        Bricks2.ball.update();
        Bricks2.bar.draw();
        if (Bricks2.gameOver == true) {
            document.addEventListener("keydown", handleEnterKey, false);
            document.addEventListener("keyup", handleEnterRelease, false);
        }
        window.setTimeout(animate, 10);
    }
    //Key is pressed
    function handleKeyPress(_event) {
        if (_event.keyCode == 39) {
            Bricks2.rightKey = true;
            console.log("rightKey: " + Bricks2.rightKey);
            Bricks2.bar.move();
        }
        else if (_event.keyCode == 37) {
            Bricks2.leftKey = true;
            console.log("leftKey: " + Bricks2.leftKey);
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
    //return key
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