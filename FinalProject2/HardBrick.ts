namespace Bricks2 {

    export class Brick2 extends Brick {
        color: string;
        lives: number;


        constructor(_x: number, _y: number) {
            console.log("Brick2");
            super(_x, _y);
            this.color = "#808080";
            this.lives = 2;
        }
    }//class
} //namespace