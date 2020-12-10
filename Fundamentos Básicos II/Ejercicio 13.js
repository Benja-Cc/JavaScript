//Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
//Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, true]. 
//cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.
function a(x){
    aux=0
    for (i=0;i<x.length;i++){
        if(i==0){
            aux=x[x.length-1-i];
            x[x.length-1-i]=x[i];
            x[i]=aux;
        }
        if(i==x.length-3){
            aux=x[x.length-3];
            x[x.length-3]=x[2];
            x[2]=aux;
        }
    }
    return x;
}
console.log(a([1,2,3,4,5,6]));