// function myFunction(data) {
//   const node = document.createElement("li");

//   const textnode = document.createTextNode(data);

//   node.appendChild(textnode);

//   document.getElementById("myList").appendChild(node);
// }
function myFunction(data){
  const playersList = document.getElementById("myList");
  const li = document.createElement("li");
  li.innerText = data;
  playersList.appendChild(li);
}
