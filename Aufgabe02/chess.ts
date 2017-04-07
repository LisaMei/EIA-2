document.addEventListener('DOMContentLoaded', function() {

    let field: number = 0;
    let line: number = 0;
    let rice: number = 1;


    for (field = 0; field < 64; field++) {
        let div: HTMLElement = document.createElement("div");
        div.innerText = "" + rice;
        rice = rice * 2;
        document.body.appendChild(div);

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


    for (let i: number = 0; i < 8; i++) {

        divList[i].addEventListener("click", selection);
//        divList[i].addEventListener("mousemove", box);

    }
   
    
    function selection(_event: Event): void {
         let clickedDiv: HTMLDivElement = <HTMLDivElement> _event.target;
         clickedDiv.style.border = "solid black";
         
         
            if (clickedDiv.style.border == "solid black") {
                clickedDiv.style.border = "solid red";
                console.log("border color = " + clickedDiv.style.border);
            } else {
                clickedDiv.style.borderStyle = "solid black";
            }
         
            
        }
    
    
    
    
    
//            function box (_event: Event) {
//                let box: HTMLElement = document.createElement("div");
//                document.body.appendChild(box);
//                box.innerText = "" + rice;
//                
//                
//                document.getElementById("box").style.display = "block";
//
//        }
    
});