function load_mode () {
    if (localStorage.getItem("darkmode") == 1) {


        var link = document.createElement("link");
        link.href = "Assets/Css/style_darkmode.css";
        link.type = "text/css";
        link.rel = "stylesheet";

        document.getElementsByTagName("head")[0].appendChild(link);
        
        var image = document.createElement("img");
        image.id = "orario";
        image.src = "Assets/Images/orario_rev.png";
        image.alt = "orario";

        document.getElementsByTagName("body")[0].appendChild(image);
        document.getElementById("change_mode_button").innerHTML = "Light Mode";
    } else{
        
        var image = document.createElement("img");
        image.id = "orario";
        image.src = "Assets/Images/orario.png";
        image.alt = "orario";

        document.getElementsByTagName("body")[0].appendChild(image);
    }
}

function change_mode () {
    if (localStorage.getItem("darkmode") == 1) {
        localStorage.setItem("darkmode", 0);
    } else {
        localStorage.setItem("darkmode", 1);
    }

    location.reload();
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
// Thumbnail image controls
function currentSlide() {
    showSlides();
}
  
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    slides[0].style.display = "block";
}