function changeColor (Color) {
  if (Color === 'white') {
    document.body.classList.toggle('white');
  }
  if (Color === 'black') {
    document.body.classList.toggle('black');
  }
  if (Color === 'grey') {
    document.body.classList.toggle('grey');
  }
}
  const settings = document.getElementsByClassName('contentBx')
  for (i = 0; i < settings.length; i++) {
    settings[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
  }