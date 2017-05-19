var Classes;
(function (Classes) {
    class RegularFlower extends Classes.Flower {
        constructor(_x, _y) {
            console.log("regularFlower");
            super(_x, _y);
            this.centerColor = "#F8C471";
        }
        //BLUME
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
            Classes.crc2.fillStyle = this.centerColor;
            Classes.crc2.fill();
        }
    }
    Classes.RegularFlower = RegularFlower;
})(Classes || (Classes = {}));
//# sourceMappingURL=regularFlower.js.map