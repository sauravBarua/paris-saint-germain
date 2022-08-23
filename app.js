
function playerSelected(data) {
  const playersList = document.getElementById("playerName");
  const li = document.createElement("li");
  li.innerText = data;
  playersList.appendChild(li);
}


function buttonDisabled1() {
  document.getElementById("player1").disabled = true;
}
function buttonDisabled2() {
  document.getElementById("player2").disabled = true;
}
function buttonDisabled3() {
  document.getElementById("player3").disabled = true;
}
function buttonDisabled4() {
  document.getElementById("player4").disabled = true;
}
function buttonDisabled5() {
  document.getElementById("player5").disabled = true;
}
function buttonDisabled6() {
  document.getElementById("player6").disabled = true;
}
