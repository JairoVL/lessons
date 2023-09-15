let grupos = [
    {
        nombre: "berenjena soul power",
        liderGrupo: "Lucas Galvan",
        integrantes: [
            "Jairo Villaba",
            "Nicolas Farina",
            "Irina Keiner",
            "Lucas Galvan",
            "Lucas Ferraro",
            "Julián Gorosito",
            "Jorge Capodimonte",
            "Melisa Aramayo"

        ],
    },
    {
        nombre: "panda ranger",
        liderGrupo: "Rafael Casco",
        integrantes: [
            "Franco Luna",
            "Sebastian Gimenez",
            "Rafael Casco",
            "Emanuel Reinoso",
            "Cian Vergara",
            "Agustin Belgrano",
            "Emanuel Reinoso",
            "Melani Antuña ",
            "David Cicconi"
        ],
    },

    {
        nombre: "Equipo cuete",
        liderGrupo: "Augusto De Liseo",
        integrantes: [
            "Manuel Leiva",
            "Axel Vazquez",
            "Kevin Ahumada",
            "Mauro Pettinari",
            "Franco Campo",
            "Natalia Herrera",
            "Mariela Herrera",

        ],
    },
    {
        nombre: "Grupo Quattro",
        liderGrupo: "Franco Bertolotti",
        integrantes: [
            "Agustín Ganuza",
            "Stefano Leone",
            "Flavia Arce",
            "Eric Farley",
            "Julián Viso",
            "Adrián  Ferrari",
            "Adrián  Ferrari",

        ],
    },
    {
        nombre: "WorkMates",
        liderGrupo: "Sofia Recalde",
        integrantes: [
            "Sebastián Carlos Andrada",
            "Agustín Pastor",
            "Romeo Jovel",
            "Brian Mercé",
            "Bruno Gario",
            "Guillermo Mangiante",
            "Federico Botti",

        ],
    },

];



//flatMap para recorrer cada objeto en el array grupos y extraer los
// arreglos de integrantes y 
//hace que sea un solo array llamado lista completa

const mostrarBtn = document.getElementById('mostrarBtn');

//se hace referencia a el boton creado en HTML y con getelementId 
//cuando se hace clic se ejecuta la funcion "mostrarpersona" 
mostrarBtn.addEventListener('click', mostrarPersona);

function mostrarPersona() {
    const LiderInput = document.getElementById('Lider').value;
    const GrupoEncontrado = grupos.find(grupo => grupo.liderGrupo === LiderInput);
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    //se ejecucta la funcion mostrar persona cuando se hace clic y llama al valor del elemento HTML(INPUT lIDER)
    // declaramos una constaste "persona encontrada" para poner el resultado de la busqueda
    // "lista completa" es todo el array que hicimos uno con el metodo flatmap cpn el 
    // metodo find llama al string que cumpla con la condicion que es que el nombre sea igual al valor del ID Lider Input
    // (persona => persona === LiderInput); se le dice al metodo find que tome un a "persona" que represente los elementos
    // del arreglo "lista completa" y compara si "persona" es ==> liderInput si da todo Ok devuelve a "persona" en "persona encontrada"


    if (GrupoEncontrado) {

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = GrupoEncontrado.nombre;

        const cardContent = document.createElement('p');
        cardContent.textContent = `Líder: ${GrupoEncontrado.liderGrupo}, Integrantes: ${GrupoEncontrado.integrantes.join(', ')}`;

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

// formulario nuevo integrante



document.addEventListener("DOMContentLoaded", function () {
    const leaderInput = document.getElementById("leader");
    const grupoInput = document.getElementById("grupo");
    const memberInput = document.getElementById("member");
    const agregarMiembroButton = document.getElementById("agregarMiembro");
    const memberList = document.getElementById("memberList");


    // Creao un array para almacenar los nombres de los integrantes. vacio
    const members = [];

    // Agregamos un evento al botón "Crear nuevo grupo"
    agregarMiembroButton.addEventListener("click", function () {
        // Obtener el nombre del integrante y verificar si no está en blanco
        const memberName = memberInput.value.trim(); // trim verifica que el nombre no esté en blanco
        if (memberName) {
            members.push(memberName);
            // Agregar el nombre del integrante al array
            memberInput.value = "";
            // Actualizar la lista de integrantes en el DOM
            updateMemberList();
        }
    });

    // Función para actualizar la lista de integrantes en el DOM
    function updateMemberList() {
        memberList.innerHTML = "";
        members.forEach(function (member) {
            const li = document.createElement("li");
            li.textContent = member;
            memberList.appendChild(li);
        });
        // Si se ha ingresado un líder, mostralo en la parte superior de la lista
        if (leaderInput.value.trim() !== "") {
            const leaderLi = document.createElement("li");
            leaderLi.textContent = `Líder: ${leaderInput.value}`;
            memberList.insertBefore(leaderLi, memberList.firstChild);
        }
    }
});


// Funciones JavaScript para manejar los eventos de los botones
const gruposBtn = document.getElementById("gruposBtn");
const crearBtn = document.getElementById("crearBtn");

gruposBtn.addEventListener("click", function () {

    window.location.href = "#formulario";
});

crearBtn.addEventListener("click", function () {

    window.location.href = "#cardContainer";
});





// function actualizarListaIntegrantes() {
//     listaIntegrantes.innerHTML = ""; // Limpiar la lista actual, el contenido lista de integrante lo le como lista vacia
//     for (let i = 0; i < integrantes.length; i++) {
//         let integranteItem = document.createElement("li");
//         integranteItem.textContent = integrantes[i];
//         listaIntegrantes.appendChild(integranteItem);
//     }
// }