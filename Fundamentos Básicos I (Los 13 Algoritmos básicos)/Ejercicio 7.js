//Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
//(ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function a(x,b){
    for (i=1;i<=b;i+=2){
        x.push(i)
    }
    return x;
}
console.log(a([],50));