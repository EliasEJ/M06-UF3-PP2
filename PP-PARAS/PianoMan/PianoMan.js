"use strict";

///////////////////////////////////////////////////////////
// Alumnes: Paras Navlani i Elias El Jerrari
///////////////////////////////////////////////////////////

let audios = ["a1.mp3","a1s.mp3","a2.mp3","a2s.mp3","b1.mp3","b2.mp3","c1.mp3","c1s.mp3","c2.mp3","c2s.mp3","d1.mp3","d1s.mp3","d2.mp3","d2s.mp3","e1.mp3","e2.mp3","f1.mp3","f1s.mp3","f2.mp3","f2s.mp3","g1.mp3","g1s.mp3","g2.mp3","g2s.mp3"];
let arrayKeys = ["k65", "k83", "k68", "k70", "k71", "k72", "k74", "k82", "k84", "k89","k85","k73","k79","k80","k49","k50","k51","k52","k53","k54","k55","k56","k57","k48"]
function elementAudio(){
	for(let i = 0; i< audios.length;i++){
		audio.setAttribute("id", audios[i]);
		audio.setAttribute("src",audios[i]);
		document.body.appendChild(audio);
	}
}

function init() {
	TouchEmulator();

}

init();
