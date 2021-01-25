function procesarImagen(imagen) {
    var imagen = imagen.substr(3, 4);
    var url = "imagenes/nature-";
    switch (imagen) {
        case "1":
            url += ("1920x1280-300ppp.jpg");
            break;
        case "2":
            url += ("800x533-300ppp.jpg");
            break;
        default:
            url += ("5184x3456-300ppp.jpg");

    }
    mostrarImagen(url);
}

function mostrarImagen(url) {
    window.open(url);
}

function imagenesActividad3() {
    let img3_1 = document.getElementById("img3.1");
    let img3_2 = document.getElementById("img3.2");
    let img3_3 = document.getElementById("img3.3");
    let img3_4 = document.getElementById("img3.4");
    let img3_5 = document.getElementById("img3.5");

    if (!img3_1.classList.contains("ocultar")) {
        img3_1.classList.add("ocultar");
    }
    if (!img3_2.classList.contains("ocultar")) {
        img3_2.classList.add("ocultar");
    }
    if (!img3_3.classList.contains("ocultar")) {
        img3_3.classList.add("ocultar");
    }
    if (!img3_4.classList.contains("ocultar")) {
        img3_4.classList.add("ocultar");
    }
    if (!img3_5.classList.contains("ocultar")) {
        img3_5.classList.add("ocultar");
    }

    if ($(document).width() > 800) {
        img3_1.classList.remove("ocultar");
        img3_2.classList.remove("ocultar");
        img3_3.classList.remove("ocultar");
        img3_4.classList.remove("ocultar");
        img3_5.classList.remove("ocultar");
    }
    if ($(document).width() < 800) {
        img3_1.classList.remove("ocultar");
        img3_2.classList.remove("ocultar");
        img3_3.classList.remove("ocultar");
        img3_4.classList.remove("ocultar");
    } else if ($(document).width() < 800) {
        img3_1.classList.remove("ocultar");
        img3_2.classList.remove("ocultar");
        img3_3.classList.remove("ocultar");
    } else if ($(document).width() < 400) {
        img3_1.classList.remove("ocultar");
        img3_2.classList.remove("ocultar");
    } else if ($(document).width() < 300) {
        img3_1.classList.remove("ocultar");
    }
}