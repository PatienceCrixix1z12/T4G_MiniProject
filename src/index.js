
// // java for index page
let name = prompt("what is your name?");
 function changemore(){
alert(`hello${name}`);
    let mine =document.getElementById("itsme");
    mine.innerHTML='Welcome home' ;
 }
let mina = document.getElementById("itsme");
mina.addEventListener("click",changemore);