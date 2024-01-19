// Obtenir botons amb JQuery
const europaBoton = $('#europa');
const espanyaBoton = $('#espanya');
const catalunyaBoton = $('#catalunya');

// Fer que els botons redirigeixin a la pàgina corresponent
europaBoton.click(() => {
    window.location.href = './MAPAS-HTML/europa.html';
});

espanyaBoton.click(() => {
    window.location.href = './MAPAS-HTML/espanya.html';
});

catalunyaBoton.click(() => {
    window.location.href = './MAPAS-HTML/catalunya.html';
});



// Selecciona todos los elementos 'path' dentro de SVG por su id
var pathElements = document.querySelectorAll('svg path[id]');

// Para cada elemento 'path'...
pathElements.forEach(function(pathElement) {
    // Crea un nuevo botón
    var newButton = document.createElement('button');
    
    // Asigna el id del elemento 'path' como el id del botón
    newButton.id = pathElement.id;

    // Asigna la clase "botonMapa" al botón
    newButton.className = 'botonMapa btn btn-primary';
    
    // Asigna el id del elemento 'path' como el texto del botón
    newButton.innerText = pathElement.id;

    // Hace el botón arrastrable
    newButton.setAttribute('draggable', 'true');
    
    // Inserta el botón en el div con id "botonesDrag"
    document.getElementById('botonesDrag').appendChild(newButton);
});



// Para cada elemento 'path'...
pathElements.forEach(function(pathElement) {
    var originalColor = pathElement.style.fill; // Guarda el color original

    // Agrega un evento de escucha para el evento "dragenter"
    pathElement.addEventListener('dragenter', function(event) {
        // Si el color del 'path' no es verde, cambia el color a azul
        if (pathElement.style.fill !== 'green' && pathElement.style.fill !== 'red') {
            pathElement.style.fill = 'blue';
        }
    });

    // Agrega un evento de escucha para el evento "dragleave"
    pathElement.addEventListener('dragleave', function(event) {
        // Si el color del 'path' no es verde, cambia el color al original
        if (pathElement.style.fill !== 'green' && pathElement.style.fill !== 'red') {
            pathElement.style.fill = originalColor;
        }
    });

    // Agrega un evento de escucha para el evento "drop"
    pathElement.addEventListener('drop', function(event) {
        // Evita el comportamiento predeterminado del navegador
        event.preventDefault();

        // Si el color del 'path' es verde, no hagas nada
        if (pathElement.style.fill === 'green') {
            return;
        }

        // Obtiene el id del botón arrastrado
        var draggedButtonId = event.dataTransfer.getData('text');

        // Comprueba si el id del botón coincide con el id del 'path'
        if (draggedButtonId === pathElement.id) {
            // Cambia el color del 'path' a verde
            pathElement.style.fill = 'green';
        } else {
            // Cambia el color del 'path' a rojo
            pathElement.style.fill = 'red';
        }
    });

    // Agrega un evento de escucha para el evento "dragover" para permitir el drop
    pathElement.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
});

// Para cada botón...
document.querySelectorAll('.botonMapa').forEach(function(button) {
    // Agrega un evento de escucha para el evento "dragstart"
    button.addEventListener('dragstart', function(event) {
        // Establece el id del botón como la data del evento
        event.dataTransfer.setData('text', event.target.id);
    });
});