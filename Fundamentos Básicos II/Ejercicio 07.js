//Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, 
//específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
function a(x){
    for (i=1;i<x.length;i+=2){
        x[i]=1;
        console.log(x);
    }
    return x; 
}
console.log(a([2,4,6,8,10,12]));