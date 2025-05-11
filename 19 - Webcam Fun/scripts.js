const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');



async function getCamera() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(device => device.kind === 'videoinput');
    console.log({devices})
    console.log(cameras)
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
              .then(stream => {
                video.srcObject = stream
                video.play()
              })

              

}

let currentData = ''
function projectToCanvas() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const data = canvas.toDataURL('image/jpeg');
    if (currentData !== data) {
        console.log(data)
        currentData = data
    }
}

getCamera()

setInterval(projectToCanvas, 20)