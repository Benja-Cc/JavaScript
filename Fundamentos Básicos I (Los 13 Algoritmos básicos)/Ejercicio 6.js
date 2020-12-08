//Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores
// (ej: para [1,3,5,7,20] el promedio es 7.2).
function a(x){
    var suma = 0;
    for(var i=0; i < x.length; i++){
        suma += x[i];
    } 
    return suma / x.length;
} 
console.log("Promedio ",a([1,3,5,7,20]));
