/*  
Aufgabe: Finales Projekt
Name: Lisa Meister
Matrikel: 254761
Datum: 13.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 
*/

namespace Bricks2 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let rightKey: boolean = false;
    export let leftKey: boolean = false;
    let enterKey: boolean = false;

    export let bar: Bar;
    export let ball: Ball;
    export let gameOver: boolean = false;
    export let bricks: Brick[] = [];
    //    let bricks: Brick[][] = [];
    let columnNr: number = 5;
    let rowNr: number = 4;
    //    let bricks= [    

    let brickNumber: number = 20;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        drawStartScreen();

        bar = new Bar(canvas.width / 2 - 50, canvas.height - 40); // (canvas.width-this.width)/2 !?
        ball = new Ball();
        //        createBrickField();
        createBrickField();

        document.addEventListener("keydown", handleKeyPress, false);
        document.addEventListener("keyup", handleKeyRelease, false);
        window.addEventListener("resize", resizeCanvas, false);
        //window.setTimeout(animate, 10);           
    }//init


    function startGame(): void {
        window.setTimeout(animate, 10);
    }

    function animate(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height); //clear old path       
        spliceDeadBricks();
        drawActiveBricks();


        //        spliceBricks();
        //        draeld();
        
        bar.draw();
        ball.update();

        if (gameOver == true) {
            document.addEventListener("keydown", handleEnterKey, false);
            document.addEventListener("keyup", handleEnterRelease, false);
        }
        window.setTimeout(animate, 10);
    } //animate


    function createBrickField(): void {
        let brickPosx: number = 50;
        let brickPosy: number = 50;

        for (let i: number = 0; i < 21; i++) {
            let brick: Brick = new Brick(brickPosx, brickPosy);
            if (i % 5 == 0 && i != 0) {
                brickPosx = 50;
                brickPosy += brick.ySpacer;
            } else if (i != 0) {
                brickPosx += brick.xSpacer;
            }
            bricks[i] = brick; //brick in Arregen
        }
    }//createBrickField




    //    function createBrickField(): void {
    //        
    //        let brickPosx: number;
    //        let brickPosy: number;
    //
    //        for (let c: number = 0; c < columnNr; c++) {
    //            bricks[c] = []; //in den Spaltenarray einen Array legen
    //            for (let r: number = 0; r < rowNr; r++) {
    //                let brick: Brick = new Brick(brickPosx, brickPosy);
    //                bricks[c][r] = brick;
    //                brickPosx = (c * (brick.width + brick.xSpacer));
    //                brickPosy = (r * (brick.height + brick.ySpacer));
    //
    //                //                bricks[c][r].x = 0;
    //                //                bricks[c][r].y = 0;
    //                bricks[c][r].x = brickPosx;
    //                bricks[c][r].y = brickPosy;
    //                con.log(bricks[c][r]);
    //
    //            }
    //        }
    //
    //    }
    
    //    function drawBrickField(): void {
    //        let columnNr: number = 5;
    //        let rowNr: number = 4;
    //
    //
    //        for (let c: number = 0; c < columnNr; c++) {            
    //            for (let r: number = 0; r < rowNr; r++) {
    //                var b = bricks[c][r];
    //                b.draw();
    //
    //            }
    //        }
    //
    //    }




    function drawActiveBricks(): void {
        for (let i: number = 0; i < bricks.length; i++) {
            bricks[i].draw();

        }
    }


    //    function spliceBricks(): void {
    //       
    //        for (let c = 0; c < columnNr; c++) {
    //            for (let r = 0; r < rowNr; r++) {
    //                let b = bricks[c][r];
    //                let hit: boolean = ball.detectCollision(b.x, b.y, b.width, b.height);
    //                if (hit == true) {
    //                    bricks.splice([c][r], 1);
    //                    console.log("brick spliced");
    //                }
    //            }
    //            }
    //        }


    function spliceDeadBricks(): void {
        for (let i: number = 0; i < bricks.length; i++) {
            //bricks[i].checkStatus();
            let hit: boolean = ball.detectCollision(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);

            if (hit == true) {
                bricks.splice(i, 1);
                console.log("brick spliced");
            }
        }
    }//spliceBricks

    //Key is pressed
    function handleKeyPress(_event: KeyboardEvent) {
        if (_event.keyCode == 39) {//right
            rightKey = true;
            //            console.log("rightKey: " + rightKey);
            bar.move();
        }
        else if (_event.keyCode == 37) {//left
            leftKey = true;
            //            console.log("leftKey: " + leftKey);
            bar.move();
        }
        if (_event.keyCode == 32) {
            startGame();
        }
    }//handleDownkey


    //Key is released
    function handleKeyRelease(_event: KeyboardEvent) {
        if (_event.keyCode == 39) {//right
            rightKey = false;
        }
        else if (_event.keyCode == 37) {//left
            leftKey = false;
        }
    }//handleKeyRelease


    //enter key
    function handleEnterKey(_event: KeyboardEvent) {
        if (_event.keyCode == 13) {
            enterKey = true;
            reloadGame();
        }
    }

    function handleEnterRelease(_event: KeyboardEvent) {
        if (_event.keyCode == 13) {
            enterKey = false;
        }
    }

    function reloadGame(): void {
        document.location.reload();
    }

    function drawStartScreen(): void {
        let centerX: number = crc2.canvas.width / 2;
        crc2.strokeStyle = 'red';
        crc2.moveTo(centerX, 20);
        crc2.lineTo(centerX, 100);
        //crc2.stroke();
        let startImg: HTMLImageElement;
        startImg = <HTMLImageElement>document.getElementById("startImg");
        crc2.drawImage(startImg, 30, 10);
        crc2.textAlign = 'center';
        crc2.font = "20px Courier New";
        crc2.fillStyle = "#FFFFFF";
        crc2.fillText("Hit spacbar to start game", centerX, 400);
    }


    function resizeCanvas(): void {
        let windowWidth:number=window.innerWidth;
        let windowHeight:number=window.innerHeight
        let scaleX:number = windowWidth/crc2.canvas.width;
        let scaleY:number = windowHeight/crc2.canvas.height;
        let screenRatio:number = windowWidth/windowHeight;
        let optimalRatio:number=Math.min(scaleX, scaleY);
        
        if(screenRatio>=1.77&&screenRatio<=1.79){
            crc2.canvas.style.width = windowWidth+"px";
            crc2.canvas.style.height = windowHeight+"px";               
        }else{
            crc2.canvas.style.width = crc2.canvas.width*optimalRatio+"px";
            crc2.canvas.style.height = crc2.canvas.height*optimalRatio+"px";      
        }
        

    }

} //namespace