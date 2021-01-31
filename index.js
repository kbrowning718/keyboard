var screen = document.getElementById('screen');
var keys = document.getElementsByClassName('keyboard-key');
var numbers = document.getElementsByClassName('number-label');

let screenArray = [];
screen.innerHTML = screenArray;

for(var i=0; i< keys.length; i++) {

  keys[i].addEventListener("click", function (e) {
    if(e.target.classList.contains("letter") || e.target.classList.contains("number")) {

    var characters = e.target.innerHTML;

var typedCharacters = document.createElement('span');
typedCharacters.innerHTML = characters;

var typedNumbers = numbers.innerHTML
 {

   screenArray.push(typedCharacters.innerText);
screen.appendChild(typedCharacters);
screen.appendChild(typedNumbers);

}
}

if(e.target.classList.contains("space")) {
screenArray.push(" ");
console.log(screenArray);

screen.innerText = screenArray.join('');

}

if(e.target.classList.contains('enter')) {
  var enter = document.createElement("br");
  screen.appendChild(enter);
}

if(e.target.classList.contains("delete")) {

  var lastCharacter =  screenArray.pop();


}

});



}
