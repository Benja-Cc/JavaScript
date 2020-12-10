//Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
//Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
//Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
function a(x){
    [x[0],x[1],x[2],x[3],x[4]] = [x[4],x[3],x[2],x[1],x[0]]
    return x;
}
console.log(a([3,1,6,4,2]));