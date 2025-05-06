// get things
const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const progress = player.querySelector(".progress")
const progressFilled = progress.querySelector(".progress__filled")
const toggle = player.querySelector(".toggle")
const playSkips = player.querySelectorAll("[data-skip]")

// do things
function togglePlay() {
    let method = video.paused ? 'play' : 'pause'
    video[method]()
}

function changeButton() {
    toggle.textContent = video.paused ? '►'  : '⏸'
}

function skip() {
    console.log(this.dataset)
    video.currentTime += parseInt(this.dataset.skip)
}

function handleProgress() {
    console.log((video.currentTime/video.duration)*100)
    progressFilled.style.flexBasis = `${(video.currentTime/video.duration)*100}%`
}
// bind things
video.addEventListener("click", togglePlay)
video.addEventListener("play", changeButton)
video.addEventListener("pause", changeButton)
toggle.addEventListener("click", togglePlay)
playSkips.forEach(playSkip => playSkip.addEventListener("click", skip))
video.addEventListener("timeupdate", handleProgress)