function load_mode () {
    if (localStorage.getItem("darkmode") == 1) {


        var link = document.createElement("link");
        link.href = "Assets/Css/style_darkmode.css";
        link.type = "text/css";
        link.rel = "stylesheet";

        document.getElementsByTagName("head")[0].appendChild(link);
        document.getElementById("change_mode_button").innerHTML = "Light Mode";
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