//////////////////////////////////////////
//// Elyass el Jerari i Paras Navlani ////
//////////////////////////////////////////

'use strict';

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



// Selecciona tots els elements 'path' dins de SVG pel seu id
let elementsPath = document.querySelectorAll('svg path[id]');

// Obtenir el nombre d'elements 'path'
let numElementsPath = elementsPath.length;

// Variable per comptar els encerts
let numEncerts = 0;

// Per cada element 'path' crea un botó amb un id un text i una classe
elementsPath.forEach(function (pElement) {
    let nouBoto = document.createElement('button');

    nouBoto.id = pElement.id;

    nouBoto.className = 'botonMapa btn btn-primary';

    nouBoto.innerText = pElement.id;

    nouBoto.setAttribute('name', 'botonMapa' + pElement.id);

    // Fa que el botó sigui arrossegable
    nouBoto.setAttribute('draggable', 'true');

    // Afegeix el botó al div
    document.getElementById('botonesDrag').appendChild(nouBoto);
});



elementsPath.forEach(function (pElement) {
    // Guarda el color original del 'path' per restaurar-lo més tard
    let colorOriginal = pElement.style.fill;

    // Un eventListener que s'activa quan el ratolí entra al 'path'
    pElement.addEventListener('dragenter', function (event) {
        // Si el color del 'path' no es verd ni vermell canvia el color a blau
        if (pElement.style.fill !== 'green' && pElement.style.fill !== 'red') {
            pElement.style.fill = 'blue';
        }
    });

    // Aquest eventListener s'utilitza per restaurar el color original del 'path' que vam guardar ant
    pElement.addEventListener('dragleave', function (event) {
        // Si el color del 'path' no es verd ni vermell canvia el color al original
        if (pElement.style.fill !== 'green' && pElement.style.fill !== 'red') {
            pElement.style.fill = colorOriginal;
        }
    });

    // Afegeix un eventListener per al event "drop"
    pElement.addEventListener('drop', function (event) {
        event.preventDefault();

        // Si el color del 'path' es verd no fa res
        if (pElement.style.fill === 'green') {
            return;
        }

        // Obtenir el id del boto arrossegat
        let botoArrosegat = event.dataTransfer.getData('text');

        // Comprova si el id del boto arrossegat coincideix amb el id del 'path'
        if (botoArrosegat === pElement.id) {
            // Canvia el color del 'path' a verd
            pElement.style.fill = 'green';

            // Elimina el botó arrossegat
            document.getElementsByName('botonMapa' + botoArrosegat)[0].remove();

            // Augmenta el nombre d'encerts
            numEncerts++;

            // Si el nombre d'encerts coincideix amb el nombre d'elements 'path' mostra un missatge
            if (numEncerts === numElementsPath) {
                alert('Enhorabona! Has completat el mapa!');
            }
        } else {
            // Canvia el color del 'path' a vermell
            pElement.style.fill = 'red';
        }
    });

    // Afegir un eventListener per al event "dragover" 
    pElement.addEventListener('dragover', function (event) {
        event.preventDefault();
    });
});

// Per cada botó amb la classe 'botonMapa' crea un eventListener per al event "dragstart"
document.querySelectorAll('.botonMapa').forEach(function (button) {
    button.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('text', event.target.id);
    });
});