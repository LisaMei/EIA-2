var Classes;
(function (Classes) {
    class Tulip extends Classes.Flower {
        constructor(_x, _y) {
            console.log("Tulip");
            super(_x, _y);
        }
        draw() {
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
    }
    Classes.Tulip = Tulip;
})(Classes || (Classes = {}));
//# sourceMappingURL=tulip.js.map