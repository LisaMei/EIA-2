var Form;
(function (Form) {
    window.addEventListener("load", init);
    let flavors = ["Chocolate", "Strawberry", "Vanilla", "Cinnamon"];
    let toppings = ["Chocolate Chips", "Strawberries", "Maple Syrup"];
    let containers = ["Waffle Cone", "Cup"];
    let scoopPrice = 1;
    let toppingInputs = [];
    let selectionBoxes = [];
    let scoopNumber = 0;
    let numberInputs = [];
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        //EventListener an fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        createContainerField();
    }
    ;
    function calculatePrice() {
        let toppingPrice = toppingInputs.length * 0.4;
        let sum = scoopNumber * scoopPrice + toppingPrice;
        document.getElementById("total").textContent = "" + (sum.toFixed(2)) + "€";
        console.log("Kugeln: " + scoopNumber + "|Kugelpreis: " + scoopPrice + "|toppinganzahl:" + toppingInputs.length + "|toppingPrice:" + toppingPrice);
    }
    function handleChange(_event) {
        //console.log(_event);
        //*/
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.className == "flavorSelection") {
            for (let i = 0; i < selectionBoxes.length; i++) {
                let output = document.getElementById("products");
                if (output.innerText != selectionBoxes[i].value)
                    output.innerText += selectionBoxes[i].value;
                console.log(selectionBoxes[i]);
            }
        }
        if (this.name == "toppingCheckbox") {
            console.log("Changed " + target.name + " to " + target.value);
            toppingInputs.push(target);
            calculatePrice();
        }
        if (this.className == "numberInput") {
            for (let i = 0; i < numberInputs.length; i++) {
                let valueString = numberInputs[i].value;
                let valueNr = parseInt(valueString);
                scoopNumber = valueNr;
                calculatePrice();
            }
        }
        if (this.name == "containerChoice") {
            document.getElementById("container").innerText = target.value;
        }
    }
    function createContainerField() {
        let containerField = document.createElement("fieldset");
        containerField.id = "radio";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(containerField);
        //Legende für containerField
        let legend = document.createElement("legend");
        legend.innerText = "Cone or Cup?";
        containerField.appendChild(legend);
        //Behälter-Optionen für Array-Einträge
        for (let i = 0; i < containers.length; i++) {
            let container = document.createElement("input");
            container.type = "radio";
            container.value = containers[i];
            container.name = "containerChoice";
            container.id = "radio" + i + 1;
            containerField.appendChild(container);
            //Labels für Behälterauswahl
            let containerLabel = document.createElement("label");
            containerLabel.textContent = containers[i];
            containerLabel.htmlFor = "radio" + i + 1;
            containerField.appendChild(containerLabel);
            container.addEventListener("change", handleChange); //listener an Auswahl
        }
        //scoopButton erstellen
        let scoopButton = document.createElement("button");
        scoopButton.type = "button";
        scoopButton.name = "ScoopButton";
        scoopButton.className = "addScoop";
        scoopButton.innerText = "Add Scoop";
        containerField.appendChild(scoopButton);
        addListenerToScoopButton();
    }
    function createFlavorField() {
        //flavorField erstellen
        let flavorField = document.createElement("fieldset");
        flavorField.className = "flavorField";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(flavorField);
        //Legende
        let legend = document.createElement("legend");
        legend.innerText = "Choose Your Flavors";
        flavorField.appendChild(legend);
        //Select-Form
        let flavorSelection = document.createElement("select");
        flavorSelection.name = "Select";
        flavorSelection.className = "flavorSelection";
        flavorField.appendChild(flavorSelection);
        selectionBoxes.push(flavorSelection);
        //Optionen für Array-Einträge
        for (let i = 0; i < flavors.length; i++) {
            let flavor = document.createElement("option");
            flavor.value = flavors[i];
            flavor.className = "flavorOptions";
            flavor.text = flavors[i];
            flavorSelection.appendChild(flavor);
        }
        //Number-Feld für Eiskugel-Anzahl
        let numberInput = document.createElement("input");
        numberInput.type = "number";
        numberInput.className = "numberInput";
        numberInput.name = "numberInput";
        numberInput.step = "1";
        numberInput.min = "1";
        numberInput.max = "5";
        numberInput.value = "0";
        flavorField.appendChild(numberInput);
        numberInputs.push(numberInput);
        //toppingButton erstellen
        let toppingButton = document.createElement("button");
        toppingButton.type = "button";
        toppingButton.name = "ToppingButton";
        toppingButton.className = "addTopping";
        toppingButton.innerText = "Add Topping";
        flavorField.appendChild(toppingButton);
        //EventListenser an toppingButtons
        let toppingButtons = document.getElementsByClassName("addTopping");
        for (let i = 0; i < toppingButtons.length; i++) {
            let toppingButton = toppingButtons[i];
            toppingButton.addEventListener("click", createToppingField);
        }
        //        flavorSelection.addEventListener("change", displayFlavorInput);//eventListener an flavorSelect-Feld
        flavorSelection.addEventListener("change", handleChange); //eventListener an flavorSelect-Feld
        numberInput.addEventListener("change", handleChange); //eventListener an scoopNumber-Feld
        //       numberInput.addEventListener("change", calculatePrice);
    } //createFlavorField
    function createToppingField() {
        //toppingField erstellen
        let toppingField = document.createElement("fieldset");
        toppingField.id = "toppings";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(toppingField);
        //Legende
        let legend = document.createElement("legend");
        legend.innerText = "Add Your Toppings";
        toppingField.appendChild(legend);
        //checkbox für Array-Einträge
        for (let i = 0; i < toppings.length; i++) {
            let topping = document.createElement("input");
            topping.type = "checkbox";
            topping.value = toppings[i];
            topping.name = "toppingCheckbox";
            topping.id = "Checkbox" + i;
            toppingField.appendChild(topping);
            //Label für checkboxen
            let toppingLabel = document.createElement("label");
            toppingLabel.textContent = toppings[i];
            toppingLabel.htmlFor = topping.id;
            toppingField.appendChild(toppingLabel);
            topping.addEventListener("change", handleChange);
        }
        //scoopButton
        let scoopButton = document.createElement("button");
        scoopButton.type = "button";
        scoopButton.name = "ScoopButton";
        scoopButton.className = "addScoop";
        scoopButton.innerText = "Add Scoop";
        toppingField.appendChild(scoopButton);
        addListenerToScoopButton();
    }
    function addListenerToScoopButton() {
        let scoopButtons = document.getElementsByClassName("addScoop");
        for (let i = 0; i < scoopButtons.length; i++) {
            let scoopButton = scoopButtons[i];
            scoopButton.addEventListener("click", createFlavorField);
        }
    }
})(Form || (Form = {})); //namespace
//# sourceMappingURL=forms.js.map