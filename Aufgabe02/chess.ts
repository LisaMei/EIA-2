/*  
Aufgabe: Aufgabe 3
Name: Lisa Meister
Matrikel: 254761
Datum: 06.04.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

document.addEventListener('DOMContentLoaded', function() {

    let fields: number = 0;
    let line: number = 0;
    let rice: number = 1;


    for (fields = 0; fields < 64; fields++) {
        
        let field: HTMLElement = document.createElement("div");
            
            document.body.appendChild(field);
            field.style.border = "solid black";
            field.innerText = "" + rice;
            rice = rice * 2;


        if (fields % 8 == 0) {
            line = line + 1;
        }
        if (line % 2 == 0) { //gerade Zeile
            if (fields % 2 != 0) { //ungerades Feld
                field.style.backgroundColor = "black";
                field.style.color = "white";
            } else {
                field.style.backgroundColor = "white";

            }
        } else { //ungerade zeile
            if (fields % 2 != 0) { //ungerades Feld
                field.style.backgroundColor = "white";

            } else { //gerades Feld
                field.style.backgroundColor = "black";
                field.style.color = "white";
            }
        }
    }


    
    document.getElementsByTagName("div")[0];
    let fieldList: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    let clickedDiv: HTMLDivElement;

    //Box, die sich mitbewegt
//    let box: HTMLElement = document.createElement("div");
//    document.body.appendChild(box);
//    let box: HTMLElement = document.getElementById("box");
//    box.innerText = "" + rice;
//    box.style.display = "none";

    for (let i: number = 0; i < 8; i++) {
        fieldList[i].addEventListener("click", selection);
    }

    function selection(_event: Event): void {
        clickedDiv = <HTMLDivElement>_event.target;
        console.log("border color = " + clickedDiv.style.border);

        if (clickedDiv.style.border == "solid black") {
            clickedDiv.style.border = "solid red";

            console.log("border color = " + clickedDiv.style.border);
        }
        else {
            clickedDiv.style.border = "solid black";
        }
        clickedDiv.addEventListener("mousemove", coordinates);
    }
    
    function removeHandler() {
        clickedDiv.removeEventListener('mousemove', coordinates);
    }

    function coordinates(_event: MouseEvent): void {
        
        let x = _event.clientX;
        let y = _event.clientY;
//        box.style.display = "block";
        
    }



});