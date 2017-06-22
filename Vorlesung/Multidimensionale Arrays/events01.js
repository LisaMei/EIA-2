var L5_Animation;
(function (L5_Animation) {
    window.addEventListener("load", init);
    let crc2;
    //    let x: number[] = [];
    //    let y: number[] = [];
    let n = 30; //Anzahl
    let size = []; //Array für Größe
    let squareData = []; //Array von Arrays von Zahlen ->leer, nur definiert
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        for (let i = 0; i < n; i++) {
            //            x[i] = Math.random() * 200;
            //            y[i] = Math.random() * 200;
            //            size[i] = Math.random() * (30) + 10; //Max plus min plus min
            squareData[i] = []; //leere Kommode(=Array) in Schublade 0 legen -> wird im Speicher angelegt
            squareData[i][0] = Math.random() * 200;
            squareData[i][1] = Math.random() * 200;
            squareData[i][2] = Math.random() * 30 + 10;
        }
        window.setTimeout(animate, 20);
    }
    function animate() {
        console.log("Animate called");
        crc2.fillStyle = "#ff0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            //            x[i] += Math.random() * 4 - 2;
            //            y[i] += Math.random() * 4 - 2;
            squareData[i][0] += Math.random() * 4 - 2;
            squareData[i][1] += Math.random() * 4 - 2;
            drawObject(squareData[i][0], squareData[i][1], squareData[i][2]);
        }
        window.setTimeout(animate, 20);
    }
    //Quadrat mit jeweils eigenen Koordinaten in Arrays
    function drawObject(_x, _y, _size) {
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, 10, 10);
    }
})(L5_Animation || (L5_Animation = {}));
//# sourceMappingURL=events01.js.map