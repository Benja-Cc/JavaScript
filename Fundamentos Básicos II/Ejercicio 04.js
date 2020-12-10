//Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
//Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function a(x){
    console.log("Array Original",x);
    var z=[]
    for (var i=0;i<x.length;i++){
      z.push(x[i]+x[i]);
    }
    return z;
 }
 console.log("Doble",a([1,2,3,4,5]));