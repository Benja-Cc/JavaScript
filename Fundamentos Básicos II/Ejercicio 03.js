//Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
//La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function a(x){
    console.log("Penultimo Valor ",x[x.length-2]);
    for (i=0;i<x.length;i++){
        for (j=1;j<=Math.max.apply(null, x);j+=2){
            if(x[i]==j){
                return x[i];
            }
        } 
    }
}
console.log("Primer Valor Impar ",a([8,4,13,6,9]))