var screen = document.getElementById('screen');
var keys = document.getElementsByClassName('keyboard-key');



// starting array as empty; screen.innerHTML is the "screen"

let screenArray = [];
screen.innerHTML = screenArray;

//click event for the letter keys; check to see if the class contains "letter"

for(var i=0; i<keys.length; i++) {
  keys[i].addEventListener("click", function(e) {
    if(e.target.classList.contains('letter')) {

      // variable letters is the innerHTML of whatever was clicked

      let letters = e.target.innerHTML;
      console.log(letters);

      //typedLetters is the new span element created in the screen.innerHTML

      var typedLetters = document.createElement('span');
      typedLetters.innerHTML = letters;

      screenArray.push(letters);
      screen.appendChild(typedLetters);
  }


if(e.target.classList.contains('number')) {
  let numberLabel = e.target.children[1].innerHTML;
  console.log(numberLabel);

  var typedNumbers = document.createElement('span');
  typedNumbers.innerHTML = numberLabel;

  screenArray.push(numberLabel);
  screen.appendChild(typedNumbers);
}





});


}
