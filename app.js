function playerSelected(data) {
    const playersList = document.getElementById("playerName");
    const li = document.createElement("li");
    li.innerText = data;
    playersList.appendChild(li);
    console.log("button clicked");
  }