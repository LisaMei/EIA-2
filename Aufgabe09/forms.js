var Form;
(function (Form) {
    window.addEventListener("load", init);
    let flavors = ["Chocolate", "Strawberry", "Vanilla", "Cinnamon"];
    let toppings = ["Chocolate Chips", "Strawberries", "Maple Syrup"];
    let containers = ["Waffle Cone", "Cup"];
    let flavorSelections = document.getElementsByName("Select");
    let scoopPrice = 1;
    let toppingPrice = 0.4;
    let sum = 0;
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        let scoopButtons = document.getElementsByClassName("addScoop");
        for (let i = 0; i < scoopButtons.length; i++) {
            let scoopButton = scoopButtons[i];
            scoopButton.addEventListener("click", createFlavorField);
        }
        createContainerField();
    }
    ;
    function handleChange(_event) {
        //console.log(_event);
        //*/
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "toppings") {
            console.log("Changed " + target.name + " to " + target.value);
        }
        //*/
        //*/
        if (target.name == "Slider") {
            let progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            let progress = document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
    }
    function createContainerField() {
        let containerField = document.createElement("fieldset");
        containerField.id = "radio";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(containerField);
        let legend = document.createElement("legend");
        legend.innerText = "Cone or Cup?";
        containerField.appendChild(legend);
        for (let i = 0; i < containers.length; i++) {
            let container = document.createElement("input");
            container.type = "checkbox";
            container.value = containers[i];
            container.name = "Checkbox" + i;
            containerField.appendChild(container);
            let containerLabel = document.createElement("label");
            containerLabel.textContent = containers[i];
            containerLabel.htmlFor = "radio" + i + 1;
            containerField.appendChild(containerLabel);
            container.addEventListener("change", handleChange);
        }
        let scoopButton = document.createElement("button");
        scoopButton.type = "button";
        scoopButton.name = "ScoopButton";
        scoopButton.className = "addScoop";
        scoopButton.innerText = "Add Scoop";
        containerField.appendChild(scoopButton);
        let scoopButtons = document.getElementsByClassName("addScoop");
        for (let i = 0; i < scoopButtons.length; i++) {
            let scoopButton = scoopButtons[i];
            scoopButton.addEventListener("click", createFlavorField);
        }
    }
    function createFlavorField() {
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
        for (let i = 0; i < flavors.length; i++) {
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
        let toppingButtons = document.getElementsByClassName("addTopping");
        for (let i = 0; i < toppingButtons.length; i++) {
            let toppingButton = toppingButtons[i];
            toppingButton.addEventListener("click", createToppingField);
        }
        flavorSelection.addEventListener("change", handleChange);
        scoopNumber.addEventListener("change", handleChange);
    } //createFlavorField
    function createToppingField() {
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
        for (let i = 0; i < toppings.length; i++) {
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
        let scoopButton = document.createElement("button");
        scoopButton.type = "button";
        scoopButton.name = "ScoopButton";
        scoopButton.className = "addScoop";
        scoopButton.innerText = "Add Scoop";
        toppingField.appendChild(scoopButton);
        let scoopButtons = document.getElementsByClassName("addScoop");
        for (let i = 0; i < scoopButtons.length; i++) {
            let scoopButton = scoopButtons[i];
            scoopButton.addEventListener("click", createFlavorField);
        }
    }
})(Form || (Form = {})); //namespace
//# sourceMappingURL=forms.js.map