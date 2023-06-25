window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    let modal = document.querySelector('.modal');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }, 1000);
});