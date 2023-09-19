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
    const agregarMiembroButton = document.getElementById("agregarMiembro");
    const memberList = document.getElementById("memberList");
    const eliminarMiembroButton = document.getElementById("eliminarMiembro");
    const grupoList = document.getElementById("grupoList");
    const eliminarGrupoButton = document.getElementById("eliminarGrupo");

    // Crear arrays para almacenar los nombres de los integrantes y grupos
    const members = [];
    const grupos = [];

    agregarMiembroButton.addEventListener("click", function () {
        const memberName = memberInput.value.trim();
        if (memberName) {
            members.push(memberName);
            memberInput.value = "";
            updateMemberList();
        }
    });

    eliminarMiembroButton.addEventListener("click", function () {
        const memberName = memberInput.value.trim();
        const index = members.indexOf(memberName);
        if (index !== -1) {
            members.splice(index, 1);
            memberInput.value = "";
            updateMemberList();
        }
    });

    agregarGrupoButton.addEventListener("click", function () {
        const grupoName = grupoInput.value.trim();
        if (grupoName) {
            grupos.push(grupoName);
            grupoInput.value = "";
            updateGrupoList();
        }
    });

    eliminarGrupoButton.addEventListener("click", function () {
        const grupoName = grupoInput.value.trim();
        const index = grupos.indexOf(grupoName);
        if (index !== -1) {
            grupos.splice(index, 1);
            grupoInput.value = "";
            updateGrupoList();
        }
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
