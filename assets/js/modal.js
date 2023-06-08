window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var modal = document.querySelector('.modal');
        var modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    }, 1000);
});

var bulb = new Audio()
bulb.src = "/assets/images/bulbasaur.mp3"