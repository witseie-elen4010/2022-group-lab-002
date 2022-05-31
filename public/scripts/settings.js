const settings = document.getElementsByClassName('contentBx')
for (i = 0; i < settings.length; i++) {
  settings[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
function changeColor (Color) {
  if (Color === 'white') {
    document.body.className = 'white';
  }
  if (Color === 'black') {
    document.body.className = 'black';
  }
  if (Color === 'grey') {
    document.body.className = 'grey';
  }
}