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
var showing = 1;
function interv_left() {
    if (showing == 3) {
        $("#video3").hide();
        $("#video2").show();
        $("#credientials").hide();
        showing--;
        document.getElementById("right_C").style.color = "#000000";
        document.getElementById("right_C").setAttribute("onclick", "interv_right()");
    } else if (showing == 2) {
        $("#video2").hide();
        $("#video1").show();
        document.getElementById("left_C").style.color = "#5f5f5f";
        document.getElementById("left_C").setAttribute("onclick", "");
        showing--;
    };
}

function interv_right() {
    if (showing == 1) {
        $("#video1").hide();
        $("#video2").show();
        showing++;
        document.getElementById("left_C").style.color = "#000000";
        document.getElementById("left_C").setAttribute("onclick", "interv_left()");
    } else if (showing == 2) {
        showing++;
        document.getElementById("right_C").style.color = "#5f5f5f";
        document.getElementById("right_C").setAttribute("onclick", "");
        $("#video2").hide();
        $("#video3").show();
        $("#credientials").show();
    };
}
window.onresize = onLoad()