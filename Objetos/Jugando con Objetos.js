var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log("-Edad de John>> "+users[1].age);                //¿Cómo harías print/log de la edad de John?
console.log("-Nombre del primer objeto>> "+users[0].name);   //¿Cómo harías print/log del nombre del primer objeto?
console.log("-Nombre y edad de cada usuario ")               //¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? 
for(i=0;i<users.length;i++){
    console.log(users[i].name+" - "+users[i].age)
}
console.log("-Mayores de Edad")
for(i=0;i<users.length;i++){                                //¿Cómo harías para imprimir el nombre de los mayores de edad?
    if (users[i].age>=30){                                  //¡¡¡SUPONIENDO QUE LA MAYORIA DE EDAD ES 30 AÑOS!!!
        console.log(users[i].name);
    }
    
}