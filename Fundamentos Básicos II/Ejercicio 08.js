//Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
//reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior.
//Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function a(x){
    for (i=x.length-1;i>0;i--){
        x[i]=x[i-1].length;
    }
    return x;
}
console.log(a(["programar","dojo", "genial","benja"]));