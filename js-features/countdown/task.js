const timer = document.getElementById("timer").textContent;
let index = parseFloat(timer);
const timerStart = setInterval(() => {
  index -= 1;
  document.getElementById("timer").textContent = index;
  if (index == 0) {
    clearInterval(timer);
    alert("Вы победили в конкурсе!");
    clearInterval(timerStart);
  }
}, 1000);