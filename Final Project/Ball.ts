namespace Bricks {

 
    export class Ball {
        x: number;
        y: number;
        xD: number;
        yD: number;
        color: string;
//        speed: number;
        radius: number;


        constructor() {
            console.log("Ball");
            this.x = crc2.canvas.width/2;
            this.y = crc2.canvas.height-30;
            this.xD = 2;
            this.xD = -2;
        }


        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, Math.PI * 2);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
        }



        move(): void {
//            if (this.x + this.xD > crc2.canvas.width - this.radius || this.x + this.xD < this.radius) {
//                this.xD = -this.xD;
//            }
//            if (this.y + this.yD > crc2.canvas.height - this.radius || this.y + this.yD < this.radius) {
//                this.yD = -this.yD;
//            }

            this.x += 2;
            this.y += -2;
            


        }
    }//class

} //namespace