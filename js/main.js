var modal = document.querySelector('.modal-search');
var open = document.querySelector('.btn-search');

open.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal-hidden');
});
