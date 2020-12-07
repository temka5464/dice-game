var isNewGame;
var activePlayer;
var scores;
var roundScore;
var diceNumber;
var diceDOM = document.querySelector(".dice");
initGame();

function initGame() {
  isNewGame = true;
  //Тоглогчийн ээлжийг хадгалдаг 1 хувьсагч хэрэг болно. Нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;
  //Тоглогчдыг оноог цуглуулах 1 хувьсагч
  scores = [0, 0];
  // Түр оноог цуглуулах хувьсагч
  roundScore = 0;
  // Шооны аль талаараа буусныг хадгалах хувсагч хэрэгтэй. 1-6 гэсэн утгыг хадгалах хувьсагч
  diceNumber = "";
  // <div class="player-score" id="score-0">43</div>
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDOM.style.display = "none";
}

//Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    diceNumber = Math.floor(Math.random() * 6) + 1;
    //   alert("shoog shidlee : " + diceNumber);
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + diceNumber + ".png";
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна шинээр эхлэнэ үү !!!");
  }
});

//Оноогоо цуглуулах event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document.querySelector(".player-1-panel").classList.remove("active");
    } else {
      switchToNextPlayer();
    }
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
  } else {
    alert("Тоглоом дууссан байна шинээр эхлэнэ үү !!!");
  }
});
//Шинэ тоглоом эхлүүлэх товчны event listener
document.querySelector(".btn-new").addEventListener("click", initGame);

//Ээлж солих функц
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDOM.style.display = "none";
}
