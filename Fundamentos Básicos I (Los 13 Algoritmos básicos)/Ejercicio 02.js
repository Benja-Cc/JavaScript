//Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - 
//Puedes usar un operador de módulo para este ejercicio. 
function a(x){
    z=0
    for(i=2;i<=x;i+=2){
        z=i+z
        console.log(i);
    }
    return z;
}
console.log("Suma total Numeros Pares "+a(1000));