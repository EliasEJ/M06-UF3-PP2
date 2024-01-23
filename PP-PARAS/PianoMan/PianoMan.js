"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Paras Navlani i Elias El Jerrari
///////////////////////////////////////////////////////////


let audios = ["c1.mp3", "d1.mp3", "e1.mp3", "f1.mp3", "g1.mp3", "a1.mp3", "b1.mp3", "c2.mp3","d2.mp3","e2.mp3","f2.mp3","g2.mp3","a2.mp3","b2.mp3","c1s.mp3","d1s.mp3","f1s.mp3","g1s.mp3","a1s.mp3","c2s.mp3","d2s.mp3","f2s.mp3","g2s.mp3","a2s.mp3"];
let arrayKeys = ["k65", "k83", "k68", "k70", "k71", "k72", "k74", "k82", "k84", "k89","k85","k73","k79","k80","k49","k50","k51","k52","k53","k54","k55","k56","k57","k48"];
let arrayLletres = ["A", "S", "D", "F", "G", "H", "J", "R", "T", "Y", "U", "I", "O", "P", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Funció per crear element audio, passant-li un array amb la ruta dels so
function elementAudio(){
	for(let i = 0; i< audios.length;i++){
		let audio = document.createElement("audio");
		audio.setAttribute("id", audios[i]);
		audio.setAttribute("src",audios[i]);
		document.body.appendChild(audio);
		audio.load();
	}
}
// Aquesta funcio estableix el click, touchstart i keypress per cada tecla.
//Quan li donem a una tecla, coincideix amb l'array de arrayLletres i això fa que reprodueixi el so.
function soAudio(){
    for(let i= 0; i < audios.length; i++){
        let audio1 = document.getElementById(audios[i]);
        let tecla = document.getElementById(arrayKeys[i]);

        tecla.addEventListener("click",function(){
            audio1.play();
        });

        tecla.addEventListener("touchstart",function(){
            audio1.play();
        });

        document.addEventListener("keypress", function(event){
            if(event.repeat == false){
                if (event.key.toUpperCase() == arrayLletres[i]) {
                    audio1.play();
                }
            } else {
                return;
            }
        });
    }
	//Aqui, les lletres K, L i Ñ sonenr les mateixes notes que R, T i Y, i les tecles Q, W i E, les mateixes que G, H i J.
    document.addEventListener("keypress", function(event){
		let majuscula = event.key.toUpperCase();
        switch(majuscula) {
            case "K":
            case "L":
            case "Ñ":
                soAudio(["c2.mp3", "d2.mp3", "e2.mp3"]);
                break;
            case "Q":
            case "W":
            case "E":
                soAudio(["g1.mp3", "a1.mp3", "b1.mp3"]);
                break;
            default:
                let keyIndex = arrayLletres.indexOf(majuscula);
                if(keyIndex >=0){
                    playSo([`${audios[keyIndex]}`]);
                }
                break;
        }
    });
}
// Creem aquest objecte per saber quina tecla s'ha esta pressionant
let teclesPressades = {};
 
//Aqui actualitzem l'objecte quan una tecla es pressiona
$(document).keydown(function(e){
	let tecla = String.fromCharCode(e.which).toUpperCase();
	teclesPressades[tecla] = true;
	processarTeclesP();
});

//Aqui actualitzem l'objecte quan una tecla es desprèn 
$(document).keyup(function(e) {
    let tecla = String.fromCharCode(e.which).toUpperCase();
    delete teclesPressades[tecla];
});

// Aqui actualitzem l'objecte quan es fa clic o es toca una tecla
$(".tecla").on("click touchstart", function() {
	let tecla = $(this).data("tecla");
	teclesPressades[tecla] = true;
	processarTeclesP();
});

//Actualitzem l'objecte quan es desconecta una tecla
$(".tecla").on("mouseup touchend", function(){
	let tecla  = $(this).data("tecla");
	delete teclesPressades[tecla];
});

// Processa les tecles que estan actualment pressades
	function processarTeclesP(){
		if(teclesPressades['K'] || teclesPressades['L'] || teclesPressades['Ñ']){
			soAudio(["c2.mp3","d2.mp3","e2.mp3"]);
		}

		if(teclesPressades['Q'] || teclesPressades['W'] || teclesPressades['E']){
			soAudio(["g1.mp3","a1.mp3","b1.mp3"]);
		}

		for (let i = 0;i < arrayLletres.length; i++){
			if(teclesPressades[arrayLletres[i]]) {
				soAudio([`${audios[i]}`]);
			}
		}
	}

function init() {
	TouchEmulator();
	//TouchEmulator();
	elementAudio();
	soAudio();
	processarTeclesP();
}

init();
