namespace Bricks2 {

    export class Brick {
        x: number;
        y: number;
        color: string;
        width: number;
        height: number;
        active: boolean;
        xSpacer: number;
        ySpacer: number;
        spacer:number; //2d array version
        lives: number;

        constructor(_x: number, _y: number) {
            console.log("Brick");
            this.x = _x;
            this.y = _y;
            this.height = 20;
            this.width = 60;
            this.color = "#7f7f7f";
            this.active = true;
            this.xSpacer = this.width + 20;
            this.ySpacer = this.height + 20;
            this.lives = 1;
            this.spacer=20;
        }


        draw(): void {
            crc2.beginPath();
            crc2.rect(this.x, this.y, this.width, this.height);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }

        setRandomColor(): void {
            let colors: string[] = ["#FFC60A", "#F15A4F", "#956CAE", "#0096D5", "#6AC17C"];
            let randomColor: string;
            randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.color = randomColor;
        }


        

    }//class
} //namespace