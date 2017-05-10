var Classes;
(function (Classes) {
    class Bee {
        constructor(_x, _y) {
            console.log("Hey, I'm Bob!");
            //            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //hinterer Flügel
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x + 2, this.y - 1, 3, 0, 2 * Math.PI);
            Classes.crc2.closePath();
            Classes.crc2.strokeStyle = "#3ECFFF";
            Classes.crc2.stroke();
            //vorderer Flügel
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x + 1, this.y - 2, 3, 0, 2 * Math.PI);
            Classes.crc2.closePath();
            Classes.crc2.strokeStyle = "#B2ECFF";
            Classes.crc2.stroke();
            //Stachel
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x - 3, this.y - 1); //obere Ecke Dreieck
            Classes.crc2.lineTo(this.x - 5, this.y); //linke Ecke
            Classes.crc2.lineTo(this.x - 3, this.y + 1);
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = "#000000";
            Classes.crc2.fill();
            //Hinterteil
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = this.color;
            Classes.crc2.fill();
            //Bienenkopf
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x + 3, this.y, 3, 0, 2 * Math.PI);
            Classes.crc2.closePath();
            //        crc2.fillStyle = "#F8C471";
            Classes.crc2.fillStyle = this.color;
            Classes.crc2.fill();
            //Körpermitte
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.x - 1, this.y - 3); //Rechteck linke obere Ecke
            Classes.crc2.lineTo(this.x + 3, this.y - 3); //Ecke rechts oben
            Classes.crc2.lineTo(this.x + 3, this.y + 3); //Ecke rechts unten
            Classes.crc2.lineTo(this.x - 1, this.y + 3); //Ecke links unten
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = this.stripeColor;
            Classes.crc2.fill();
            //Auge
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.x + 4.5, this.y - 0.5, 0.5, 0, 2 * Math.PI);
            Classes.crc2.closePath();
            Classes.crc2.fillStyle = "#000000";
            Classes.crc2.fill();
        }
        move() {
            this.x += Math.random() * 4.5 - 2;
            this.y += Math.random() * 4 - 2;
            if (this.x > Classes.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y > Classes.crc2.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = Classes.crc2.canvas.height;
            }
        }
        setRandomStyle() {
            let beeColors = [
                "#F8C471", "#f7a92c", "#ffca2b"
            ];
            let stripeColors = ["#000000", "#443622"];
            let randomBeeColor;
            let randomStripeColor;
            randomBeeColor = beeColors[Math.floor(Math.random() * beeColors.length)];
            randomStripeColor = stripeColors[Math.floor(Math.random() * stripeColors.length)];
            this.color = randomBeeColor;
            this.stripeColor = randomStripeColor;
        }
    }
    Classes.Bee = Bee;
})(Classes || (Classes = {}));
//# sourceMappingURL=Bee.js.map