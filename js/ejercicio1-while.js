//solicitar al usuario un num atraves de un prompt 
//empezando desde 1 e ir incrementando este valor de a 1

//a medida que vemos todos los numeros enteros anteriores incluido el ingresado por el usuario quiero hacer un log de aquellos numeros que son multiplos de 7.

//el log debe ser el siguiente:
//*el numero x es multiplo de 7


/* let num2 = +prompt("Ingrese un numero límite");

let num1 = 1;

while (num1 <= num2) {

    if (num1 % 7 === 0) {

        console.log(`los ${num2} son multiplos de 7`)

    }

    num1 = num1 + 1;
} */

/* 
ejercicio 2: 
-Solicitar a una maestra que ingresa las calificaciones de sus alumnos
-Pedir constantemente el valor de las notas hasta que la maestra ingrese un 0 como valor. En ese momento saldremos de nuestro bucle e imprimiremos el promedio del curso segun las notas ingresadas.
*/

let nota = +(prompt("Ingrese la calificacion del alumno"));
let cantidadNotas = 0; 
let acumuladoNotas = 0;


do {

cantidadNotas++;

acumuladoNotas += nota;

nota = +(prompt("Ingrese la calificacion del alumno"));

}while(nota !== 0)

console.log(`El promedio de notas es de: ${acumuladoNotas / cantidadNotas} `)


