// get elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');
const toggle = player.querySelector('.player__button.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function tooglePlay(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function updatePlay(){
    const icon = this.paused ? '►' : '||';
    toggle.textContent = icon;
}
function skip(){
    // console.log(video.currentTime);
    video.currentTime += parseFloat(this.dataset.skip);  //gets data-skip value
}

function handleRange(){
    // video['volume|playbackRate'] = newvalue
    video[this.name] = this.value;
}

function handleProgress(){
    const percentage = video.currentTime / video.duration * 100;
    progressBar.style.flexBasis = `${percentage}%`;
}

function scrub(e){
    const newTime = e.offsetX / progress.offsetWidth ;//* 100;
    video.currentTime = video.duration * newTime;
    // progressBar.style.flexBasis = `${offset}%`;
}
video.addEventListener('click', tooglePlay);
video.addEventListener('play', updatePlay);
video.addEventListener('pause', updatePlay);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', tooglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRange));
// ranges.forEach(range => range.addEventListener('mousemove', handleRange));

progress.addEventListener('click', scrub);