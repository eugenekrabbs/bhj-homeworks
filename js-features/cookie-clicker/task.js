const clickerCounter = document.getElementById("clicker__counter");
let clickerIndex = 0;
const cookieElement = document.getElementById("cookie");

cookieElement.onclick = function () {
  switch(this.width) {
    case 200:
      this.width = 250;
      break;
    case 250:
      this.width = 200;
      break;
  }
  
  clickerIndex += 1;
  clickerCounter.textContent = clickerIndex;    
}