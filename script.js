document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidad de Colapsar/Expandir Unidades ---
    const sectionTitles = document.querySelectorAll('.section-title'); // Seleccionar todos los títulos de sección

    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            // El '.section-content' es el hermano siguiente al título clickeado
            const content = this.nextElementSibling;

            // Toggling de la clase 'expanded' para cambiar el '+' a '-'
            this.classList.toggle('expanded');

            // Manejar la altura para abrir/cerrar el contenido
            if (content.style.maxHeight) {
                // Si estaba abierto (tenía una altura definida), ciérralo
                content.style.maxHeight = null;
            } else {
                // Si estaba cerrado, ábrelo. scrollHeight nos da la altura necesaria.
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- Lógica para el Botón "Colapsar Todo" ---
    const collapseAllButtonHeader = document.getElementById('collapse-all-button'); // El nuevo botón en la cabecera

    // Función para ejecutar la acción de colapsar todas las unidades
    const performCollapseAll = () => {
        sectionTitles.forEach(title => {
            const content = title.nextElementSibling;
            if (title.classList.contains('expanded')) {
                title.classList.remove('expanded');
                content.style.maxHeight = null;
            }
        });
    };

    // Añadir evento al botón de la cabecera
    if (collapseAllButtonHeader) {
        collapseAllButtonHeader.addEventListener('click', performCollapseAll);
    }

    // Opcional: Abrir la primera unidad por defecto (comentado por si se desea activar)
    // const firstSectionTitle = document.querySelector('#section-generalidades .section-title');
    // if (firstSectionTitle) {
    //     firstSectionTitle.classList.add('expanded');
    //     const firstContent = firstSectionTitle.nextElementSibling;
    //     firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    // }
});