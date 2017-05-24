var Form;
(function (Form) {
    window.addEventListener("load", init);
    let flavors = ["Chocolate", "Strawberry", "Vanilla", "Cinnamon"];
    let toppings = [];
    let container = [];
    let flavorSelections = document.getElementsByName("Select");
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        document.getElementById("addScoop1").addEventListener("click", function () {
            createFlavorField();
            createFlavors();
        });
        let toppingButtons = document.getElementsByClassName("addTopping");
        for (let i = 0; i < toppingButtons.length; i++) {
            toppingButtons[i].addEventListener("click", function () {
                let toppings = document.getElementById("extras");
                var toppingsCopy = toppings.cloneNode(true);
                document.getElementById("main").appendChild(toppingsCopy);
                document.getElementById("extras").style.display = "block";
            });
        }
        document.getElementById("addScoop2").addEventListener("click", function () {
            let flavors = document.getElementById("flavors");
            var flavorsCopy = flavors.cloneNode(true);
            document.getElementById("main").appendChild(flavorsCopy);
            document.getElementById("flavors").style.display = "block";
        });
    }
    function handleChange(_event) {
        //console.log(_event);
        //*/
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "extras")
            console.log("Changed " + target.name + " to " + target.checked);
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
    function createFlavorField() {
        //        document.getElementById("flavors").style.display = "block";
        let flavorField = document.createElement("fieldset");
        flavorField.id = "flavors";
        let mainDiv = document.getElementById("main");
        mainDiv.appendChild(flavorField);
        let flavorSelection = document.createElement("select");
        flavorSelection.name = "Select";
        flavorField.appendChild(flavorSelection);
        let scoopNumber = document.createElement("input");
        scoopNumber.type = "number";
        scoopNumber.name = "Stepper";
        flavorField.appendChild(scoopNumber);
        let flavorButton = document.createElement("button");
        flavorButton.type = "button";
        flavorButton.name = "FlavorButton";
        flavorField.appendChild(flavorButton);
    }
    function createFlavors() {
        for (let i = 0; i < flavors.length; i++) {
            let flavor = document.createElement("option");
            flavor.value = "option" + i + 1;
            flavor.innerText = flavors[i];
            for (let n = 0; n < flavorSelections.length; n++) {
                if (flavorSelections[n].childElementCount = 0) {
                    flavorSelections[n].appendChild(flavor);
                }
            }
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=forms.js.map