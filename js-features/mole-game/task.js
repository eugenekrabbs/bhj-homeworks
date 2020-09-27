const getHole = (index) => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
deadScore = 0;
lostScore = 0;

for (let i = 1; i <= 9; i++) {
  const x = getHole(i);
  
  x.onclick = function () {
    
    if (x.classList.contains('hole_has-mole')) {
      deadScore += 1;
      dead.textContent = deadScore;
      
      if (deadScore == 10) {
        alert("Победа!");
      }

    } else {
      lostScore += 1;
      lost.textContent = lostScore;
      
      if (lostScore == 5) {
        alert("Вы проиграли");
      }
    }
  }
}