namespace StudiVZ {


    interface StudentData {
        matrikel: number;
        name: string;
        firstname: string;
        age: number;
        sex: boolean;
        comment: string;
    }

    var students: StudentData[] = []; //Objekt StudentData soll in students Array
    var stop: boolean = false;




    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));

                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    /*
    soll durch Kommata getrennten String annehmen,
    StudentData mit Werten füllen
    gibt String zurück
    Meldung "Erfolg"/Felhermeldung
    */
    function saveData(_input: string): string {

        let inputData: string[] = input.split(',');

        let dataParts = {
            matrikel: parseInt(inputData[0]),
            name: inputData[1],
            firstname: inputData[2],
            age: parseInt(inputData[3]),
            sex: parseInt(inputData[4]) == 0,
            comment: inputData[5]
        };

        students.push(dataParts);

        let sexOutput: string;
        if (dataParts.sex == true) {
            sexOutput = "weiblich";
        } else {
            sexOutput = "männlich";
        }


        console.log(input, inputData, dataParts, "Students: " + students);



        return "Gespeichert! " + "\nMatrikelnummer: " + dataParts.matrikel +
            "\nNachname: " + dataParts.name + "\nVorname: " + dataParts.firstname + "\nAlter: " + dataParts.age +
            "\nGeschlecht: " + sexOutput + "\nKommentar: " + dataParts.comment;
    }

    /*
    nimmt eine Matrikelnummer entgegen
    liefert Datensatz aus students Array formattiert zurück/Fehlermeldung
    */
    function queryData(_matrikel: number): string {

        for (let i: number = 0; i < students.length; i++) {
            let sexOutput: string;
            
            if (students[i].sex == true) {
                sexOutput = "weiblich";
            } else {
                sexOutput = "männlich";
            }

            if (students[i].matrikel == _matrikel) {
                return "Korrekt!" + "\nMatrikelnummer: " + students[i].matrikel +
                    "\nNachname: " + students[i].name + "\nVorname: " + students[i].firstname + "\nAlter: " + students[i].age +
                    "\nGeschlecht: " + sexOutput + "\nKommentar: " + students[i].comment;
            } else {
                return "Ungültige Eingabe!"
            }
        }
        //        
        //        let matrikelInput = input;
        //        let matrikelOutput: string;
        //        
        //        matrit = "Matrikelnummer: "+ input;

        //        if (input == "NaN"){
        //            matrikelOutput = "Ungültige Eingabe!";
        //        }else {
        //          ikelOutput = "Matrikelnummer: "+ input;
        //             
        //        return "Korrekt! " + input;
    }
}