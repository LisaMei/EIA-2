window.addEventListener("load", init);


function init(_event: Event): void {
    console.log("Init");


    let topics: string[] = ["Location", "Population", "Climate"];


    for (let i: number = 0; i < topics.length; i++) {
        let field = document.createElement('div');
        
        field.id = i + "";
        field.innerText=topics[i];
        let fieldArea = document.getElementById("fieldArea");
        fieldArea.appendChild(field);

    }










}


