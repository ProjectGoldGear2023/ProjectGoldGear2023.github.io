let isScrollHintVisible = true;

// SCROLL METHODS
function controllScrollHint() {
    if (window.scrollY >= 100 && isScrollHintVisible === true) {
        $.wait(function () { $(".scroll-hint").fadeOut("slow"); isScrollHintVisible = false }, .5);
    } else if (window.scrollY < 100 && isScrollHintVisible === false) {
        $.wait(function () { $(".scroll-hint").fadeIn("slow"); isScrollHintVisible = true }, .2);
    }
}

// NAVIGATION METHODS
function navigateTo(url) {
    window.location.href = url;
}

// WAIT METHODS
$.wait = function (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
}