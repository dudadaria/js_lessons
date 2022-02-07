"use strict"

const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');


let wasVideoPlaying = false;
let progressIdentifier = null;

window.addEventListener('load', function () {
  console.log(video)
  timing.min = 0;
  timing.max = 33.25;
});

pauseBtn.addEventListener('click', function () {
  if (!video.paused) {
    video.pause();
    clearInterval(progressIdentifier)
  }
});

playBtn.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    progressIdentifier = setInterval(changeProgress, 100);
  }
});

timing.addEventListener('change', function () {
  video.currentTime = timing.value;
  if (wasVideoPlaying) {
    video.play();
    progressIdentifier = setInterval(changeProgress, 100);
  } else {
    changeProgress()
  }
})

timing.addEventListener('mousedown', function () {
  wasVideoPlaying = !video.paused;
  if (wasVideoPlaying) {
    video.pause();
    clearInterval(progressIdentifier)
  }
})

function changeProgress() {
  timing.value = video.currentTime;
  currentTimeEl.innerText = video.currentTime;
}

video.addEventListener("ended", function () {
  clearInterval(progressIdentifier);
})

volume.addEventListener('change', function () {
  video.volume = volume.value;
})
