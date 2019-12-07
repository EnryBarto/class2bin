function load_orario() {
    if (localStorage.getItem("darkmode") == 1) {
        document.getElementById("orario-link").src = "assets/img/orario_rev.png";
        document.getElementById("orario-lightbox").src = "assets/img/orario_rev.png";
        
    } else {
        document.getElementById("orario-link").src = "assets/img/orario.png";
        document.getElementById("orario-lightbox").src = "assets/img/orario.png";
    }
}

// LIGHTBOX

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
