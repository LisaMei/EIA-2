namespace Classes {


    export class NectarBee extends Bee {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number, _xTarget: number, _yTarget: number) {
            console.log("NectarBee");
            super(_x, _y);
            this.speed = 0.1;
//            this.x = _x;
//            this.y = _y;
            this.xTarget = _xTarget;
             this.yTarget = _yTarget;
        }



        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y;

            let d: number = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
            
            if(this.x < this.xTarget || this.y >this.yTarget){
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }else{
                this.x=this.xTarget;
                this.y= this.yTarget;
        }
        
        
            
            
            
//            if (d >= 2) {
//                this.x += Math.sign(xDiff);
//                this.y += Math.sign(yDiff);
//            }
            
            
            //            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
            //                this.update();
            //            else {
            //                this.x += xDiff * this.speed;
            //                this.y += yDiff * this.speed;
            //            }
            }
        moveToTarget():void{
                
                    
            }
    }
}