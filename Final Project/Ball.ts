namespace Bricks {

    export class Ball {
        x: number;
        y: number;
        xd: number;
        yd: number;
        color: string;
        radius: number;


        constructor() {
            console.log("Ball");
            this.x = crc2.canvas.width / 2;
            this.y = crc2.canvas.height - 60;
            this.xd = 2;
            this.yd = -2;
            this.radius = 10;
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
        }

        move(): void {
            
            let newX=this.x+this.xd;

            //linker oder rechter Rand erreicht
            if (newX > crc2.canvas.width - this.radius || newX < this.radius) {
                this.xd = -this.xd;
            }

            //oberer Rand erreicht
            if (this.y + this.yd < this.radius) {
                this.yd = -this.yd; //nach unten bewegen --> Vorzeichen von yd zu +
            }
            
            //vom Balken abprallen
            if (this.y>bar.y-this.radius && this.x>bar.x && this.x<bar.x+bar.width){
                this.yd = -this.yd;
            }
            
            //unterer Rand erreicht
            if (this.y + this.yd > crc2.canvas.height - this.radius) {
                console.log("game over");
                crc2.fillStyle = "#FF0000";
                crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
                crc2.font = "50px Arial";
                crc2.fillStyle = "#000000";
                crc2.fillText("GAME OVER", 100, 100);
                error=true;
//                crc2.canvas.addEventListener("keydown", handleReturnKey);
                }
            
            
//                //unterer Rand erreicht
//            } else if (this.y + this.yd > crc2.canvas.height - this.radius) {
//
//                //Balken getroffen
//                if (this.x > bar.x && this.x < bar.x + bar.width ) {//&& this.y<barY
//                    this.yd = -this.yd; //wieder nach oben
//
//                    //Überschreitung unterer Rand GAME OVER
//                } else {
//                    crc2.fillStyle = "#FFFFFF";
//                    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
//                    crc2.closePath();
//
//                    crc2.font = "50px Arial";
//                    crc2.fillStyle = "#000000";
//                    crc2.fillText("GAME OVER", 100, 100);
//
//                    //restart game after 3 seconds
//                    setTimeout(function() {
//                        document.location.reload();
//                    }, 3000);
//                }
//            }

            //neue Position
            this.x += this.xd; //+2
            this.y += this.yd; //-2
        }//move
    }//class

} //namespace