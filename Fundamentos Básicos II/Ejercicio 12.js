//Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
//Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. }
function a(x){
    var z=0
    for (i=0;i<x.length;i++){
        if (x[i]=="comida"){
            console.log("yummy");
        }
        else if (x[i]!="comida"){
            z=z+1
            if(z==x.length){
                console.log("tengo hambre");
            }
            
        }
    }   
}
a(["frutas","verduras","bebidas"]);
