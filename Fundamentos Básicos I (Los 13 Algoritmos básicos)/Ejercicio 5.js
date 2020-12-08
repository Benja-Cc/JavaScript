//Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor 
//(ej: para [-3,3,5,7] el número mayor (max) es 7)
function a(x){
    z=Math.max.apply(null, x)
    return z
}
console.log("Numero Mayor ",(a([-25, -15, -16, -31, -13, -1])));

