namespace Classes {

    export class Bee {
        x: number;
        y: number;
        color: string;
        stripeColor: string;

 
        constructor(_x: number, _y: number) {
            console.log("Hey, I'm Bob!");
            //            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }


        update(): void {
            this.move();
            this.draw();
        }


        draw(): void {
            //hinterer Flügel
            crc2.beginPath();
            crc2.arc(this.x + 2, this.y - 1, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.strokeStyle = "#3ECFFF";
            crc2.stroke();

            //vorderer Flügel
            crc2.beginPath();
            crc2.arc(this.x + 1, this.y - 2, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.strokeStyle = "#B2ECFF";
            crc2.stroke();

            //Stachel
            crc2.beginPath();
            crc2.moveTo(this.x - 3, this.y - 1); //obere Ecke Dreieck
            crc2.lineTo(this.x - 5, this.y); //linke Ecke
            crc2.lineTo(this.x - 3, this.y + 1);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.fill();

            //Hinterteil
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.closePath();
            //        crc2.fillStyle = "#F8C471";
            crc2.fillStyle = this.color;
            crc2.fill();

            //Bienenkopf
            crc2.beginPath();
            crc2.arc(this.x + 3, this.y, 3, 0, 2 * Math.PI);
            crc2.closePath();
            //        crc2.fillStyle = "#F8C471";
            crc2.fillStyle = this.color;
            crc2.fill();

            //Körpermitte
            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y - 3); //Rechteck linke obere Ecke
            crc2.lineTo(this.x + 3, this.y - 3);//Ecke rechts oben
            crc2.lineTo(this.x + 3, this.y + 3);//Ecke rechts unten
            crc2.lineTo(this.x - 1, this.y + 3); //Ecke links unten
            crc2.closePath();
            crc2.fillStyle = this.stripeColor;
            crc2.fill();

            //Auge
            crc2.beginPath();
            crc2.arc(this.x + 4.5, this.y - 0.5, 0.5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#000000";
            crc2.fill();
        }

        move(): void {
            this.x += Math.random() * 4.5 - 2;
            this.y += Math.random() * 4 - 2;
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y > crc2.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }
        }

        setRandomStyle(): void {
            let beeColors: string[] = [
                "#F8C471", "#f7a92c", "#ffca2b"
            ];

            let stripeColors: string[] = ["#000000", "#443622"];
            let randomBeeColor: string;
            let randomStripeColor: string;
            randomBeeColor = beeColors[Math.floor(Math.random() * beeColors.length)];
            randomStripeColor = stripeColors[Math.floor(Math.random() * stripeColors.length)];

            this.color = randomBeeColor;
            this.stripeColor = randomStripeColor;
        }

    }

}