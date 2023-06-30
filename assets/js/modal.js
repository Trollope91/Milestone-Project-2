window.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    let modal = document.querySelector('.modal');
    let modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
  }, 300);
});
 

/* 
Call boot strap modal on page load */