function toggleVisibility() {
    var element = document.getElementById("myElement");
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }