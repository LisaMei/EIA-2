namespace Bricks2 {

    export class Ball {
        x: number;
        y: number;
        xd: number;
        yd: number;
        color: string;
        radius: number;

        constructor() {
            console.log("Ball");
            this.x = crc2.canvas.width / 2;
            this.y = crc2.canvas.height - 60;
            this.xd = 2;
            this.yd = -2;
            this.radius = 10;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
        }

        move(): void {
            let newX = this.x + this.xd;


            //linker oder rechter Rand erreicht
            if (newX > crc2.canvas.width - this.radius || newX < this.radius) {
                this.xd = -this.xd;
            }

            //oberer Rand erreicht
            if (this.y + this.yd < this.radius) {
                this.yd = -this.yd; //nach unten bewegen --> Vorzeichen von yd zu +
            }
         
            let barColl: boolean = this.detectCollision(bar.x, bar.y, bar.width, bar.height);


            //unterer Rand erreicht
            if (this.y + this.yd >= crc2.canvas.height - this.radius) {
                crc2.fillStyle = "#FF0000";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

                let centerX:number=crc2.canvas.width/2;
                crc2.beginPath();
                crc2.strokeStyle='black';
                crc2.moveTo(centerX, 20);
                crc2.lineTo(centerX, 100);
             //   crc2.stroke();
                crc2.closePath();
                crc2.textAlign = 'center';

                crc2.font = "50px Courier New";
                crc2.fillStyle = "#000000";
                crc2.fillText("GAME OVER", centerX, 100);
                crc2.font = "20px Courier New";
                crc2.fillText("hit enter to restart", centerX, 400);
                gameOver = true;
            }

            //neue Position
            this.x += this.xd; //+2
            this.y += this.yd; //-2
        }//move


        detectCollision(_rx: number, _ry: number, _rwidth: number, _rheight: number) {
            let testX: number = this.x;
            let testY: number = this.y;

            if (this.x < _rx) { //left border
                testX = _rx;
            } else if (this.x > _rx + _rwidth) {//right border
                testX = _rx + _rwidth;
            }

            if (this.y < _ry) {// top border
                testY = _ry;
            } else if (this.y > _ry + _rheight) {//bottom border
                testY = _ry + _rheight;
            }

            //Abstand von nächsten Ecken
            let distX: number = this.x - testX; //left and right border
            let distY: number = this.y - testY; //top and bottom
            let dist: number = Math.sqrt((distX * distX) + (distY * distY));

            //collision handling
            if (dist <= this.radius) {

//                if (distX==0 ) { //< this.radius
//                    this.yd = -this.yd;
//                }
//                if (distY ==0) { //< this.radius
//                    this.xd = -this.xd;
//                }
                
                 if (distX == 0)
                    this.yd *= -1;
                else if (distY == 0)
                    this.xd *= -1;
                else {
                    this.xd *= -1;
                    this.yd *= -1;
                }                
                return true;
            }
            return false;
        }






    }//class
} //namespace