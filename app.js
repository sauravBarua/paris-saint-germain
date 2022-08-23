
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

function budgetCalculater() {
  const countPlayer = document.getElementsByTagName("li");
  const totalCount = countPlayer.length;
  const numberString = parseInt(totalCount);
  const perPlayer = parseInt(document.getElementById("perPlayer").value);
  const total = numberString * perPlayer;
  document.getElementById("expenses").innerHTML = total;
}

function budgetCalculaterTotal(){
  const expenses = parseInt(document.getElementById("expenses").innerHTML);
  const manager = parseInt(document.getElementById("manager").value);
  const coach = parseInt(document.getElementById("coach").value);
  const total = expenses + manager + coach;
  document.getElementById("budgetTotal").innerHTML = total;
}