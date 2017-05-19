namespace Classes {

        
    export class RegularFlower extends Flower {
        
        centerColor:string;
        
        constructor(_x: number, _y: number){
          console.log("regularFlower");
          super(_x, _y);
          this.centerColor="#F8C471";
          
        }
        
        
         //BLUME
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
            crc2.lineTo(this.x, this.y - 7);
            crc2.lineTo(this.x + 5, this.y - 7);
            crc2.lineTo(this.x, this.y);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = this.stalkColor;
            crc2.fill();
            //petals
            crc2.fillStyle = this.petalColor;
            crc2.beginPath();
            crc2.arc(this.x, this.y - 25, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 5, this.y - 20, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 20, 5, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y - 15, 5, 0, 2 * Math.PI);
            crc2.fill();

            //center
            crc2.beginPath();
            crc2.arc(this.x, this.y - 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = this.centerColor;
            crc2.fill();
        }

        }
    }