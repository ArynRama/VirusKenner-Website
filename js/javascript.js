function showMenu() {
    document.getElementById("sideNav").style.left = "0px";
}
function hideMenu() {
    document.getElementById("sideNav").style.left = "-300px";
}
function onLoad() {
    var height = screen.height
    var width = screen.width
    var content = document.getElementsByClassName("content").item(0)
    content.style.height = `${height - 58}px`
    content.style.width = `${width}px`
    content.style.maxWidth = `${width}px`
    if (visualViewport > 700) {
        document.getElementById("background").setAttribute("src", "../img/background.png");
    } else {
        document.getElementById("background").setAttribute("src", "../img/background_mobile.png");
    }
}
window.onresize = onLoad()