namespace Form {
    window.addEventListener("load", init);


    let flavors: string[] = ["Chocolate", "Strawberry", "Vanilla", "Cinnamon"];
    let toppings: string[] = ["Chocolate Chips", "Strawberries", "Maple Syrup"];
    let container: string[] = [];
    let flavorSelections = document.getElementsByName("Select");

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");


        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }


        let scoopButtons: NodeListOf<Element> = document.getElementsByClassName("addScoop");

        for (let i: number = 0; i < scoopButtons.length; i++) {
            let scoopButton = scoopButtons[i];
            scoopButton.addEventListener("click", createFlavorField);
        }
    };





    function handleChange(_event: Event): void {
        //console.log(_event);
        //*/
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler

        if (this.id == "toppings") {
            console.log("Changed " + target.name + " to " + target.value);
        }
        //*/
        //*/
        if (target.name == "Slider") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
    }


    function createFlavorField(): void {
        //        document.getElementById("flavors").style.display = "block";


        let flavorField = document.createElement("fieldset");
        flavorField.id = "flavors";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(flavorField);

        let legend = document.createElement("legend");
        legend.innerText = "Choose Your Flavors";
        flavorField.appendChild(legend);

        let flavorSelection = document.createElement("select");
        flavorSelection.name = "Select";
        flavorSelection.id = "flavorSelection";
        flavorField.appendChild(flavorSelection);

        for (let i: number = 0; i < flavors.length; i++) {
            let flavor = document.createElement("option");
            flavor.value = flavors[i];
            flavor.text = flavors[i];
            flavorSelection.appendChild(flavor);
        }

        let scoopNumber = document.createElement("input");
        scoopNumber.type = "number";
        scoopNumber.name = "scoopNumber";
        scoopNumber.step = "1";
        scoopNumber.min = "1";
        scoopNumber.max = "5";
        scoopNumber.value = "0";
        flavorField.appendChild(scoopNumber);

        let toppingButton = document.createElement("button");
        toppingButton.type = "button";
        toppingButton.name = "ToppingButton";
        toppingButton.className = "addTopping";

        toppingButton.innerText = "Add Topping";
        flavorField.appendChild(toppingButton);


        let toppingButtons: NodeListOf<Element> = document.getElementsByClassName("addTopping");

        for (let i: number = 0; i < toppingButtons.length; i++) {
            let toppingButton = toppingButtons[i];
            toppingButton.addEventListener("click", createToppingField);
        }



        flavorSelection.addEventListener("change", handleChange);
        scoopNumber.addEventListener("change", handleChange);
    }//createFlavorField

    function createToppingField(): void {
        //        let toppings = document.getElementById("toppings");
        //        var toppingsCopy = toppings.cloneNode(true);
        //        document.getElementById("main").appendChild(toppingsCopy);
        //        document.getElementById("toppi).style.display = "block";
    
        let toppingField = document.createElement("fieldset");
        toppingField.id = "toppings";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(toppingField);

        let legend = document.createElement("legend");
        legend.innerText = "Add Your Toppings";
        toppingField.appendChild(legend);

        //        let scoopNumber = document.createElement("input");
        //        scoopNumber.type = "checkbox";
        for (let i: number = 0; i < toppings.length; i++) {
            let topping = document.createElement("input");
            topping.type = "checkbox";
            topping.value = flavors[i];
            topping.name = "Checkbox" + i;
            toppingField.appendChild(topping);


            let toppingLabel = document.createElement("label");
            toppingLabel.textContent = toppings[i];
            toppingLabel.htmlFor = topping.name;
            toppingField.appendChild(toppingLabel);
            
             topping.addEventListener("change", handleChange);

        }


    }

} //namespace