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

    let field: number = 0;
    let line: number = 0;
    let rice: number = 1;


    for (field = 0; field < 64; field++) {
        let div: HTMLElement = document.createElement("div");
        document.body.appendChild(div);
        div.style.border = "solid black";
        div.innerText = "" + rice;
        rice = rice * 2;


        if (field % 8 == 0) {
            line = line + 1;
        }
        if (line % 2 == 0) { //gerade Zeile
            if (field % 2 != 0) { //ungerades Feld
                div.style.backgroundColor = "black";
                div.style.color = "white";
            } else {
                div.style.backgroundColor = "white";

            }
        } else { //ungerade zeile
            if (field % 2 != 0) { //ungerades Feld
                div.style.backgroundColor = "white";

            } else { //gerades Feld
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
        }
    }



    document.getElementsByTagName("div")[0];
    let divList: NodeListOf<HTMLElement> = document.getElementsByTagName("div");

    //Box, die sich mitbewegt
    let box: HTMLElement = document.createElement("div");
    document.body.appendChild(box);
    box.innerText = "" + rice;
    box.style.display = "none";

    for (let i: number = 0; i < 8; i++) {
        divList[i].addEventListener("click", selection);
    }

    function selection(_event: Event): void {
        let clickedDiv: HTMLDivElement = <HTMLDivElement>_event.target;
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


    function coordinates(_event: Event): void {
//        document.getElementById("box").style.display = "block"; //Box wird sichtbar
        
    }

});