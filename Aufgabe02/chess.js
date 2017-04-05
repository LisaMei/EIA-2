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
    let selected = false;
    for (let i = 0; i < 8; i++) {
        //                divList[i].addEventListener("click", handleEvent);
        //document.addEventListener("mousemove", handleEvent);
        if (selected == false) {
            divList[i].addEventListener("click", select);
            selected = true;
        }
        else {
            divList[i].addEventListener("click", deselect);
            selected = false;
        }
        function deselect() {
            divList[i].style.borderColor = "blue";
            selected = false;
            console.log(selected);
        }
        function select() {
            divList[i].style.borderColor = "red";
            selected = true;
            console.log(selected);
        }
        divList[i].addEventListener("mousemove", function (Event) {
            let box = document.createElement("box");
            document.body.appendChild(box);
            document.getElementById("box").style.display = "block";
        });
    }
});
//# sourceMappingURL=chess.js.map