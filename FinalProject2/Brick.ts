namespace Bricks2 {

    export class Brick {
        x: number;
        y: number;
        color: string;
        width: number;
        height: number;
        rightBorder: number;
        bottomBorder: number;
        active: boolean;
        xSpacer: number;
        ySpacer: number;

        constructor(_x: number, _y: number) {
            console.log("Brick");
            this.x = _x;
            this.y = _y;
            this.height = 20;
            this.width = 60;
            this.color = "#7f7f7f";
            this.rightBorder = bar.x + bar.width;
            this.bottomBorder = bar.y + bar.height;
            this.active = true;
            this.xSpacer = this.width + 20;
            this.ySpacer = this.height + 20;
        }


        draw(): void {
            crc2.beginPath();
            crc2.rect(this.x, this.y, this.width, this.height);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }

        checkStatus(): void {
            if (this.active == true) {
                if (ball.x >= this.x && ball.x < this.rightBorder && ball.y < this.bottomBorder) {
//                    ball.yd = -ball.yd;
                    this.active = false;
                    
                }
                
            }
        }

        



    }//class
} //namespace