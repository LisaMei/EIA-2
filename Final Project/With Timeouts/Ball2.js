var Bricks2;
(function (Bricks2) {
    class Ball {
        constructor() {
            console.log("Ball");
            this.x = Bricks2.crc2.canvas.width / 2;
            ;
            this.y = Bricks2.crc2.canvas.height - 30;
            ;
            this.xD = 2;
            this.xD = -2;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            Bricks2.crc2.beginPath();
            Bricks2.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2);
            Bricks2.crc2.fillStyle = "#FFFFFF";
            Bricks2.crc2.fill();
            Bricks2.crc2.closePath();
        }
        move() {
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
    Bricks2.Ball = Ball; //class
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=Ball2.js.map