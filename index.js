let grupos = [
    {
        nombre: "berenjena soul power",
        integrantes: [
            "Jairo Villaba",
            "Nicolas Farina",
            "Irina Keiner",
            "Lucas Galvan",
            "Lucas Ferraro"
        ],
    },
    {
        nombre: "panda ranger",
        integrantes: [
            "Franco Luna",
            "Sebastian Guimenez",
            "Rafael Casco",
            "Sofia Errecalde",
            "Agustin Belgrano"
        ],
    },
];



const listaCompleta = grupos.flatMap(grupo => grupo.integrantes);

const mostrarBtn = document.getElementById('mostrarBtn');
mostrarBtn.addEventListener('click', mostrarPersona);

function mostrarPersona() {
    const LiderInput = document.getElementById('Lider').value;

    const personaEncontrada = listaCompleta.find(persona => persona === LiderInput);

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    if (personaEncontrada) {
        const grupoPersona = grupos.find(grupo =>
            grupo.integrantes.includes(personaEncontrada)
        );

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = grupoPersona.nombre;

        const cardContent = document.createElement('p');
        cardContent.textContent = `Líder: ${personaEncontrada}, Integrantes: ${grupoPersona.integrantes.join(', ')}`;

        cardDiv.appendChild(cardTitle);
        cardDiv.appendChild(cardContent);

        cardContainer.appendChild(cardDiv);
    } else {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.textContent = 'No se encontró el grupo.';
        cardContainer.appendChild(alertDiv);
    }
}


let nombreInput = document.getElementById("nombre");

agregarBoton.addEventListener("click", function () {

    let nuevoIntegrante = nombreInput.value;
    if (nuevoIntegrante !== "") {
        integrantes.push(nuevoIntegrante); // si el valor no esta vacio (!==) se agrega integrante al array con el metodo push
        nombreInput.value = ""; // Limpiar el campo de entrada
    }
});

function actualizarListaIntegrantes() {
    listaIntegrantes.innerHTML = ""; // Limpiar la lista actual, el contenido lista de integrante lo le como lista vacia
    for (let i = 0; i < integrantes.length; i++) {
        let integranteItem = document.createElement("li");
        integranteItem.textContent = integrantes[i];
        listaIntegrantes.appendChild(integranteItem);
    }
}


//  console.log(grupos[1].integrantes[4]) como creas lista de objetos y como llamarlos
// creo la lista con todos los integrantes que hay hasta ahora
// declaro todas las variables con el ID que tengo en el HTML del formulario

//  let formulario = document.getElementById("formulario");
//  let nombreInput = document.getElementById("nombre");
//  let nombreLiderInput = document.getElementById("nombreLider");
//  let agregarBoton = document.getElementById("agregar");
//  let listaIntegrantes = document.getElementById("lista-integrantes");

// agregarBoton.addEventListener("click", function () {

//     let nuevoIntegrante = nombreInput.value;
//     if (nuevoIntegrante !== "") {
//         integrantes.push(nuevoIntegrante); // si el valor no esta vacio (!==) se agrega integrante al array con el metodo push
//         nombreInput.value = ""; // Limpiar el campo de entrada
//     }
// });

// function actualizarListaIntegrantes() {
//     listaIntegrantes.innerHTML = ""; // Limpiar la lista actual, el contenido lista de integrante lo le como lista vacia
//     for (let i = 0; i < integrantes.length; i++) {
//         let integranteItem = document.createElement("li");
//         integranteItem.textContent = integrantes[i];
//         listaIntegrantes.appendChild(integranteItem);
//     }
// }