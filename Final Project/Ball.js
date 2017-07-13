var Bricks;
(function (Bricks) {
    class Ball {
        constructor(_x, _y) {
            console.log("Ball");
            this.speed = 5;
            this.x = _x;
            this.y = _y;
            this.xD = 2;
            this.xD = -2;
        }
        update() {
            Bricks.crc2.clearRect(0, 0, Bricks.crc2.canvas.width, Bricks.crc2.canvas.height);
            this.move();
            this.draw();
        }
        draw() {
            Bricks.crc2.beginPath();
            Bricks.crc2.arc(50, 50, 10, 0, Math.PI * 2);
            Bricks.crc2.fillStyle = "#FFFFFF";
            Bricks.crc2.fill();
            Bricks.crc2.closePath();
        }
        move() {
            if (this.x + this.xD > Bricks.crc2.canvas.width - this.radius || this.x + this.xD < this.radius) {
                this.xD = -this.xD;
            }
            if (this.y + this.yD > Bricks.crc2.canvas.height - this.radius || this.y + this.yD < this.radius) {
                this.yD = -this.yD;
            }
            this.x += this.xD;
            this.y += this.yD;
        }
    }
    Bricks.Ball = Ball; //class
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=Ball.js.map