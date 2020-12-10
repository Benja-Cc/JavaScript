//Agrega Siete - Construye una función que acepte un array. 
//Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. 
//Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array.
function a(){
    x=[1,2,3,1,2,3];
    z=[];
    for (i=0;i<x.length;i++){
        z.push(x[i]+7);
    }
    return z;
}
console.log(a());