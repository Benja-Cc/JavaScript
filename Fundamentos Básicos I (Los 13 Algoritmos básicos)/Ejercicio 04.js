//Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
//(ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function a(x){
    z=0
    for (i=0;i<x.length;i++){
        z=x[i]+z
    }
    return z;
}
console.log(a([1,2,6,10]));