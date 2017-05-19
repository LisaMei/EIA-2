namespace Classes {   
    export class Flower {
        x: number;
        y: number;
        petalColor: string;
        stalkColor: string;

        constructor(_x: number, _y: number) {
            console.log("Flower");
            this.stalkColor = "#196F3D";
            this.setRandomColor();
            
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }

        draw():void{
            //abstract
            }
        

       

        setRandomColor(): void {
            var colors: string[] = [
                "#FBFCFC", "#CB4335", "#2E86C1", "#AF7AC5"
            ];
            this.petalColor = colors[Math.floor(Math.random() * colors.length)];
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (400 - 1)) + 1;
            this.y = (Math.random() * (300 - 230)) + 230;
        }

        drawRandomFlowers(): void {
            var randomFlower: number = Math.floor((Math.random() * 2)) + 1;
            if (randomFlower == 1) {
                let r: RegularFlower = new RegularFlower(2,2);
                r.draw();
            } else {
                let t: Tulip = new Tulip(2,2);
                t.draw();
            }
        }

    }
}