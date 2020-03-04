var modal = document.querySelector('.modal-search');
var buttonOpen = document.querySelector('.btn-search');
var form = modal.querySelector('.search-form');
var datein = form.querySelector('#datein');
var number = form.querySelector('.number');

var input = form.querySelectorAll('.input');
var calendar = form.querySelectorAll('.btn-calend');

datein.focus();
buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!modal.classList.contains('visually-hidden')) {
    datein.focus();
    modal.classList.add('visually-hidden');
    modal.classList.remove('floatUp');
  } else {
    modal.classList.remove('visually-hidden');
    datein.focus();
    modal.classList.add('floatUp');
  }

});

form.addEventListener('submit', function (evt) {
  if (!input.value) {
    evt.preventDefault();
  } else {
    form.submit();
  }
});

number.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('btn-plus')) {
    ++evt.target.parentElement.querySelector('input').value;
  } else if (evt.target.classList.contains('btn-minus')) {
    --evt.target.parentElement.querySelector('input').value;
  }
})
