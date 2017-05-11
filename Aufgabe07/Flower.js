var Classes;
(function (Classes) {
    //let randomPosition:number = (Math.random() * (400 - 1)) + 1;
    class Flower {
        constructor(_x, _y) {
            console.log("Hey");
            //            this.setRandomStyle();
            //this.setRandomPosition();
            this.stalkColor = "#196F3D";
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }
        //BLUME
        drawFlower(_centerColor) {
            //stalk
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = this.stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 20);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            //leafs
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = this.stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 7);
            Classes.crc2.lineTo(this.x + 5, this.y - 7);
            Classes.crc2.lineTo(this.x, this.y);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = this.stalkColor;
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
        drawTulip() {
            //stalk
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = this.stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 20);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            //leafs
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = this.stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 12);
            Classes.crc2.lineTo(this.x - 5, this.y - 18);
            Classes.crc2.lineTo(this.x, this.y - 5);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = this.stalkColor;
            Classes.crc2.fill();
            Classes.crc2.beginPath();
            Classes.crc2.strokeStyle = this.stalkColor;
            Classes.crc2.moveTo(this.x, this.y);
            Classes.crc2.lineTo(this.x, this.y - 12);
            Classes.crc2.lineTo(this.x + 5, this.y - 18);
            Classes.crc2.lineTo(this.x, this.y - 5);
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = this.stalkColor;
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
        drawRandomFlowers() {
            var randomFlower = Math.floor((Math.random() * 2)) + 1;
            if (randomFlower == 1) {
                this.setRandomColor();
                this.setRandomPosition();
                this.drawFlower("#F8C471");
            }
            else {
                this.setRandomColor();
                this.setRandomPosition();
                this.drawTulip();
            }
        }
    }
    Classes.Flower = Flower;
})(Classes || (Classes = {}));
//# sourceMappingURL=Flower.js.map