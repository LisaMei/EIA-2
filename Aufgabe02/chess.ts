document.addEventListener('DOMContentLoaded', function () {
    
    let field: number = 0;
    let line: number = 0;
    let rice: number = 1 ;
    
    
        for (field = 0; field < 64; field++){           
           let div: HTMLElement = document.createElement("div");                   
           div.innerText= "" + rice;           
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
            


                    document.getElementsByTagName("div")[0];
                    let divList : NodeListOf<HTMLElement> = document.getElementsByTagName("div");
                    let selected: boolean = false;
            
                for (let i: number = 0; i < 8; i++) {
                    
//                divList[i].addEventListener("click", handleEvent);
                //document.addEventListener("mousemove", handleEvent);
                    
                    
                    
                     if (selected == false){
                    divList[i].addEventListener("click", select);
                    selected = true;   
                    } else{
                        divList[i].addEventListener("click", deselect);
                        selected = false;         
                    }
            
                    function deselect (): void {   
                        divList[i].style.borderColor = "blue";  
                        selected = false;  
                       
                        console.log(selected);
                    }       
                    function select (): void {
                        divList[i].style.borderColor = "red";   
                        selected = true;  
                   
                        console.log(selected);
                }               
            
            
                divList[i].addEventListener("mousemove", function (Event){
                     let box: HTMLElement = document.createElement("box");
                     document.body.appendChild(box);   
                     document.getElementById("box").style.display = "block";
                    
           });
           }
            
            
           
             
            
                
         
            
            
            
        
    
    });