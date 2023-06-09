window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var modal = document.querySelector('.modal');
        var modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    }, 1000);
});

function toggleVisibility() {
    var element = document.getElementById("myElement");
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }