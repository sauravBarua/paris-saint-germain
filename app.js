function playerSelected(data) {
  const playersList = document.getElementById("playerName");
  const li = document.createElement("li");
  li.innerText = data;
  playersList.appendChild(li);
  const countPlayer = document.getElementsByTagName("li");
  const totalCount = countPlayer.length;
  const numberString = parseInt(totalCount);
  if (numberString > 5) {
    window.alert("You can't select more than Five.");
    playersList.removeChild(li);
  }
}

function buttonDisabled1() {
  document.getElementById("player1").disabled = true;
  document.getElementById("player1").style.background = "#808080";
}
function buttonDisabled2() {
  document.getElementById("player2").disabled = true;
  document.getElementById("player2").style.background = "#808080";
}
function buttonDisabled3() {
  document.getElementById("player3").disabled = true;
  document.getElementById("player3").style.background = "#808080";
}
function buttonDisabled4() {
  document.getElementById("player4").disabled = true;
  document.getElementById("player4").style.background = "#808080";
}
function buttonDisabled5() {
  document.getElementById("player5").disabled = true;
  document.getElementById("player5").style.background = "#808080";
}
function buttonDisabled6() {
  document.getElementById("player6").disabled = true;
  document.getElementById("player6").style.background = "#808080";
}

function budgetCalculater() {
  const countPlayer = document.getElementsByTagName("li");
  const totalCount = countPlayer.length;
  const numberString = parseInt(totalCount);
  const perPlayer = parseInt(document.getElementById("perPlayer").value);
  const total = numberString * perPlayer;
  document.getElementById("expenses").innerHTML = total;
}

function budgetCalculaterTotal() {
  const expenses = parseInt(document.getElementById("expenses").innerHTML);
  const manager = parseInt(document.getElementById("manager").value);
  const coach = parseInt(document.getElementById("coach").value);
  const total = expenses + manager + coach;
  document.getElementById("budgetTotal").innerHTML = total;
}
