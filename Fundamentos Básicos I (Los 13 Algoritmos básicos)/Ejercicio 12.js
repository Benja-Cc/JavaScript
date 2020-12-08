//Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
//La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function a(x){
    z=[];
    z[0]=x[0];
    x[0]=x[x.length-1];
    x[x.length-1]=z[0];
    return x;
}
console.log(a([1,5,10,-2,5,6]));