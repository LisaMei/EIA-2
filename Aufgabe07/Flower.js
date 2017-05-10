var Classes;
(function (Classes) {
    class Flower {
        //    constructor() {
        //            console.log("Hey");
        //            //            this.setRandomStyle();
        //            //this.setRandomPosition();
        //            this.x = randomX
        //            this.y = _y;
        //        }
        //BLUME
        drawFlower(_stalkColor, _centerColor) {
            //stalk
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = _stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 20);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            //leafs
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = _stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 7);
            Classes.crc2.lineTo(this.x + 5, this.y - 7);
            Classes.crc2.lineTo(this.x, this.y);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = _stalkColor;
            Classes.crc2.fill();
            //petals
            Classes.crc2.fillStyle = this.petalColor;
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x, this.y - 25, 5, 0, 2 * Math.PI);
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x - 5, this.y - 20, 5, 0, 2 * Math.PI);
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x + 5, this.y - 20, 5, 0, 2 * Math.PI);
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x, this.y - 15, 5, 0, 2 * Math.PI);
            Classes.crc2.fill();
            //center
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x, this.y - 20, 5, 0, 2 * Math.PI);
            Classes.crc2.fillStyle = _centerColor;
            Classes.crc2.fill();
        }
        drawTulip(_stalkColor) {
            //stalk
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = _stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 20);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            //leafs
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = _stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 12);
            Classes.crc2.lineTo(this.x - 5, this.y - 18);
            Classes.crc2.lineTo(this.x, this.y - 5);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = _stalkColor;
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = _stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 12);
            Classes.crc2.lineTo(this.x + 5, this.y - 18);
            Classes.crc2.lineTo(this.x, this.y - 5);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = _stalkColor;
            Classes.crc2.fill();
            //blossom
            Classes.crc2.fillStyle = this.petalColor;
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x, this.y - 25);
            Classes.crc2.arc(this.x, this.y - 30, 10, 0, Math.PI);
            Classes.crc2.fillStyle = this.petalColor;
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.fillStyle = this.petalColor;
            Classes.crc2.moveTo(this.x - 5, this.y - 25);
            Classes.crc2.lineTo(this.x, this.y - 32);
            Classes.crc2.lineTo(this.x + 5, this.y - 25);
            Classes.crc2.closePath();
            Classes.crc2.fill();
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
    }
    Classes.Flower = Flower;
})(Classes || (Classes = {}));
//# sourceMappingURL=Flower.js.map