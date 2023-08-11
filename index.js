// /*Realizar una función que nos permita realizar las 4 operaciones 
// aritméticas, es decir, que nos permita sumar, restar, dividir y multiplicar.
// La función debe recibir 3 parámetros, dos de ellos deben ser los valores (a y b)
// y uno el nombre de la operación (en minúsculas). Si el parámetro de la 
//   operación no es 
// válido que mande un error personalizado a la consola.*/

// function ejercicioUno(a = 0, b = 0, operation = "suma") {
//     switch (operation) {
//         case "suma":
//             return console.log(a + b);

//         case "resta":
//             return console.log(a - b);

//         case "multiplicacion":
//             return console.log(a * b);

//         case "division":
//             return console.log(a / b);

//         default:
//             console.error(`la operacion ${operation} no es valida!!`);
//     }


// }


// // EJECUCION DE FUNCIONES

// ejercicioUno(2, 4, "suma");


// // Realizar una función que almacene en un arreglo todos los números pares desde a hasta b.


// function ejercicioDos(a = 0, b = 0) {
//     let nums = [];
//     // console.log(nums);

//     for (let i = a; i <= b; i++) {
//         // console.log(i);
//         if (i % 2 === 0) nums.push(i);
//     }

//     console.log(nums);

// }

// // EJECUCION DE FUNCIONES

// ejercicioDos();

// a = 0
// b = 0

// nums = [];
// i = 0
// 0 <= 0
// /*entra al for*/

// //o%2 ===0 se cumple la condicion

// nums.push(i)

// //nums = [0]

// //se cumple el primer ciclo, se agre el i++ 

// //i++ es equivalente a escribir i = i+1 

// i = 1

// // i no es <= a 0 , no se cumple la condicion

// // function ejemploDeWhile() {
// //     while(true){

// //     }

// //     do{}while(true)
// // }


// // Realizar una tabla de multiplicación de un número (a) desde 0 hasta x,
//  pero que no se muestre la multiplicación de a * 5.


function ejercicioTres(a = -4, x = 10) {
    if (x <= 0){
        return "ingresaste un numero negativo bobo";
    }

    if (x > 10){
        return "solo tenemos 10 cupos";
    }
    let resultado;
    for (let i = 0; i <= x; i++) {
        resultado = a * i;
        if (i !== 5) {
            console.log(`${a} multiplicado por ${i} es  = ${resultado}`);
        }

    }

    console.log(resultado);
}




// EJECUCION DE FUNCIONES

ejercicioTres(2, 16);

// revisar
//  if (i !== 5) {
//     console.log(`${a} multiplicado por ${i} es  = ${resultado}`);
//     }


function ejercicioCuatro(a = 0, x = 20) {
    let i = 0;
    while (i <= x) {
        const resultado = a * i;
        if (i !== 5) {
            console.log(`${a} multiplicado por ${i} es  = ${resultado}`);
        }

        i++;
    }
}

ejercicioCuatro(2,8);