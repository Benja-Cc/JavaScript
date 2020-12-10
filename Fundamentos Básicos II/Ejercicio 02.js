//Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
//La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function a(x){
    console.log("Numero Menor ",Math.min.apply(null, x));
    return Math.max.apply(null, x);
}
console.log("Numero Mayor ",(a([1,5,10,-2])));
