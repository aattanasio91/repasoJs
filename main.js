document.getElementById("loginBtn").addEventListener("click", function() {
    var name = document.getElementById("userInput").value;
    var pass = document.getElementById("passInput").value;
    if (validateUser(name) && validatePassword(pass)) {
        location.href = "pages/mainPage.html"
    } else {
        alert('Usuario o password incorrecto. Recuerda que el usuario deben ser unicamente numeros y 8 caracteres maximo, y la contrasena requiere como minimo, 6 caracteres, una letra y un numero')
    }
});

function validateUser(user) {
    console.log(user);
    var result = false;
    if (!tiene_letras(user) && user.length >= 8) {
        result = true;
    }
    return result;
}

function validatePassword(pass) {
    console.log(pass);
    var result = false;
    if (tiene_numeros(pass) && tiene_letras(pass) && pass.length >= 6) {
        result = true;
    }
    return result;
}

function tiene_numeros(texto) {
    var numeros = "0123456789";
    for (i = 0; i < texto.length; i++) {
        if (numeros.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}

function tiene_letras(texto) {
    var letras = "abcdefghyjklmnñopqrstuvwxyz";
    texto = texto.toLowerCase();
    for (i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}