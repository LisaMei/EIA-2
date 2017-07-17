var Bricks;
(function (Bricks) {
    class Ball {
        constructor() {
            console.log("Ball");
            this.x = Bricks.crc2.canvas.width / 2;
            this.y = Bricks.crc2.canvas.height - 60;
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
            let newX = this.x + this.xd;
            //linker oder rechter Rand erreicht
            if (newX > Bricks.crc2.canvas.width - this.radius || newX < this.radius) {
                this.xd = -this.xd;
            }
            //oberer Rand erreicht
            if (this.y + this.yd < this.radius) {
                this.yd = -this.yd; //nach unten bewegen --> Vorzeichen von yd zu +
            }
            //vom Balken abprallen
            if (this.y > Bricks.bar.y - this.radius && this.x > Bricks.bar.x && this.x < Bricks.bar.x + Bricks.bar.width) {
                this.yd = -this.yd;
            }
            //unterer Rand erreicht
            if (this.y + this.yd > Bricks.crc2.canvas.height - this.radius) {
                console.log("game over");
                Bricks.crc2.fillStyle = "#FF0000";
                Bricks.crc2.fillRect(0, 0, Bricks.crc2.canvas.width, Bricks.crc2.canvas.height);
                Bricks.crc2.font = "50px Arial";
                Bricks.crc2.fillStyle = "#000000";
                Bricks.crc2.fillText("GAME OVER", 100, 100);
                Bricks.gameOver = true;
            }
            //                //unterer Rand erreicht
            //            } else if (this.y + this.yd > crc2.canvas.height - this.radius) {
            //
            //                //Balken getroffen
            //                if (this.x > bar.x && this.x < bar.x + bar.width ) {//&& this.y<barY
            //                    this.yd = -this.yd; //wieder nach oben
            //
            //                    //Überschreitung unterer Rand GAME OVER
            //                } else {
            //                    crc2.fillStyle = "#FFFFFF";
            //                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            //                    crc2.closePath();
            //
            //                    crc2.font = "50px Arial";
            //                    crc2.fillStyle = "#000000";
            //                    crc2.fillText("GAME OVER", 100, 100);
            //
            //                    //restart game after 3 seconds
            //                    setTimeout(function() {
            //                        document.location.reload();
            //                    }, 3000);
            //                }
            //            }
            //neue Position
            this.x += this.xd; //+2
            this.y += this.yd; //-2
        } //move
    }
    Bricks.Ball = Ball; //class
})(Bricks || (Bricks = {})); //namespace
//# sourceMappingURL=Ball.js.map