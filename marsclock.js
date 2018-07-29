const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const houHand = document.querySelector(".hour-hand");

function setDate(){
  const now = new Date();

  // seconds
  const sec = now.getSeconds();
  const secDeg = ((sec / 60) * 360) +90;
  secHand.style.transform = `rotate(${secDeg}deg)`;

  // minutes
  const min = now.getMinutes();
  const minDeg = ((min / 60) *360) +90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  // hour
  const hou = now.getHours();
  const houDeg = ((hou / 12) * 360) +90;
  houHand.style.transform = `rotate(${houDeg}deg)`;
console.log(hou)
}

setInterval(setDate, 1000);
