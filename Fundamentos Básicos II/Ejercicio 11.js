//Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, 
//pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function a(x){
    z=[];
    for (i=0;i<x.length;i++){
        if (x[i]<0){
            z.push(x[i]);
        }
        else{
            z.push(-(x[i]));
        }
    }
    return z;
}
console.log(a([1,-3,5]));