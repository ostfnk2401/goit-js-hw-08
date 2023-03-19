import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

function savePlayingTime(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.on('timeupdate', throttle(savePlayingTime, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");

if (savedTime) {
    player.setCurrentTime(savedTime);
}

