document.addEventListener('DOMContentLoaded', function () {
    let field = 0;
    let line = 0;
    let rice = 1;
    for (field = 0; field < 64; field++) {
        let div = document.createElement("div");
        div.style.border = "solid black";
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
    //Box, die sich mitbewegt
    let box = document.createElement("div");
    document.body.appendChild(box);
    box.innerText = "" + rice;
    box.style.display = "none";
    for (let i = 0; i < 8; i++) {
        divList[i].addEventListener("click", selection);
        divList[i].addEventListener("mousemove", movingBox);
    }
    function selection(_event) {
        let clickedDiv = _event.target;
        console.log("border color = " + clickedDiv.style.border);
        if (clickedDiv.style.border == "solid black") {
            clickedDiv.style.border = "solid red";
            console.log("border color = " + clickedDiv.style.border);
        }
        else {
            clickedDiv.style.border = "solid black";
        }
    }
    function movingBox(_event) {
        document.getElementById("box").style.display = "block"; //Box wird sichtbar
    }
});
//# sourceMappingURL=chess.js.map