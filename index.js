// Definición de la lista de grupos
const grupos = [
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
            "Melani Antuña ",
            "David Cicconi"
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
            "Adrián Ferrari",
            "Adrián Ferrari",
        ],
    },
    {
        nombre: "Work Mates",
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

//  evento al botón de búsqueda para buscar grupos
const buscarBtn = document.getElementById('buscarBtn');
buscarBtn.addEventListener('click', buscarGrupo);

// Función para buscar grupos
function buscarGrupo() {
    const busquedaInput = document.getElementById('busqueda').value.trim().toLowerCase();

    // Filtrar los grupos que coinciden con la búsqueda
    const gruposFiltrados = grupos.filter(grupo => grupo.nombre.toLowerCase().includes(busquedaInput));

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    if (gruposFiltrados.length > 0) {
        gruposFiltrados.forEach(GrupoEncontrado => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            const cardTitle = document.createElement('h3');
            cardTitle.textContent = GrupoEncontrado.nombre;

            const cardContent = document.createElement('p');
            cardContent.classList.add("cardContent");
            cardContent.textContent = `Líder: ${GrupoEncontrado.liderGrupo}, Integrantes: ${GrupoEncontrado.integrantes.join(', ')}`;

            cardDiv.appendChild(cardTitle);
            cardDiv.appendChild(cardContent);

            cardContainer.appendChild(cardDiv);
        });
    } else {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.textContent = 'No se encontraron grupos con ese nombre.';
        cardContainer.appendChild(alertDiv);
    }
}

// Función para buscar lideres
function buscarLider() {
    const busquedaInput = document.getElementById('busqueda').value.trim().toLowerCase();

    // Filtrar los grupos que coinciden con la búsqueda
    const lideresFiltrados = grupos.filter(grupo => grupo.liderGrupo.toLowerCase().includes(busquedaInput));

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    if (lideresFiltrados.length > 0) {
        lideresFiltrados.forEach(LiderEncontrado => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            const cardTitle = document.createElement('h3');
            cardTitle.textContent = LiderEncontrado.nombre;

            const cardContent = document.createElement('p');
            cardContent.classList.add("cardContent");
            cardContent.textContent = `Líder: ${LiderEncontrado.liderGrupo}, Integrantes: ${LiderEncontrado.integrantes.join(', ')}`;

            cardDiv.appendChild(cardTitle);
            cardDiv.appendChild(cardContent);

            cardContainer.appendChild(cardDiv);
        });
    } else {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.textContent = 'No se encontró un lider con ese nombre.';
        cardContainer.appendChild(alertDiv);
    }
}

// Función para mostrar un grupo al hacer clic en el botón
const mostrarBtn = document.getElementById('mostrarBtn');
mostrarBtn.addEventListener('click', mostrarPersona);

function mostrarPersona() {
    const LiderInput = document.getElementById('Lider').value;
    const GrupoEncontrado = grupos.find(grupo => grupo.liderGrupo === LiderInput);
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    if (GrupoEncontrado) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = GrupoEncontrado.nombre;

        const cardContent = document.createElement('p');
        cardContent.classList.add("cardContent");
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

// Funciones para agregar y eliminar integrantes y grupos
document.addEventListener("DOMContentLoaded", function () {
    const leaderInput = document.getElementById("leader");
    const grupoInput = document.getElementById("grupo");
    const memberInput = document.getElementById("member");
    const memberList = document.getElementById("memberList");
    const grupoList = document.getElementById("grupoList");
    const eliminarGrupoButton = document.getElementById("eliminarGrupo");
    const agregarGrupoButton = document.getElementById("agregarGrupo");



    agregarGrupoButton.addEventListener("click", function () {
        const grupoName = grupoInput.value.trim();

        // ver clausula de guard (guardia)
        if (!grupoName) {
            alert("tiene que cargar el nombre del grupo");
            return;
        }

        const LiderName = leaderInput.value.trim();
        const memberName = memberInput.value.trim();


        if (!memberName) {
            alert("tenes que ingresar al menos un miembro");
            return;
        }

        if (!LiderName) {
            alert("tenes que ingresar al lider designado");
            return;
        }

        const nuevoGrupo = {
            nombre: grupoName,
            liderGrupo: LiderName,
            integrantes: memberName.split("\n")
        }

        grupos.push(nuevoGrupo);

        // grupos.push(grupoName);
        grupoInput.value = "";
        leaderInput.value = "";
        memberInput.value = "";
        // updateGrupoList();
    });



    function updateMemberList() {
        memberList.innerHTML = "";
        members.forEach(function (member) {
            const li = document.createElement("li");
            li.textContent = member;
            memberList.appendChild(li);
        });
    }

    function updateGrupoList() {
        grupoList.innerHTML = "";
        grupos.forEach(function (grupo) {
            const li = document.createElement("li");
            li.textContent = grupo;
            grupoList.appendChild(li);
        });
    }
});



// Eventos de redireccionamiento
const gruposBtn = document.getElementById("gruposBtn");
const crearBtn = document.getElementById("crearBtn");

gruposBtn.addEventListener("click", function () {
    window.location.href = "#formulario";
});

crearBtn.addEventListener("click", function () {
    window.location.href = "#cardContainer";
});

