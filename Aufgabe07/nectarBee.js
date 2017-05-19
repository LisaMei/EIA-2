var Classes;
(function (Classes) {
    class NectarBee extends Classes.Bee {
        constructor(_x, _y, _xTarget, _yTarget) {
            console.log("NectarBee");
            super(_x, _y);
            this.speed = 0.1;
            this.x = _x;
            this.y = _y;
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            let d = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
            if (d >= 2) {
                this.x += Math.sign(xDiff);
                this.y += Math.sign(yDiff);
            }
            //            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
            //                this.update();
            //            else {
            //                this.x += xDiff * this.speed;
            //                this.y += yDiff * this.speed;
            //            }
        }
    }
    Classes.NectarBee = NectarBee;
})(Classes || (Classes = {}));
//# sourceMappingURL=nectarBee.js.map