document.addEventListener('DOMContentLoaded', function () {
    
    
    
    let field: number = 0;
    let line: number = 0;
    let rice: number = 1 ;

    
        for (field = 0; field < 64; field++){           
           let div: HTMLElement = document.createElement("div");    
           
           div.innerText=""+rice;
           rice=rice * 2;
           document.body.appendChild(div);
           
               if (field % 8 == 0){
                   line=line+1;
               }

                if (line %2 == 0){ //gerade Zeile
                    if (field % 2 != 0) { //ungerades Feld
                        div.style.backgroundColor = "black";
                        div.style.color = "white";       
                    } else {
                        div.style.backgroundColor = "white";
                        
                    }
                } else { //ungerade zeile
                    if (field % 2 !=0) { //ungerades Feld
                        div.style.backgroundColor = "white";
  
                    } else { //gerades Feld
                        div.style.backgroundColor = "black";
                        div.style.color = "white"; 
                    }        
                }
        }

 
    
    });