window.addEventListener("load", init);
function init(_event) {
    console.log("Init");
    let topics = ["Location", "Population", "Climate"];
    for (let i = 0; i < topics.length; i++) {
        let field = document.createElement('div');
        field.id = i + "";
        field.innerText = topics[i];
        let fieldArea = document.getElementById("fieldArea");
        fieldArea.appendChild(field);
    }
}
//# sourceMappingURL=experience.js.map