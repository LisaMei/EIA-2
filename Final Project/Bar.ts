namespace Bricks {


    export class Bar {
        x: number;
        y: number;
        color: string;
        width: number;
        height: number;


        constructor(_x: number, _y: number) {
            console.log("Bar");
            this.x = (crc2.canvas.width - this.width) / 2;
            this.y = _y;
            this.height = 20;
            this.width = 100;

        }


        draw(): void {
            crc2.beginPath();
            crc2.rect(crc2.canvas.width / 2, crc2.canvas.height - 40, this.width, this.height);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
        }

    
        
        handleDownKey(_event: KeyboardEvent) {
            if (_event.keyCode == 39) {
                rightKey = true;
            }
            else if (_event.keyCode == 37) {
                leftKey = true;
            }
            
        }

        handleUpKey(_event: KeyboardEvent) {
            if (_event.keyCode == 39) {
                rightKey = false;
            }
            else if (_event.keyCode == 37) {
                leftKey = false;
            }
            
        }


        move(): void {
            if (rightKey == true) {
                this.x += 7;
            }
            else if (leftKey == true) {
                this.x -= 7;
            }
        }

    }//class

} //namespace