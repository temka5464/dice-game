//Тоглогчийн ээлжийг хадгалдаг 1 хувьсагч хэрэг болно. Нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;
//Тоглогчдыг оноог цуглуулах 1 хувьсагч
var scores = [0, 0];
// Түр оноог цуглуулах хувьсагч
var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувсагч хэрэгтэй. 1-6 гэсэн утгыг хадгалах хувьсагч
var dice = Math.floor(Math.random() * 6) + 1;
// <div class="player-score" id="score-0">43</div>
window.document.querySelector("#score-0").textContent = "0";
window.document.querySelector("#score-1").textContent = "0";

document.querySelector("#current-0").innerHTML = "0";
document.querySelector("#current-0").innerHTML = "0";
console.log("Шоо :" + dice);
document.querySelector(".dice").style.display = "none";
