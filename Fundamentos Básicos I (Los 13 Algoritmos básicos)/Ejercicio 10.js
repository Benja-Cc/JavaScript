//Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0.
// Cuando el programa esté listo, el array no debiera contener números negativos
// (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function a(x){
    for (var i=0;i<x.length;i++){
      if (x[i]<0){
        x[i]=0;
      }
    }return x;
  }
  console.log(a([15, 8, -18, 3, -2, -7, 5]));