function load_mode() {
    if (localStorage.getItem("darkmode") == 1) {
        var link = document.createElement("link");
        link.href = "assets/css/dark.css";
        link.type = "text/css";
        link.rel = "stylesheet";

        document.getElementsByTagName("head")[0].appendChild(link);

        // Switch
        document.getElementsByTagName("input")[0].checked = true;
    }
}

function change_mode() {
    if (localStorage.getItem("darkmode") == 1) {    
        localStorage.setItem("darkmode", 0);
    } else {
        localStorage.setItem("darkmode", 1);
    }

    location.reload();
}
