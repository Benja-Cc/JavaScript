//Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares 
//entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
function a(x){
    z=0
    for(i=1;i<=x;i+=2){
        z=(i+z)
        console.log(i);
    }
    return z;
}
console.log("Suma Total Numeros Impares "+a(5000));