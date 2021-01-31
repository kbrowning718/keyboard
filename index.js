const screen = document.getElementById('screen');
const keys = document.getElementsByClassName('keyboard-key');

let screenArray = [[]];

const renderParagraphs = () => {
  return screenArray.map((s) => {
  const paragraph = document.createElement('p');
  paragraph.innerText = s.join('');
  return screen.appendChild(paragraph);

})
}



for(let i=0; i<keys.length; i++) {
  keys[i].addEventListener("click", function(e) {
    if(e.target.classList.contains('letter')) {

      var letters = e.target.innerHTML;
      console.log(letters);
  }


if(e.target.classList.contains('number')) {
  var numberLabel = e.target.children[1].innerHTML;
  console.log(numberLabel);

  var typedNumbers = document.createElement('span');
  typedNumbers.innerHTML = numberLabel;

  screenArray.push(numberLabel);
  screen.appendChild(typedNumbers);
}


if(e.target.classList.contains('enter')) {
    var enter = document.createElement('p');

  var newLine = [];

newLine.push(enter.innerHTML);

screen.appendChild(enter);

}





});


}
