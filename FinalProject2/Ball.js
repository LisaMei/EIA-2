var Bricks2;
(function (Bricks2) {
    class Ball {
        constructor() {
            console.log("Ball");
            this.x = Bricks2.crc2.canvas.width / 2;
            this.y = Bricks2.crc2.canvas.height - 60;
            this.xd = 2;
            this.yd = -2;
            this.radius = 10;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            Bricks2.crc2.beginPath();
            Bricks2.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Bricks2.crc2.fillStyle = "#FFFFFF";
            Bricks2.crc2.fill();
            Bricks2.crc2.closePath();
        }
        move() {
            let newX = this.x + this.xd;
            //linker oder rechter Rand erreicht
            if (newX > Bricks2.crc2.canvas.width - this.radius || newX < this.radius) {
                this.xd = -this.xd;
            }
            //oberer Rand erreicht
            if (this.y + this.yd < this.radius) {
                this.yd = -this.yd; //nach unten bewegen --> Vorzeichen von yd zu +
            }
            //vom Balken abprallen - bis jetzt nur obere Seite
            //            if (this.y > bar.y - this.radius && this.x > bar.x && this.x < bar.x+bar.width) {
            //                this.yd = -this.yd;
            //            }
            //            //left
            //            if (this.x > bar.x && this.y < bar.y+bar.height && this.y > bar.y) {
            //                this.xd = -this.xd;
            //            }
            let barColl = this.detectCollision(Bricks2.bar.x, Bricks2.bar.y, Bricks2.bar.width, Bricks2.bar.height);
            //unterer Rand erreicht
            if (this.y + this.yd >= Bricks2.crc2.canvas.height - this.radius) {
                Bricks2.crc2.fillStyle = "#FF0000";
                Bricks2.crc2.fillRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height);
                let centerX = Bricks2.crc2.canvas.width / 2;
                Bricks2.crc2.beginPath();
                Bricks2.crc2.strokeStyle = 'black';
                Bricks2.crc2.moveTo(centerX, 20);
                Bricks2.crc2.lineTo(centerX, 100);
                //   crc2.stroke();
                Bricks2.crc2.closePath();
                Bricks2.crc2.textAlign = 'center';
                Bricks2.crc2.font = "50px Courier New";
                Bricks2.crc2.fillStyle = "#000000";
                Bricks2.crc2.fillText("GAME OVER", centerX, 100);
                Bricks2.crc2.font = "20px Courier New";
                Bricks2.crc2.fillText("hit enter to restart", centerX, 400);
                Bricks2.gameOver = true;
            }
            //neue Position
            this.x += this.xd; //+2
            this.y += this.yd; //-2
        } //move
        //        handleColl(_rx: number, _ry: number, _rwidth: number, _rheight: number): void {
        //            let barColl: boolean = this.detectCollision(bar.x, bar.y, bar.width, bar.height);
        //            if (barColl = true) {
        //                if (distX < this.radius) {
        //                    this.xd = -this.xd;
        //                }
        //                if (distY < this.radius) {
        //                    this.yd = -this.yd;
        //                }
        //            }
        //        }
        detectCollision(_rx, _ry, _rwidth, _rheight) {
            let testX = this.x;
            let testY = this.y;
            if (this.x < _rx) {
                testX = _rx;
            }
            else if (this.x > _rx + _rwidth) {
                testX = _rx + _rwidth;
            }
            if (this.y < _ry) {
                testY = _ry;
            }
            else if (this.y > _ry + _rheight) {
                testY = _ry + _rheight;
            }
            //Abstand von n�chsten Ecken
            let distX = this.x - testX; //left and right border
            let distY = this.y - testY; //top and bottom
            let dist = Math.sqrt((distX * distX) + (distY * distY));
            //collision handling
            if (dist <= this.radius) {
                if (distX < this.radius) {
                    this.yd = -this.yd;
                }
                if (distY < this.radius) {
                    this.xd = -this.xd;
                }
                return true;
            }
            return false;
        }
    }
    Bricks2.Ball = Ball; //class
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=Ball.js.map