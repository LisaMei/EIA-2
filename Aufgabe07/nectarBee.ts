namespace Classes {


    export class NectarBee extends Bee {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number, _xTarget: number, _yTarget: number) {
            console.log("NectarBee");
            super(_x, _y);
            this.speed = 0.05;                   
            this.xTarget = _xTarget;
            this.yTarget = _yTarget;
        }

        //        setRandomTargetPosition():void{
        //            this.xTarget = _xTarget;
        //            this.yTarget = _yTarget; 
        //        }

        move(): void {
            let xDiff: number = this.xTarget - this.x; // Strecke x-Achse
            let yDiff: number = this.yTarget - this.y; // Strecke y-Achse
            let d: number = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)); //Differenz "direkter Weg"

            if (this.x < this.xTarget && this.y > this.yTarget) { //zufällige Blume rechts von der Biene
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (this.y < this.yTarget) { //zufällige Blume links von der Biene
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }

            if (d <1) { //Biene ist angekommen
              
                this.y -= 100 * this.speed;
            }
            }

        

    }
}