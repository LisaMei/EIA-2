var Classes;
(function (Classes) {
    class NectarBee extends Classes.Bee {
        constructor(_x, _y, _xTarget, _yTarget) {
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
        move() {
            let xDiff = this.xTarget - this.x; // Strecke x-Achse
            let yDiff = this.yTarget - this.y; // Strecke y-Achse
            let d = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)); //Differenz "direkter Weg"
            if (this.x < this.xTarget && this.y > this.yTarget) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (this.y < this.yTarget) {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
            if (d < 1) {
                this.y -= 100 * this.speed;
            }
        }
    }
    Classes.NectarBee = NectarBee;
})(Classes || (Classes = {}));
//# sourceMappingURL=nectarBee.js.map