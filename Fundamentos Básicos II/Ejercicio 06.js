//Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, 
//imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function a(x){
    var ci=0        //Contador de Impares
    var cp=0        //Contador de Pares
    for(var i=0;i<x.length;i++){
        for(var j=1;j<=Math.max.apply(null, x)+1;j+=2){ 
            if (x[i]==j){
                cp=cp-cp
                ci=ci+=1
                if(ci==3){
                    cp=cp-cp
                    console.log("¡Qué imparcial!")
                    ci=ci-ci
                }
            }
            else if (x[i]==(j-1)){
                ci=ci-ci
                cp=cp+=1
                if (cp==3){
                    ci=ci-ci
                    console.log("¡Es para bien!")
                    cp=cp-cp
                }
            } 
        } 
    }   
}
a([2,2,2,2,1,1,1,2,2,1,2,1,2,1,2,1]);