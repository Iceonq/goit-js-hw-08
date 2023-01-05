import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onTimeUpdater = ({ seconds } = 0) => {
  localStorage.setItem(STORAGE_KEY, seconds);
  console.log(seconds);
};

const getVideoCurrentTime = () => {
  return localStorage.getItem(STORAGE_KEY) || 0;
};

player.setCurrentTime(getVideoCurrentTime()).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      alert('error');
      break;

    default:
      break;
  }
});

player.on('timeupdate', throttle(onTimeUpdater, 1000));
