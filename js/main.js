var modal = document.querySelector('.modal-search');
var open = document.querySelector('.btn-search');
var form = modal.querySelector('.search-form');
var calendar = form.querySelectorAll('.btn-calend');

var number = form.querySelector('.number');
var date = form.querySelector('.date');
var input = form.querySelectorAll('.input');

open.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!modal.classList.contains('visually-hidden')) {
    modal.classList.add('visually-hidden');
  } else {
    modal.classList.remove('visually-hidden');
  }
});

form.addEventListener('submit', function (evt) {
  if (input.value === '') {
    evt.preventDefault();
  } else {
    form.submit();
  }
});

calendar.addEventListener('click', function(evt) {

});


number.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('btn-plus')) {
    ++evt.target.parentElement.querySelector('input').value;
  } else if (evt.target.classList.contains('btn-minus')) {
    --evt.target.parentElement.querySelector('input').value;
  }
})
