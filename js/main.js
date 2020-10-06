const timerNumbersEl = document.querySelector('.timer__main-clock');
const animatedArrowEl = document.querySelector('.arrow');
const timeInputEl = document.querySelector('.time-inp');
const playBtnEl = document.querySelector('.play-btn');
let currentTime = null;
let timerTime = null;
let timerMinutes = null;
let temerSeconds = null;

const checkSetTime = () => {
  let currentTime = new Date();
  currentTime = (currentTime.getHours() * 60 + currentTime.getMinutes()) * 60000;
  timerTime = (timeInputEl.valueAsNumber - currentTime) + 1000;
  timerNumbersEl.classList.remove('timer__clock-animation');
  animatedArrowEl.classList.add('animate-spin');
  const getTimeRemaining = () => {
    timerTime = timerTime - 1000;
    timerMinutes = Math.floor((timerTime / 1000 / 60) % 60);
    timerSeconds = Math.floor((timerTime / 1000) % 60);
    if (timerMinutes < 10) {
      timerMinutes = `0${timerMinutes}`;
    } 
    if (timerSeconds < 10) {
      timerSeconds = `0${timerSeconds}`;
    }
    timerNumbersEl.innerHTML = `${timerMinutes}:${timerSeconds}`;
    if (timerTime <= 0) {
      animatedArrowEl.classList.remove('animate-spin');
      timerNumbersEl.classList.add('timer__clock-animation');
      clearInterval(intervalID);
    }
  }
  let intervalID = setInterval(getTimeRemaining, 1000);
};

playBtnEl.addEventListener('click', checkSetTime);


