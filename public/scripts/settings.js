function changeColor(Color) {
    if (Color === 'white') {
        document.getElementById("body").className = "white";
      }
      if (Color === 'black') {
        document.getElementById("body").className = "black";
      } 
      if (Color === 'grey') {
        document.getElementById("body").className = "grey";
      }
  }
  const settings = document.getElementsByClassName('contentBx')
  for (i = 0; i < settings.length; i++) {
    settings[i].addEventListener('click', function () {
      this.classList.toggle('active')
    })
  }