/*mobile nav*/
const mobileBurger = document.querySelector(".mobile-nav-button");
const mobileBurgerIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile-nav");


mobileBurger.addEventListener("click", function () {
    mobileBurgerIcon.classList.toggle("active");
    mobileNav.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
})



/*video nav*/

const videoBtn = document.querySelector("#video-story-btn");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
const videoOverlay = document.querySelector("#video-story-overlay");
const videoFile = document.querySelector("#video-story");

videoBtn.addEventListener("click", function () {

    function toggleOverlay(event) {
        if (event.type === "mouseleave") {
            videoOverlay.classList.add("hidden");
        } else {
            videoOverlay.classList.remove("hidden");
        }
    }

    if (videoFile.paused) {
        videoFile.play();
        videoBtnIcon.src = './img/pause.svg';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;

    } else {
        videoFile.pause();
        videoBtnIcon.src = './img/play.svg'
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;

    }
})