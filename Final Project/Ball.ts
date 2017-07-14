namespace Bricks {


    export class Ball {
        x: number;
        y: number;
        xd: number;
        yd: number;
        color: string;
        //        speed: number;
        radius: number;


        constructor() {
            console.log("Ball");
            this.x = crc2.canvas.width / 2;
            this.y = crc2.canvas.height - 30;
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

            //vom Rand abprallen
            if (this.x + this.xd > crc2.canvas.width-this.radius || this.x + this.xd < this.radius) {
                this.xd = -this.xd;
            }
            if (this.y + this.yd > crc2.canvas.height - this.radius || this.y + this.yd < this.radius) {
                this.yd = -this.yd;
            }

            
            //neue Position
            this.x += this.xd;
            this.y += this.yd;
        }
    }//class

} //namespace