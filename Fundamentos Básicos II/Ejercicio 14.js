//Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, 
//y devuelve el array arr modificado. 
//Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function a(x,b){
    for(i=0;i<x.length;i++){
        x[i]=x[i]*b;
    }
    return x;
}
console.log(a([1,2,3,4,5],2));