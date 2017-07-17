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
            //            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
            //vom Balken abprallen
            //            let distX: number = Math.abs(this.x - bar.x);
            //            let distY: number = Math.abs(this.y - bar.y);
            //            let barColl: boolean = false;
            //            let distSq: number = Math.pow(distX - bar.width / 2, 2) + Math.pow(distY - bar.height / 2, 2);
            //
            //
            //
            //            if (distX > (bar.width / 2 + this.radius) || distY > (bar.height / 2 + this.radius)) {
            //                barColl = false;
            //            }
            //
            //
            //            if (distX <= (bar.width / 2) || distY <= (bar.height / 2)) {
            //                barColl = true;
            //            }
            //            if (distSq <= Math.pow(this.radius, 2)) {
            //                barColl = true;
            //            }
            //vom Balken abprallen - nur obere Seite
            if (this.y > Bricks2.bar.y - this.radius && this.x > Bricks2.bar.x && this.x < Bricks2.bar.x + Bricks2.bar.width) {
                this.yd = -this.yd;
            }
            //unterer Rand erreicht
            if (this.y + this.yd > Bricks2.crc2.canvas.height - this.radius) {
                Bricks2.crc2.fillStyle = "#FF0000";
                Bricks2.crc2.fillRect(0, 0, Bricks2.crc2.canvas.width, Bricks2.crc2.canvas.height);
                Bricks2.crc2.font = "50px Arial";
                Bricks2.crc2.fillStyle = "#000000";
                Bricks2.crc2.fillText("GAME OVER", 100, 100);
                Bricks2.gameOver = true;
            }
            //neue Position
            this.x += this.xd; //+2
            this.y += this.yd; //-2
        } //move
        //        detectBrickCollision(): void {
        //            if (ball.x >= this.x && ball.x < this.rightBorder && ball.y < this.bottomBorder) {
        //       //            }
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
            let distX = this.x - testX;
            let distY = this.y - testY;
            let dist = Math.sqrt((distX * distX) + (distY * distY));
            //collision
            if (dist <= this.radius) {
                return true;
            }
            return false;
        }
    }
    Bricks2.Ball = Ball; //class
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=Ball.js.map