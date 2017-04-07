document.addEventListener('DOMContentLoaded', function () {
    let field = 0;
    let line = 0;
    let rice = 1;
    for (field = 0; field < 64; field++) {
        let div = document.createElement("div");
        div.innerText = "" + rice;
        rice = rice * 2;
        document.body.appendChild(div);
        if (field % 8 == 0) {
            line = line + 1;
        }
        if (line % 2 == 0) {
            if (field % 2 != 0) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
            else {
                div.style.backgroundColor = "white";
            }
        }
        else {
            if (field % 2 != 0) {
                div.style.backgroundColor = "white";
            }
            else {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
        }
    }
    document.getElementsByTagName("div")[0];
    let divList = document.getElementsByTagName("div");
    for (let i = 0; i < 8; i++) {
        divList[i].addEventListener("click", selection);
    }
    function selection(_event) {
        let clickedDiv = _event.target;
        clickedDiv.style.border = "solid black";
        if (clickedDiv.style.border == "solid black") {
            clickedDiv.style.border = "solid red";
            console.log("border color = " + clickedDiv.style.border);
        }
        else {
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
//# sourceMappingURL=chess.js.map