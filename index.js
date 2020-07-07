var screen = document.getElementById('screen');
var keys = document.getElementsByClassName('keyboard-key');

let screenArray = [];

for(var i=0; i< keys.length; i++) {


  keys[i].addEventListener("click", function (e) {
    if(e.target.classList.contains("letter")) {

    var characters = e.target.innerHTML;

var typedCharacters = document.createElement('span');
typedCharacters.innerHTML = characters;
 {
screen.appendChild(typedCharacters);
console.log(screenArray.push(typedCharacters.innerHTML));
}
}

if(e.target.classList.contains("space")) {
  var space = document.createTextNode(" ");

screen.appendChild(space);
screenArray.push(space);
}

if(e.target.classList.contains('enter')) {
  var enter = document.createElement("br");
  screen.appendChild(enter);
screenArray.push(enter);
}

var message = screen.innerText;

console.log(screenArray);

if(e.target.classList.contains("delete")) {

  var lastCharacter =  screenArray.pop();

  lastCharacter.innerHTML = "";


}

});



}
