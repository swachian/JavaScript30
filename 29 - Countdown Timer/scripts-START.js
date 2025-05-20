const timerButtons = document.querySelectorAll('.timer button')
const displayTimeLeft = document.querySelector('.display__time-left')
const displayEndTime = document.querySelector('.display__end-time')
let secondsLeft
let countDown

function handleTimerButton(e) {
    const seconds = this.dataset['time']
    const content = secondsFormat(seconds)
    displayTimeLeft.textContent = content
    const endBy = endAt(seconds)
    displayEndTime.textContent = `Be back at ${endBy.getHours()}:${endBy.getMinutes().toString().padStart(2, '0')}`
    secondsLeft = seconds
    countDown = setInterval(handleCountDown, 1000)
}

function secondsFormat(seconds) {
    const minutes = Math.floor(seconds/60)
    const remainingSeconds = seconds % 60
    const paddedSeconds = remainingSeconds.toString().padStart(2, '0')
    return `${minutes}:${paddedSeconds}`
}

function endAt(seconds) {
    const now = new Date()
    const endTime = new Date(now.getTime() + 1000*seconds)
    return endTime
}

function handleCountDown() {
    const content = secondsFormat(secondsLeft)
    displayTimeLeft.textContent = content
    document.title = content
    secondsLeft--
}

timerButtons.forEach(timerButton => timerButton.addEventListener('click', handleTimerButton))