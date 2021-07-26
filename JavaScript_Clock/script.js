const digitalElement = document.querySelector('.digital');
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateTime() {
  let now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((360 / 60) * seconds) - 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minute = now.getMinutes();
  const minsDegrees = ((minute / 60) * 360) + ((seconds/60)*6) - 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) - 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`
}

function fixZero(time) { 
  return time < 10 ? `0${time}` : time;
}

setInterval(updateTime, 1000);

setDate();