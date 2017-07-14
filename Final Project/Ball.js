var Bricks;
(function (Bricks) {
    class Ball {
        constructor() {
            console.log("Ball");
            this.x = Bricks.crc2.canvas.width / 2;
            ;
            this.y = Bricks.crc2.canvas.height - 30;
            ;
            this.xD = 2;
            this.xD = -2;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            Bricks.crc2.beginPath();
            Bricks.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2);
            Bricks.crc2.fillStyle = "#FFFFFF";
            Bricks.crc2.fill();
            Bricks.crc2.closePath();
        }
        move() {
            //            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            //            if (this.x + this.xD > crc2.canvas.width - this.radius || this.x + this.xD < this.radius) {
            //                this.xD = -this.xD;
            //            }
            //            if (this.y + this.yD > crc2.canvas.height - this.radius || this.y + this.yD < this.radius) {
            //                this.yD = -this.yD;
            //            }
            this.x += this.xD;
            this.y += this.yD;
        }
    }
    Bricks.Ball = Ball; //class
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=Ball.js.map