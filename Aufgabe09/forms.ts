namespace Form {
    window.addEventListener("load", init);


    let flavors: string[] = ["Chocolate", "Strawberry", "Vanilla", "Cinnamon"];
    let toppings: string[] = [];
    let container: string[] = [];
    let flavorSelections = document.getElementsByName("Select");
    
    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        // hier werden EventListener für vorhandene Fieldsets installiert. Später hinzukommende sind nicht berücksichtigt, geht ja auch gar nicht...
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        
        
        // anonyme Funktion nicht erforderlich! Besser gleich ("click", createFlavorField). Dann könnte man im Handler noch das Event auswerten...
        document.getElementById("addScoop1").addEventListener("click", function() {
            createFlavorField();
            
        });


//        let toppingButtons = document.getElementsByClassName("addTopping");

//        for (let i: number = 0; i < toppingButtons.length; i++) {}

           

 
        // besser keine anonymen Funktionen, wenn nicht erforderlich. Derzeit ist es übersichtlicher, wenn wir Funktionen klar benennen.
        document.getElementById("addScoop2").addEventListener("click", function() { // wird es noch "addScoop3" geben, "addScoop4" ? Dann trägt das System so nicht...
            let flavors = document.getElementById("flavors");
            var flavorsCopy = flavors.cloneNode(true);
            document.getElementById("main").appendChild(flavorsCopy);
            document.getElementById("flavors").style.display = "block";  // das wird mit der id problematisch, wenn man die immer wieder klont.


        });
        
       
        
    }
    
    

    function handleChange(_event: Event): void {
        //console.log(_event);
        //*/
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "toppings")
            console.log("Changed " + target.name + " to " + target.checked);

        if (this.id=="toppings"){
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

            //            for(let n:number=0; n<flavorSelections.length;n++){
            //                if(flavorSelections[n].childElementCount=0){
            //                    flavorSelections[n].appendChild(fla           //                }    

//        }
}

        let scoopNumber = document.createElement("input");
        scoopNumber.type = "number";
        scoopNumber.name = "scoopNumber";
        scoopNumber.step = "1";
        scoopNumber.min = "1";
        scoopNumber.max = "5";
        scoopNumber.value = "0";
        flavorField.appendChild(scoopNumber);

        // hier wird der Topping-Button erzeugt und ist somit bekannt...
        let toppingButton = document.createElement("button");
        toppingButton.type = "button";
        toppingButton.name = "ToppingButton";
        toppingButton.id="addTopping";
        toppingButton.innerText = "Add Topping";
        flavorField.appendChild(toppingButton);
                
        

        // ... er muss also hier nicht mehr gesucht werden um den Listener zu installieren. Es genügt toppingButton.addEventListener(...)
document.getElementById("addTopping").addEventListener("click", function() {
                let toppings = document.getElementById("toppings");
                var toppingsCopy = toppings.cloneNode(true);
                document.getElementById("main").appendChild(toppingsCopy);
                document.getElementById("toppings").style.display = "block";

            }); 
        
        // Potzblitz! Es kümmert sich tatsächlich niemand um die Änderungsevents innerhalb dieses Fieldsets...
        // man könnte nun
        // - den gewünschten Elementen Listener installieren, die dann ganz spezifisch darauf reagiert (z.B. mit scoopNumber.addEventListener...)
        // - dem Fieldset einen Listener installieren, der sich um Ereignisse der Kinder kümmert (mit flavorField.addEventListener...)
        // - oder dem Dokument einen Listener installieren, der sich um alles kümmert (der wäre dann aber sehr mächtig...)
}

    // bitte Autoformat nutzen, macht die Codeprüfung erheblich leichter für die Betreuer und mich
} //namespace
