var modal = document.querySelector('.modal-search');
var open = document.querySelector('.btn-search');
console.log(modal);

open.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.toggle('show');
});
