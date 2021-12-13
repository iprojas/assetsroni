function loadIframe(minigame) {
    var iframe = document.getElementById('iframe-minigame');
    iframe.src = minigame;
    iframe.style.display = "block";
}


function closeIframe() {
    var iframe = document.getElementById('iframe-minigame');
    iframe.style.display = "none";
}

