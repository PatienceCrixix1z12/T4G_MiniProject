// // java for index page

function changemore() {
  let name = prompt("what is your name?");
  let mine = document.getElementById("itsme");
  mine.style.scrollBehavior = "hover";
  mine.innerHTML = `Welcome Home ${name}`;
}
let mina = document.getElementById("itsme");
mina.addEventListener("click", changemore);
