if (window.innerWidth < 700) {
    document.getElementById("background").setAttribute("src", "./img/background_mobile.png");
} else {
    document.getElementById("background").setAttribute("src", "./img/background.img");
}
function showMenu() {
    document.getElementById("sideNav").style.left = "0px";
}
function hideMenu() {
    document.getElementById("sideNav").style.left = "-300px";
}
