namespace Bricks2 {

    export class Bar {
        x: number;
        y: number;
        color: string;
        width: number;
        height: number;
        centerX:number;      

        constructor(_x: number, _y: number) {
            console.log("Bar");
            this.x = _x;
            this.y = _y;
            this.height = 20;
            this.width = 100;
            this.color = "#FFFFFF";
            this.centerX=this.x+this.width/2;
            
        }

        draw(): void {
            crc2.beginPath();
            crc2.rect(this.x, this.y, this.width, this.height);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }


        move(): void {
            if (rightKey == true && this.x + this.width < crc2.canvas.width) {
                this.x += 10;
            }
            else if (leftKey == true && this.x > 0) {
                this.x -= 10;
            }
            
        }
    }//class
} //namespace