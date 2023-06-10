function toggleElements() {
    var elements = document.querySelectorAll(".harder");
    if (isHardMode === false){

     isHardMode = true; 
    } else {
      isHardMode = false;
    }
    elements.forEach(function(element) {
      if (element.style.display === "none" || element.style.display === "" ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
  

