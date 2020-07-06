var keys = document.getElementsByClassName('keyboard-key');


var screen = document.getElementById('screen');
screen.innerHTML = '';


for(var i=0; i< keys.length; i++) {



  keys[i].addEventListener("click", function (e) {
    var characters = e.target.innerHTML;

var typedCharacters = document.createElement('span');
typedCharacters.innerHTML = characters;
screen.appendChild(typedCharacters);



});
}
