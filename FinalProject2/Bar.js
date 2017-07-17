var Bricks2;
(function (Bricks2) {
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
            Bricks2.crc2.beginPath();
            Bricks2.crc2.rect(this.x, this.y, this.width, this.height);
            Bricks2.crc2.fillStyle = this.color;
            Bricks2.crc2.fill();
            Bricks2.crc2.closePath();
        }
        move() {
            if (Bricks2.rightKey == true && this.x + this.width < Bricks2.crc2.canvas.width) {
                this.x += 10;
            }
            else if (Bricks2.leftKey == true && this.x > 0) {
                this.x -= 10;
            }
            console.log("move called");
        }
    }
    Bricks2.Bar = Bar; //class
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=Bar.js.map