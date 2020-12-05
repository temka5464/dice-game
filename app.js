//Тоглогчийн ээлжийг хадгалдаг 1 хувьсагч хэрэг болно. Нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
//Тоглогчдыг оноог цуглуулах 1 хувьсагч
var scores = [0, 0];
// Түр оноог цуглуулах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувсагч хэрэгтэй. 1-6 гэсэн утгыг хадгалах хувьсагч
var diceNumber = "";
// <div class="player-score" id="score-0">43</div>
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
var diceDOM = document.querySelector(".dice");
diceDOM.style.display = "none";

//Шоог шидэх эвент listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  diceNumber = Math.floor(Math.random() * 6) + 1;
  //   alert("shoog shidlee : " + diceNumber);
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + diceNumber + ".png";
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDOM.style.display = "none";
  }
});
