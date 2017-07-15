/*
Aufgabe: Finales Projekt
Name: Lisa Meister
Matrikel: 254761
Datum: 13.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Bricks;
(function (Bricks) {
    window.addEventListener("load", init);
    let imgData;
    Bricks.rightKey = false;
    Bricks.leftKey = false;
    let enterKey = false;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Bricks.crc2 = canvas.getContext("2d");
        Bricks.crc2.fillRect(0, 0, canvas.width, canvas.height);
        Bricks.bar = new Bricks.Bar(canvas.width / 2, canvas.height - 40); // (canvas.width-this.width)/2 !?
        console.log(Bricks.bar.x, Bricks.bar.y);
        Bricks.bar.draw();
        let ball = new Bricks.Ball();
        ball.draw();
        /*
        
        ANIMATION
        
        */
        setInterval(function () {
            Bricks.crc2.clearRect(0, 0, Bricks.crc2.canvas.width, Bricks.crc2.canvas.height); //clear old path
            ball.update();
            Bricks.bar.draw();
            document.addEventListener("keydown", handleKeyPress, false);
            document.addEventListener("keyup", handleKeyRelease, false);
            if (Bricks.crc2.fillStyle = "#FF0000") {
                document.addEventListener("keydown", handleEnterKey, false);
                console.log("help im burning");
            }
        }, 10);
        //Key is pressed
        function handleKeyPress(_event) {
            if (_event.keyCode == 39) {
                Bricks.rightKey = true;
                console.log("rightKey: " + Bricks.rightKey);
                Bricks.bar.move();
            }
            else if (_event.keyCode == 37) {
                Bricks.leftKey = true;
                console.log("leftKey: " + Bricks.leftKey);
                Bricks.bar.move();
            }
        } //handleDownkey
        //Key is released
        function handleKeyRelease(_event) {
            if (_event.keyCode == 39) {
                Bricks.rightKey = false;
            }
            else if (_event.keyCode == 37) {
                Bricks.leftKey = false;
            }
        } //handleKeyRelease
        //return key
        function handleEnterKey(_event) {
            if (_event.keyCode == 13) {
                enterKey = true;
                reloadGame();
            }
            if (_event.keyCode == 13) {
                enterKey = false;
            }
        }
        function reloadGame() {
            //            setTimeout(function() {
            document.location.reload();
            //                    }, 3000);    
        }
    } //init
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=main.js.map