var Classes;
(function (Classes) {
    class Flower {
        constructor(_x, _y) {
            console.log("Flower");
            this.stalkColor = "#196F3D";
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }
        draw() {
            //abstract
        }
        setRandomColor() {
            var colors = [
                "#FBFCFC", "#CB4335", "#2E86C1", "#AF7AC5"
            ];
            this.petalColor = colors[Math.floor(Math.random() * colors.length)];
        }
        setRandomPosition() {
            this.x = (Math.random() * (400 - 1)) + 1;
            this.y = (Math.random() * (300 - 230)) + 230;
        }
        drawRandomFlowers() {
            var randomFlower = Math.floor((Math.random() * 2)) + 1;
            if (randomFlower == 1) {
                let r = new Classes.RegularFlower(2, 2);
                r.draw();
            }
            else {
                let t = new Classes.Tulip(2, 2);
                t.draw();
            }
        }
    }
    Classes.Flower = Flower;
})(Classes || (Classes = {}));
//# sourceMappingURL=Flower.js.map