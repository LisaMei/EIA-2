var Classes;
(function (Classes) {
    class NectarBee extends Classes.Bee {
        constructor(_x, _y) {
            console.log("NectarBee");
            super(_x, _y);
            this.speed = 0.05;
            this.setRandomTargetPosition();
            //            this.xTarget = targetX;
            //            this.yTarget = targetY;
        }
        setRandomTargetPosition() {
            let randomNectarFlower = Classes.flowers[Math.floor(Math.random() * Classes.flowers.length)];
            this.xTarget = randomNectarFlower.x;
            this.yTarget = randomNectarFlower.y - 20; // -20 -> am Blumenkopf
        }
        setHomePos() {
            this.xTarget = 75;
            this.yTarget = 203;
        }
        move() {
            let xDiff = this.xTarget - this.x; // Strecke x-Achse
            let yDiff = this.yTarget - this.y; // Strecke y-Achse
            let d = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)); //Differenz "direkter Weg"
            if (xDiff > 0 && yDiff > 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff < 0 && yDiff > 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff > 0 && yDiff < 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (xDiff < 0 && yDiff < 0) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            //            if (this.x < this.xTarget && this.y > this.yTarget) { //zufällige Blume rechts von der Biene
            //                this.x += xDiff * this.speed;
            //                this.y += yDiff * this.speed;  //            } 
            //            
            //                if (this.x > this.xTarget) { //zufällige Blume links von der Biene
            //                this.x += xDiff * this.speed;
            //      this.y += yDiff * this.speed;
            //            
            //                     
            //            if (d < 1) { //Biene ist angekommen
            //                this.setHomePos();
            //                this.move();
            //                
            ////                this.setRandomTargetPosition();
            //                //                this.y -= 100                
            //            }
            if (d < 1) {
                this.setRandomTargetPosition();
            }
        }
    }
    Classes.NectarBee = NectarBee;
})(Classes || (Classes = {}));
//# sourceMappingURL=nectarBee.js.map