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
    
    // Asigna la clase "botonMapa" al botón
    newButton.className = 'botonMapa btn btn-primary';
    
    // Asigna el id del elemento 'path' como el texto del botón
    newButton.innerText = pathElement.id;
    
    // Inserta el botón en el div con id "botonesDrag"
    document.getElementById('botonesDrag').appendChild(newButton);
});