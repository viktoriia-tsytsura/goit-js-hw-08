import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(onPlay, 1000));
    
function onPlay(data) {
    console.log(data);
    const time = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time));
}

if (localStorage.length !== 0) {
  player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")))
}

