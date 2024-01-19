let teclasImport = document.getElementsByClassName("bttnsCalc");
let panelImport = document.getElementById("panel");
let decimalClicked = false; // Variable para rastrear si se ha hecho clic en la coma

// Listener para las teclas de la calculadora "click"
for (let i = 0; i < teclasImport.length; i++) {
    teclasImport[i].addEventListener("click", function () {
        let valorTeclas = this.value;
        gestioPanel(valorTeclas);
    });
}

// Listener para las teclas del teclado
document.addEventListener("keydown", function (event) {
    let key = event.key;
    if ((key >= 0 && key <= 9) || key === ',' || key === 'Backspace') {
        gestioPanel(key);
    }
});

function gestioPanel(value) {
    // Verificar si se ingresó una coma y si se presionó previamente
    if (value === "," && !decimalClicked) {
        // Permitir solo una coma
        if (!panelImport.value.includes(",")) {
            panelImport.value += value;
            decimalClicked = true; // Marcar que se ha ingresado una coma
        }
    } else if (value === "Backspace" && panelImport.value !== "") {
        // Si se presiona "Backspace", eliminar el último carácter
        panelImport.value = panelImport.value.slice(0, -1);
        // Restablecer el estado de decimalClicked si se elimina la coma
        if (!panelImport.value.includes(",")) {
            decimalClicked = false;
        }
    } else if (!isNaN(value)) {
        // Solo agregar números al valor si no es NaN
        if (decimalClicked) {
            let decimalPart = panelImport.value.split(",")[1];
            if (!decimalPart || decimalPart.length < 2) {
                panelImport.value += value;
            }
        } else {
            // No permitir más de 4 caracteres
            if (panelImport.value.length < 4) {
                panelImport.value += value;
            }
        }
    }
}

document.getElementsByTagName("img")[0].addEventListener("click", function () {
    console.log("click");
});