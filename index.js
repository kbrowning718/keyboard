var screen = document.getElementById('screen');

var keys = document.getElementsByClassName('keyboard-key');

for(var i=0; i< keys.length; i++) {


  keys[i].addEventListener("click", function (e) {
    if(e.target.classList.contains("letter")) {

    var characters = e.target.innerHTML;

var typedCharacters = document.createElement('span');
typedCharacters.innerHTML = characters;
 {
screen.appendChild(typedCharacters);
}
}

if(e.target.classList.contains("space")) {
  var space = document.createTextNode(" ");

screen.appendChild(space);
}

});

}
