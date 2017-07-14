var Bricks;
(function (Bricks) {
    class Ball {
        constructor() {
            console.log("Ball");
            this.x = Bricks.crc2.canvas.width / 2;
            this.y = Bricks.crc2.canvas.height - 30;
            this.xd = 2;
            this.yd = -2;
            this.radius = 10;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            Bricks.crc2.beginPath();
            Bricks.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Bricks.crc2.fillStyle = "#FFFFFF";
            Bricks.crc2.fill();
            Bricks.crc2.closePath();
        }
        move() {
            //vom Rand abprallen
            if (this.x + this.xd > Bricks.crc2.canvas.width - this.radius || this.x + this.xd < this.radius) {
                this.xd = -this.xd;
            }
            if (this.y + this.yd > Bricks.crc2.canvas.height - this.radius || this.y + this.yd < this.radius) {
                this.yd = -this.yd;
            }
            //neue Position
            this.x += this.xd;
            this.y += this.yd;
        }
    }
    Bricks.Ball = Ball; //class
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=Ball.js.map