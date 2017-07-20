var Bricks2;
(function (Bricks2) {
    class Brick2 extends Bricks2.Brick {
        constructor(_x, _y) {
            console.log("Brick2");
            super(_x, _y);
            this.color = "#808080";
        }
        draw() {
        }
    }
    Bricks2.Brick2 = Brick2; //class
})(Bricks2 || (Bricks2 = {})); //namespace
//# sourceMappingURL=HardBrick.js.map