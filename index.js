const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');


hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
};
;


menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// acordeon

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
const nombreGrupoInput = document.getElementById('nombreGrupoInput');
const containerEncontrarGrupo = document.getElementById('containerEncontrarGrupo');


buscarBtn.onclick = buscarGrupo;

// Función para mapear un grupo a un elemento de tarjeta
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

// Función para buscar grupos
function buscarGrupo() {
    const nombreInputValue = nombreGrupoInput.value.trim().toLowerCase();
    const cardContainer = document.createElement("div");
    cardContainer.id = "cardContainer";
    cardContainer.innerHTML = '';

    const gruposFiltrados = grupos.filter(grupo => grupo.nombre.toLowerCase().includes(nombreInputValue));

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
    containerEncontrarGrupo.innerHTML = '';
    containerEncontrarGrupo.appendChild(cardContainer);
}

//crear nuevo grupo

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a elementos del DOM
    const liderGrupoInput = document.getElementById("liderGrupoInput");
    const nombreGrupoInput = document.getElementById("nombreGrupoInput");
    const memberInput = document.getElementById("member");
    const memberList = document.getElementById("memberList");
    const agregarGrupoButton = document.getElementById("agregarGrupo");

    // Agregar un evento de clic al botón de agregar grupo
    agregarGrupoButton.addEventListener("click", function () {
        const grupoName = grupoInput.value.trim();
        const liderName = liderGrupoInput.value.trim();
        const memberNames = memberInput.value.trim().split("\n");

        // Verificar si se proporciona un nombre de grupo
        if (!grupoName) {
            alert("Debes ingresar el nombre del grupo.");
            return;
        }

        // Verificar si se proporciona al menos un miembro
        if (!memberNames || memberNames.length === 0) {
            alert("Debes ingresar al menos un miembro.");
            return;
        }

        // Crear un nuevo grupo
        const nuevoGrupo = {
            nombre: grupoName,
            liderGrupo: liderName,
            integrantes: memberNames,
        };

        // Agregar el nuevo grupo a la lista de grupos
        grupos.push(nuevoGrupo);

        // Limpiar los campos de entrada
        grupoInput.value = "";
        liderGrupoInput.value = "";
        memberInput.value = "";

    });
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
    const NombreGrupoInput = document.getElementById("grupoAEliminar").value;
    const GrupoIndex = grupos.findIndex(grupo => grupo.nombre.toLowerCase().includes(NombreGrupoInput.toLowerCase()));

    if (GrupoIndex !== -1) {
        grupos.splice(GrupoIndex, 1);
    } else {
        alert("Selecciona un grupo válido.");
    }
}

// primer tarea es : cambiar los nombre de las constantes a algo mas descriptivo ej: (eliminar grupo)
// segunda tarea es hacer lo mismo pero con los ID de todos los elementos
// tercer tarea HTML y JS reemplazar los addeventlistener con on click para todos los botones
// cuarta tarea: revisar que todo el codigo JS y identificar codigo repetido y extraer logica a su propia funcion 











