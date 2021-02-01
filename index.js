const screen = document.getElementById('screen');
const keys = document.getElementsByClassName('keyboard-key');

let screenArray = [];

const renderParagraphs = () => {
  screen.innerHTML = ""
  return screenArray.map((s) => {
  const paragraph = document.createElement('p');
  paragraph.innerText = s.join('');
  return screen.appendChild(paragraph);

})
}



for(let i=0; i<keys.length; i++) {
  keys[i].addEventListener("click", function(e) {
    if(e.target.classList.contains('letter')) {
      if(!screenArray.length > 0) {
        screenArray.push([]);
      }
const letter = e.target.innerText;
screenArray[screenArray.length-1].push(letter);
renderParagraphs()
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
    screenArray.push([]);

}

if(e.target.classList.contains('delete')) {
  if(screenArray[screenArray.length-1].length > 0) {
  screenArray[screenArray.length-1].pop();
}
else if(screenArray[screenArray.length-1].length <= 0) {
  screenArray.pop();
}

}

});

}
