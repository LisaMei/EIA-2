document.addEventListener('DOMContentLoaded', function () {
    
    
    
    let field: number = 0;
    let line: number = 0;
    let rice: number = 1 ;
    let black: boolean= false;
    
    
    
    
    for (line = 0; line < 8; line++){
    
        for (field = 0; field < 64; field++){           
           let div: HTMLElement = document.createElement("div");
           
           rice=rice * 2;
           div.innerText=""+rice;
           document.body.appendChild(div);
            
                    
               
               if (black==false) {
                   div.style.backgroundColor = "black";
                   div.style.color = "white";
                   
                } else {
                    div.style.backgroundColor = "white";
                }           
          black = true;
         }
     black = true;
    }
    
    
    
    });