function toggleElements() {
  let cardsFlipped = document.querySelectorAll(".memory-card.flip");
  if (cardsFlipped.length > 0) {
    //alert ("The game has already been started");
    let modal = document.querySelector(".modal");
    let modalInstance = new bootstrap.Modal(modal);
    let title = document.getElementById("exampleModalLabel");
    title.textContent = "Error";
    let bodytop = document.getElementById("modal-body-top");
    bodytop.innerHTML = "You cannot change game modes after the game has started.";
    let bodybottom = document.getElementById("modal-body-bottom");
    bodybottom.innerHTML = "";

    let gameModeButton = document.getElementById("game-mode-button");
    gameModeButton.style.display = "none";
    let sfxButton = document.getElementById("sound-button");
    sfxButton.style.display = "none";
    let hiddenButton = document.getElementById("close-button");
    hiddenButton.style.display = "block";


    modalInstance.show();
    return;
  }



  let elements = document.querySelectorAll(".harder");
  if (isHardMode === false) {

    isHardMode = true;
  } else {
    isHardMode = false;
  }
  elements.forEach(function (element) {
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}



