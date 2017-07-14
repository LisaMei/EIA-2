var Bricks;
(function (Bricks) {
    class Bar {
        constructor(_x, _y) {
            console.log("Bar");
            this.x = (Bricks.crc2.canvas.width - this.width) / 2;
            this.y = _y;
            this.height = 20;
            this.width = 100;
        }
        draw() {
            Bricks.crc2.beginPath();
            Bricks.crc2.rect(Bricks.crc2.canvas.width / 2, Bricks.crc2.canvas.height - 40, this.width, this.height);
            Bricks.crc2.fillStyle = "#FFFFFF";
            Bricks.crc2.fill();
            Bricks.crc2.closePath();
        }
        handleDownKey(_event) {
            if (_event.keyCode == 39) {
                Bricks.rightKey = true;
            }
            else if (_event.keyCode == 37) {
                Bricks.leftKey = true;
            }
        }
        handleUpKey(_event) {
            if (_event.keyCode == 39) {
                Bricks.rightKey = false;
            }
            else if (_event.keyCode == 37) {
                Bricks.leftKey = false;
            }
        }
        move() {
            if (Bricks.rightKey == true) {
                this.x += 7;
            }
            else if (Bricks.leftKey == true) {
                this.x -= 7;
            }
        }
    }
    Bricks.Bar = Bar; //class
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=Bar.js.map