function showMenu() {
    document.getElementById("sideNav").style.left = "0px";
}
function hideMenu() {
    document.getElementById("sideNav").style.left = "-300px";
}
function onLoad() {
    $(document).ready(function () {
        var content = document.getElementsByClassName("content").item(0);
        var height = jQuery(window).height();
        var width = jQuery(window).width();
        content.style.height = `${height - 58}px`
        content.style.width = `${width}px`
        content.style.maxWidth = `${width}px`
        if (jQuery(window).width() > 700) {
            document.getElementById("background").setAttribute("src", "../img/background.png");
        } else {
            document.getElementById("background").setAttribute("src", "../img/background_mobile.png");
        }
    });
}
var pos = 1
function interv_left() {
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    var cl = document.getElementById("left_C");
    var cr = document.getElementById("right_C");
    pos--
    if (pos == 1) {
        video2.style.left = "1500px";
        video1.style.left = "0";
        cl.setAttribute("onclick", "");
        cl.style.color = "#5f5f5f";
    } else if (pos == 2) {
        video3.style.left = "1500px";
        video2.style.left = "0";
    } else if (pos == 3) {
        video4.style.left = "1500px";
        video3.style.left = "0";
        cr.setAttribute("onclick", "invterv_right()");
        cr.style.color = "#000000";
    };
}
function interv_right() {
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    var cl = document.getElementById("left_C");
    var cr = document.getElementById("right_C");
    pos++
    if (pos == 4) {
        video3.style.left = "-500px";
        video4.style.left = "0";
        cr.setAttribute("onclick", "");
        cr.style.color = "#5f5f5f";
    } else if (pos == 3) {
        video2.style.left = "-500px";
        video3.style.left = "0";
    } else if (pos == 2) {
        video2.style.left = "-500px";
        video1.style.left = "0";
        cl.setAttribute("onclick", "invterv_left()");
        cl.style.color = "#000000";
    }
}
window.onresize = onLoad()