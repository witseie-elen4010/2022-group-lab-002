function changeColor(Color) {
    if (Color === 'white') {
        document.getElementById("body").className = "white";
      } else if  (Color === 'dark') {
        document.getElementById("body").className = "dark";
      } else {
        document.getElementById("body").className = "blue";
      }
  }
