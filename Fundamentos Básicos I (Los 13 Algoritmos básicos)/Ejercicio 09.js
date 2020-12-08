//Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor 
//(ej: [1,5,10,-2] será [1,25,100,4]).
function a(x){
    for (var i=0;i<x.length;i++){
      x[i]=x[i]*x[i]
    }
    return x;
 }
 console.log(a([1,5,10,-2]));