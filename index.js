const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// acordeon
'use strict';

const bloque = document.querySelectorAll('.bloque');
const h6 = document.querySelectorAll('.h6');

function toggleActiveBlock(index) {
    bloque.forEach((cadaBloque, i) => {
        cadaBloque.classList.remove('activo');
        if (i === index) {
            cadaBloque.classList.add('activo');
        }
    });
}

h6.forEach((cadaH2, i) => {
    cadaH2.addEventListener('click', () => {
        toggleActiveBlock(i);
    });
});

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
            "Melani Antuña",
            "David Cicconi"
        ],
    },
    {
        nombre: "Grupo Quattro",
        liderGrupo: "Franco Bertolotti",
        integrantes: [
            "Agustín Ganuza",
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

];

// Buscar Grupos
const buscarBtn = document.getElementById('buscarBtn');
const nombreInput = document.getElementById('nombre');

buscarBtn.addEventListener('click', buscarGrupo);

function mapearGrupoACard(grupo) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = grupo.nombre;

    const cardContent = document.createElement('p');
    cardContent.classList.add("cardContent");
    cardContent.textContent = `Líder: ${grupo.liderGrupo}, Integrantes: ${grupo.integrantes.join(', ')}`;

    cardDiv.appendChild(cardTitle);
    cardDiv.appendChild(cardContent);

    return cardDiv;
}

function buscarGrupo() {
    const containerEncontrarGrupo = document.getElementById('containerEncontrarGrupo');
    const existingCardContainer = document.getElementById('cardContainer');

    if (existingCardContainer) {
        containerEncontrarGrupo.removeChild(existingCardContainer);
    }

    const nombreInputValue = nombreInput.value.trim().toLowerCase();

    const gruposFiltrados = grupos.filter(grupo => grupo.nombre.toLowerCase().includes(nombreInputValue));

    const cardContainer = document.createElement("div");
    cardContainer.id = "cardContainer";
    cardContainer.innerHTML = '';

    if (gruposFiltrados.length > 0) {
        gruposFiltrados.forEach(grupoEncontrado => {
            const cardDiv = mapearGrupoACard(grupoEncontrado);
            cardContainer.appendChild(cardDiv);
        });
    } else {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert');
        alertDiv.textContent = 'No se encontraron grupos con ese nombre.';
        cardContainer.appendChild(alertDiv);
    }
    containerEncontrarGrupo.appendChild(cardContainer);
}

//crear nuevo grupo

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



function agregarIntegrante() {
    const nuevoIntegrante = document.getElementById("nuevoIntegrante").value;
    const grupoSeleccionado = document.getElementById("grupoSeleccionado").value;
    const grupoEncontrado = grupos.find(grupo => grupo.nombre.toLowerCase().includes(grupoSeleccionado.toLowerCase()));


    if (!!grupoEncontrado) {
        grupoEncontrado.integrantes.push(nuevoIntegrante);

    } else {
        alert("No se encontro el grupo");
    }
}
function quitarIntegrante() {

    const integranteAQuitar = document.getElementById("integranteAQuitar").value;
    const grupoSeleccionado = document.getElementById("grupoAQuitar").value;

    const GrupoEliminado = grupos.find(grupo => grupo.nombre.toLowerCase().includes(grupoSeleccionado.toLowerCase()));

    if (GrupoEliminado) {
        const index = GrupoEliminado.integrantes.indexOf(integranteAQuitar);

        if (index !== -1) {
            GrupoEliminado.integrantes.splice(index, 1);

        } else {
            alert("El integrante especificado no se encuentra en el grupo.");
        }
    } else {
        alert("Selecciona un grupo válido.");
    }

}

function eliminarGrupo() {
    const grupoSeleccionado = document.getElementById("grupoAEliminar").value;

    const GrupoEliminado = grupos.findIndex(grupo => grupo.nombre.toLowerCase().includes(grupoSeleccionado.toLowerCase()));

    if (GrupoEliminado !== -1) {
        grupos.splice(GrupoEliminado, 1);
    } else {
        alert("Selecciona un grupo válido.");
    }
}











