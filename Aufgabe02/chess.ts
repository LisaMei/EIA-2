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
     let box: HTMLElement = document.getElementById("box");

    for (fields = 0; fields < 64; fields++) {

        let field: HTMLElement = document.createElement("div");

        document.body.appendChild(field);
        field.style.border = "solid black";
//        field.innerText = "" + rice;
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


console.log(box.innerText);
    document.getElementsByTagName("div")[0];
    let fieldList: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    let clickedDiv: HTMLDivElement;

    //Box, die sich mitbewegt
  
    
    box.style.display = "none";
    let i:number;
    
    for (let i = 0; i < 8; i++) {
        fieldList[i].addEventListener("click", selection);
        box.innerText = "Dezimalzahl: " + rice + "Hexadezimalzahl: " + rice.toString(16);
    }

    function selection(_event: Event): void {
        clickedDiv = <HTMLDivElement>_event.target;
        console.log("border color = " + clickedDiv.style.border);

        if (clickedDiv.style.border == "solid black") {
            clickedDiv.style.border = "solid red";
            clickedDiv.addEventListener("mousemove", coordinates);
//            console.log("border color = " + clickedDiv.style.border);
//            rice = rice + Number(fieldList[i].textContent);
            
            box.style.display = "inline-block";
        }
        
        else {
            clickedDiv.style.border = "solid black";
//            clickedDiv.addEventListener("mousemove", removeHandler);
            box.style.display = "none";
//            rice = rice - Number(fieldList[i].textContent);
        }
        
        
    }

    function removeHandler() {
        clickedDiv.removeEventListener('mousemove', coordinates);
    }

    function coordinates(_event: MouseEvent): void {
        document.getElementById("box").style.left = (_event.clientX + 10) + "px";
        document.getElementById("box").style.top = (_event.clientY + 10) + "px";
        
        
       
            
    }



});