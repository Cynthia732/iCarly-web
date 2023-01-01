var iCarlyVideo = document.getElementById("live-show");
var playButton = document.getElementById("play-button");
var stopButton = document.getElementById("stop-button");
var seekslider = document.getElementById("seekslider");

playButton.addEventListener("click", () => {
    iCarlyVideo.play();
});

stopButton.addEventListener("click", () => {
    iCarlyVideo.pause();
});

iCarlyVideo.addEventListener("timeupdate", () => {
    var nt = iCarlyVideo.currentTime * (100 / iCarlyVideo.duration);
    seekslider.value = nt;
});

seekslider.addEventListener("change", () => {
    var seekto = iCarlyVideo.duration * (seekslider.value / 100);
    iCarlyVideo.currentTime = seekto;
})