var Bricks2;
(function (Bricks2) {
    class Brick {
        constructor(_x, _y) {
            console.log("Brick");
            this.x = _x;
            this.y = _y;
            this.height = 20;
            this.width = 60;
            this.color = "#7f7f7f";
            this.active = true;
            this.xSpacer = this.width + 20;
            this.ySpacer = this.height + 20;
        }
        draw() {
            Bricks2.crc2.beginPath();
            Bricks2.crc2.rect(this.x, this.y, this.width, this.height);
            Bricks2.crc2.fillStyle = this.color;
            Bricks2.crc2.fill();
            Bricks2.crc2.closePath();
        }
    }
    Bricks2.Brick = Brick; //class
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=Brick.js.map