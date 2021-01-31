var screen = document.getElementById('screen');
var keys = document.getElementsByClassName('keyboard-key');
var specialCharacters = document.getElementsByClassName('number-icon');
var numbers = document.getElementsByClassName('number-label');


let screenArray = [];
screen.innerHTML = screenArray;

for(var i=0; i<keys.length; i++) {
  keys[i].addEventListener("click", function(e) {
    if(e.target.classList.contains('letter')) {

      var letters = e.target.innerHTML;

      var typedLetters = document.createElement('span');
      typedLetters.innerHTML = letters;
    }

    screenArray.push(letters);
    screen.appendChild(letters);
  })
}
