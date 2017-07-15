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
            //linker oder rechter Rand erreicht
            if (this.x + this.xd > Bricks.crc2.canvas.width - this.radius || this.x + this.xd < this.radius) {
                this.xd = -this.xd;
            }
            //oberer Rand erreicht
            if (this.y + this.yd < this.radius) {
                this.yd = -this.yd; //nach unten bewegen --> Vorzeichen von yd zu +
            }
            else if (this.y + this.yd > Bricks.crc2.canvas.height - this.radius) {
                //Balken getroffen
                if (this.x > Bricks.barX && this.x < Bricks.barX + Bricks.barWidth) {
                    this.yd = -this.yd; //wieder nach oben
                }
                else {
                    Bricks.crc2.fillStyle = "#FFFFFF";
                    Bricks.crc2.fillRect(0, 0, Bricks.crc2.canvas.width, Bricks.crc2.canvas.height);
                    Bricks.crc2.closePath();
                    Bricks.crc2.font = "50px Arial";
                    Bricks.crc2.fillStyle = "#000000";
                    Bricks.crc2.fillText("GAME OVER", 100, 100);
                    //restart game after 3 seconds
                    setTimeout(function () {
                        document.location.reload();
                    }, 3000);
                }
            }
            //neue Position
            this.x += this.xd;
            this.y += this.yd;
        } //move
    }
    Bricks.Ball = Ball; //class
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=Ball.js.map