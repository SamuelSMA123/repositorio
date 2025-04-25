// Seleccionar botones y secciones
const btnSobreMi = document.getElementById('btn-sobre-mi');
const btnProyectos = document.getElementById('btn-proyectos');
const sobreMiSection = document.getElementById('sobre-mi');
const proyectosSection = document.getElementById('proyectos');

// Función para mostrar una sección con animación
function showSection(sectionToShow, sectionToHide, btnActive, btnInactive) {
    sectionToHide.classList.add('d-none');
    sectionToHide.classList.remove('animate__animated', 'animate__slideInRight');
    sectionToShow.classList.remove('d-none');
    sectionToShow.classList.add('animate__animated', 'animate__slideInRight');
    btnActive.classList.add('active');
    btnInactive.classList.remove('active');
}

// Evento para el botón "Sobre mí"
btnSobreMi.addEventListener('click', () => {
    showSection(sobreMiSection, proyectosSection, btnSobreMi, btnProyectos);
});

// Evento para el botón "Proyectos"
btnProyectos.addEventListener('click', () => {
    showSection(proyectosSection, sobreMiSection, btnProyectos, btnSobreMi);
});