//Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
//Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function a(x,b){
    for (var i=0;i<x.length;i++){
      if (x[i]>0){
        x[i]=b;
      }
    }
    return x;
  }
  console.log(a([-1,3,5,-5,0],"big"))