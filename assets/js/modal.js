window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var modal = document.querySelector('.modal');
        var modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    }, 1000);
});

window.addEventListener('DOMContentLoaded', function() {
    alignModalVertically();
  });
  
  function alignModalVertically() {
    var modal = document.querySelector('.modal');
    var modalHeight = modal.offsetHeight;
    var viewportHeight = window.innerHeight;
    var topPosition = (viewportHeight - modalHeight) / 2;
  
    modal.style.top = topPosition + 'px';
  }