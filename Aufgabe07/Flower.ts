namespace Classes {

    export class Flower {
        x: number;
        y: number;
        position: string;
        petalColor:string;
         
//    constructor() {
//            console.log("Hey");
//            //            this.setRandomStyle();
//            //this.setRandomPosition();
//            this.x = randomX
//            this.y = _y;
//        }
    
    
        
     
    
    //BLUME
    drawFlower (_stalkColor: string, _centerColor: string):void{
        
        //stalk
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x, this.y - 20);
        crc2.stroke();
        crc2.closePath();
        //leafs
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x, this.y - 7);
        crc2.lineTo(this.x + 5, this.y - 7);
        crc2.lineTo(this.x, this.y);
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
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
        crc2.fillStyle = _centerColor;
        crc2.fill();
    }
        
       
    drawTulip(_stalkColor: string): void {
        //stalk
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x, this.y - 20);
        crc2.stroke();
        crc2.closePath();
        //leafs
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x, this.y - 12);
        crc2.lineTo(this.x - 5, this.y - 18);
        crc2.lineTo(this.x, this.y - 5);
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();

        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x, this.y - 12);
        crc2.lineTo(this.x + 5, this.y - 18);
        crc2.lineTo(this.x, this.y - 5);
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
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
        
        setRandomColor():void{
            var colors: string[] = [
            "#FBFCFC", "#CB4335", "#2E86C1", "#AF7AC5"
            ];
            this.petalColor = colors[Math.floor(Math.random() * colors.length)];
                     
        
        }
        
      setRandomPosition():void{
          this.x = (Math.random() * (400 - 1)) + 1;
          this.y = (Math.random() * (300 - 230)) + 230;
         
          
      }
       
}
    }