let isScrollHintVisible = true;

function changeImage(element) {
    if (element.src.includes('red_canvas')) {
        element.style.height = '120px';
        element.src = './assets/images/Picuezo_Studios_old.webp'
    } else if (element.src.includes('_old')) {
        element.style.height = '100px';
        element.src = './assets/images/Picuezo_Studios_new.webp'
    } else {
        element.style.height = '64px';
        element.src = './assets/images/red_canvas.webp';
    }
}

// SCROLL METHODS
function scrollController() {
    controllScrollHint();
    animationsAtSpecificScroll();
}

function controllScrollHint() {
    if (window.scrollY >= 100 && isScrollHintVisible === true) {
        $.wait(function () { $(".scroll-hint").fadeOut("slow"); isScrollHintVisible = false }, .5);
    } else if (window.scrollY < 100 && isScrollHintVisible === false) {
        $.wait(function () { $(".scroll-hint").fadeIn("slow"); isScrollHintVisible = true }, .2);
    }
}

function animationsAtSpecificScroll() {
    console.log(window.scrollY);
    if (window.scrollY >= 500) {
        $("#preOrder h1").addClass('preorderTitleAnimation');
        $("#preOrder h1 span").addClass('span-run');
    }
    if (window.scrollY >= 750) {
        $("#preOrder button").addClass('fadeInAnimation');
    }
}

// NAVIGATION METHODS
function navigateTo(url) {
    window.location.href = url;
}

function openTab(url) {
    window.open(url, "_blank");
}

// WAIT METHODS
$.wait = function (callback, seconds) {
    return window.setTimeout(callback, seconds * 1000);
}