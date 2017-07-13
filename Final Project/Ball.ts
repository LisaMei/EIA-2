namespace Bricks {

 
    export class Ball {
        x: number;
        y: number;
        xD: number;
        yD: number;
        color: string;
        speed: number;
        radius: number;


        constructor(_x: number, _y: number) {
            console.log("Ball");

            this.speed = 5;
            this.x = _x;
            this.y = _y;
            this.xD = 2;
            this.xD = -2;
        }


        update(): void {
            crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            this.move();
            this.draw();

        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(50, 50, 10, 0, Math.PI * 2);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
        }



        move(): void {
            
            if (this.x + this.xD > crc2.canvas.width - this.radius || this.x + this.xD < this.radius) {
                this.xD = -this.xD;
            }
            if (this.y + this.yD > crc2.canvas.height - this.radius || this.y + this.yD < this.radius) {
                this.yD = -this.yD;
            }

            this.x += this.xD;
            this.y += this.yD;


        }
    }//class

} //namespace