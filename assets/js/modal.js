window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var modal = document.querySelector('.modal');
        var modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    }, 1000);
});