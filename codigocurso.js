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


// function ejercicioTres(a = -4, x = 10) {
//     if (x <= 0) {
//         return "ingresaste un numero negativo bobo";
//     }

//     if (x > 10) {
//         return "solo tenemos 10 cupos";
//     }
//     let resultado;
//     for (let i = 0; i <= x; i++) {
//         resultado = a * i;
//         if (i !== 5) {
//             console.log(`${a} multiplicado por ${i} es  = ${resultado}`);
//         }

//     }

//     console.log(resultado);
// }




// EJECUCION DE FUNCIONES

// ejercicioTres(2, 16);

// revisar
//  if (i !== 5) {
//     console.log(`${a} multiplicado por ${i} es  = ${resultado}`);
//     }


// function ejercicioCuatro(a = 0, x = 20) {
//     let i = 0;
//     while (i <= x) {
//         const resultado = a * i;
//         if (i !== 5) {
//             console.log(`${a} multiplicado por ${i} es  = ${resultado}`);
//         }

//         i++;
//     }
// }

// ejercicioCuatro(2,8);





//ARREGLOS


// let numbers = [1, "jairo", 3, 4, 10];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// console.log(numbers[number.length(0)]);

// console.log(numbers[number.at(-1)]);




// let numbers = ["jairo", "villalba ", 4, 10];

//  show numbers;
// function show(arr) {

//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//     }
// }
// let numbers = ["jairo", "villalba ", 4, 10];

// showDom("array1", numbers);

// function show(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }


// function showDom(element, arr) {
//     document.getElementById(element).innerHTML = "";
//     for (let i = 0; i < arr.length; i++) {
//         document.getElementById(element).innerHTML +=
//             `<div>${arr[i]}<div>`;
//     }
// }


// array jhon

/* **********     Curso JavaScript: 11. Arreglos (Arrays) -    ********** */

/*     const a = [];
    const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
    console.log(a);
    console.log(b);
    console.log(b.length);
    console.log(b[2]);
    console.log(b[0]);
    console.log(b[3]);
    console.log(b[3][2]);
    console.log(b[3][3][0]);

    const c = Array.of("X", "Y", "Z", 9, 8, 7);
    console.log(c);

    const d = Array(100).fill(false);
    console.log(d);

    const e = new Array();
    console.log(e);

    const f = new Array(1, 2, 3, true, false);
    console.log(f);

    const colores = ["Rojo", "Verde", "Azul"];
    console.log(colores);    buscar elemento para quitar "verde" 

    colores.push("Negro");  coloca negro al final del arreglo
    console.log(colores);

    colores.pop();
    console.log(colores);   quita el ultimo elemento

    colores.forEach(function (el, index) {
      console.log(`<li id="${index}">${el}</li>`);
    }); */




//ARREGLOS


// let numbers = [1, "jairo", 3, 4, 10];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// console.log(numbers[number.length(0)]);

// console.log(numbers[number.at(-1)]);




// let nombres = ["Jairo Villalba", "Franco Luna ", "Manuel Leiva", "Flavia Arce", ["Desarrollador"]];

// show(nombres);
// function show(lista) {

//     for (let i = 0; i < lista.length; i++) {
//         console.log(lista[i]);
//     }
// }


// showDom("array1", nombres);



// function showDom(element, arr) {
//     document.getElementById(element).innerHTML = "";
//     for (let i = 0; i < arr.length; i++) {
//         document.getElementById(element).innerHTML +=
//             `<div>${arr[i]}<div>`;
//     }
// }


// // // hacer lista de grupos de redjar que muestre box y 
// muestre el nombre del grupo y sus integrantes(todo con arrays)
//  y agregar funcion "agregar integrante al grupo" 
//  que reciba como parametro el nombre del grupo y
// //  el nombre del integrante y que lo agregue al final, 
// //  y la lista lo agregue alfabeticamente... 
// //  y si me da la nafta quitar de un grupo y 
// //  agregar a otro en una funcion aparte. 



// Array de elementos
// let devsPanda = [
//     "Franco Luna",
//     "Sebastian Guimenez",
//     "Rafael Casco",
//     "Agustin Belgrano"
// ];


// const lista = document.getElementById("lista");




// for (let i = 0; i < devsPanda.length; i++) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(devsPanda[i]));
//     lista.appendChild(li);
// }





// const berenjenas = [
//     "Jairo Villaba",
//     "Nicolas Farina",
//     "Irina Keiner",
//     "Lucas Galvan",
//     "Lucas Ferraro"
// ];
// const berenjenasLista = document.getElementById("lista");

// // Itera a través del array y agrega cada número como un elemento de la lista
// for (let i = 0; i < berenjenas.length; i++) {
//     let numeroItem = document.createElement("li");
//     numeroItem.textContent = berenjenas[i];
//     berenjenasLista.appendChild(berenjenasItem);
// }

// let numeros = [
//     "Jairo Villaba",
//     "Nicolas Farina",
//      "Irina Keiner",
//     "Lucas Galvan",
//     "Lucas Ferraro"
// ];
// let Lista = document.getElementById("lista");

// // Itera a través del array y agrega cada número como un elemento de la lista
// for (const i = 0; i < numeros.length; i++) {
//     const numeroItem = document.createElement("li");
//     numeroItem.textContent = numeros[i];
//     numerosLista.appendChild(numeroItem);
// }

// recortes de web de grupos redjar

// Eventos de redireccionamiento
// const gruposBtn = document.getElementById("gruposBtn");
// const crearBtn = document.getElementById("crearBtn");

// gruposBtn.addEventListener("click", function () {
//     window.location.href = "#formulario";
// });

// crearBtn.addEventListener("click", function () {
//     window.location.href = "#cardContainer";
// });


// Función para mostrar un grupo al hacer clic en el botón
// const mostrarBtn = document.getElementById('mostrarBtn');
// mostrarBtn.addEventListener('click', mostrarPersona);

// function mostrarPersona() {
//     const LiderInput = document.getElementById('Lider').value;
//     const GrupoEncontrado = grupos.find(grupo => grupo.liderGrupo === LiderInput);
//     const cardContainer = document.getElementById('cardContainer');
//     cardContainer.innerHTML = '';

//     if (GrupoEncontrado) {
//         const cardDiv = document.createElement('div');
//         cardDiv.classList.add('card');

//         const cardTitle = document.createElement('h3');
//         cardTitle.textContent = GrupoEncontrado.nombre;

//         const cardContent = document.createElement('p');
//         cardContent.classList.add("cardContent");
//         cardContent.textContent = `Líder: ${GrupoEncontrado.liderGrupo}, Integrantes: ${GrupoEncontrado.integrantes.join(', ')}`;

//         cardDiv.appendChild(cardTitle);
//         cardDiv.appendChild(cardContent);

//         cardContainer.appendChild(cardDiv);
//     } else {
//         const alertDiv = document.createElement('div');
//         alertDiv.classList.add('alert');
//         alertDiv.textContent = 'No se encontró el grupo.';
//         cardContainer.appendChild(alertDiv);
//     }
// }