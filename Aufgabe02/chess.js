document.addEventListener('DOMContentLoaded', function () {
    let field = 0;
    let line = 0;
    let rice = 1;
    let black = false;
    for (line = 0; line < 8; line++) {
        for (field = 0; field < 64; field++) {
            let div = document.createElement("div");
            rice = rice * 2;
            div.innerText = "" + rice;
            document.body.appendChild(div);
            if (black == false) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
            else {
                div.style.backgroundColor = "white";
            }
            black = true;
        }
        black = true;
    }
});
//# sourceMappingURL=chess.js.map