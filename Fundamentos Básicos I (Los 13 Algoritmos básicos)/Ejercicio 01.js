//Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
function a(x){
    for (i=1;i<=255;i++){
        x.push(i);
    }
    return x;
}
console.log(a([]));