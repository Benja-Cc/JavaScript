//Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. 
//Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function a(x){
    counter=0;
    for (i=0;i<x.length;i++){
        if (x[i]>0){
            counter=counter+=1;
        }
    }
    x[x.length-1]=counter;
    return x;
}
console.log(a([-1,-2,-3,1,-2,3]));