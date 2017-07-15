var Bricks;
(function (Bricks) {
    class Bar {
        constructor(_x, _y) {
            console.log("Bar");
            this.x = _x;
            this.y = _y;
            this.height = 20;
            this.width = 100;
            this.color = "#FFFFFF";
        }
        draw() {
            Bricks.crc2.beginPath();
            Bricks.crc2.rect(this.x, this.y, this.width, this.height);
            Bricks.crc2.fillStyle = this.color;
            Bricks.crc2.fill();
            Bricks.crc2.closePath();
        }
        move() {
            if (Bricks.rightKey == true && this.x + this.width < Bricks.crc2.canvas.width) {
                this.x += 10;
            }
            else if (Bricks.leftKey == true && this.x > 0) {
                this.x -= 10;
            }
            console.log("move called");
        }
    }
    Bricks.Bar = Bar; //class
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=Bar.js.map