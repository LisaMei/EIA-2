/*
Aufgabe: Aufgabe 3
Name: Lisa Meister
Matrikel: 254761
Datum: 06.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    let fields = 0;
    let line = 0;
    //    let rice: number = 1;
    let box = document.getElementById("box");
    for (fields = 0; fields < 64; fields++) {
        let field = document.createElement("div");
        field.id = fields.toString();
        document.body.appendChild(field);
        field.style.border = "solid black";
        //        field.innerText = "" + rice;
        //        rice = rice * 2;
        if (fields % 8 == 0) {
            line = line + 1;
        }
        if (line % 2 == 0) {
            if (fields % 2 != 0) {
                field.style.backgroundColor = "black";
                field.style.color = "white";
            }
            else {
                field.style.backgroundColor = "white";
            }
        }
        else {
            if (fields % 2 != 0) {
                field.style.backgroundColor = "white";
            }
            else {
                field.style.backgroundColor = "black";
                field.style.color = "white";
            }
        }
    }
    console.log(box.innerText);
    document.getElementsByTagName("div")[0];
    let fieldList = document.getElementsByTagName("div");
    let clickedDiv;
    //Box, die sich mitbewegt
    box.style.display = "none";
    let i;
    for (let i = 0; i < 9; i++) {
        fieldList[i].addEventListener("click", selection);
    }
    function selection(_event) {
        clickedDiv = _event.target;
        let nummer = parseInt(clickedDiv.id);
        let rice = Math.pow(2, nummer);
        console.log("border color = " + clickedDiv.style.border);
        if (clickedDiv.style.border == "solid black") {
            clickedDiv.style.border = "solid red";
            clickedDiv.addEventListener("mousemove", coordinates);
            //            console.log("border color = " + clickedDiv.style.border);
            //            rice = rice + Number(fieldList[i].textContent);
            box.innerText = "Dezimalzahl: " + rice + "Hexadezimalzahl: " + rice.toString(16);
            box.style.display = "inline-block";
        }
        else {
            clickedDiv.style.border = "solid black";
            //            clickedDiv.addEventListener("mousemove", removeHandler);
            box.style.display = "none";
        }
    }
    function removeHandler() {
        clickedDiv.removeEventListener('mousemove', coordinates);
    }
    function coordinates(_event) {
        document.getElementById("box").style.left = (_event.clientX + 10) + "px";
        document.getElementById("box").style.top = (_event.clientY + 10) + "px";
    }
});
//# sourceMappingURL=chess.js.map