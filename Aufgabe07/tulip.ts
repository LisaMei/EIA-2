namespace Classes {

        
    export class Tulip extends Flower {
        
        
        
        constructor(_x: number, _y: number){
            console.log("Tulip");
            super(_x, _y);
        
        }
        
        
        
        
        draw(): void {
            //stalk
            crc2.beginPath();
            crc2.strokeStyle = this.stalkColor;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 20);
            crc2.stroke();
            crc2.closePath();
            //leafs
            crc2.beginPath();
            crc2.strokeStyle = this.stalkColor;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 12);
            crc2.lineTo(this.x - 5, this.y - 18);
            crc2.lineTo(this.x, this.y - 5);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = this.stalkColor;
            crc2.fill();

            crc2.beginPath();
            crc2.strokeStyle = this.stalkColor;
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y - 12);
            crc2.lineTo(this.x + 5, this.y - 18);
            crc2.lineTo(this.x, this.y - 5);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = this.stalkColor;
            crc2.fill();
            //blossom
            crc2.fillStyle = this.petalColor;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 25);
            crc2.arc(this.x, this.y - 30, 10, 0, Math.PI);
            crc2.fillStyle = this.petalColor;
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = this.petalColor;

            crc2.moveTo(this.x - 5, this.y - 25);
            crc2.lineTo(this.x, this.y - 32);
            crc2.lineTo(this.x + 5, this.y - 25);
            crc2.closePath();
            crc2.fill();
        }

        }
    
    
    }