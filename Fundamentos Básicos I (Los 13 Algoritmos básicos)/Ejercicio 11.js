//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), 
//menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function a(x){
    z=[]
    var suma = 0;
    for(var i=0; i < x.length; i++){
        suma += x[i]; 
    } 
    z.push(Math.max.apply(null, x));
    z.push(Math.min.apply(null, x));
    z.push(suma/x.length);
    return z
}
console.log("Numero Mayor, Menor y Promedio Respectivamente ",(a([1,5,10,-2])));
