var modal = document.querySelector('.modal-search');
var buttonOpen = document.querySelector('.btn-search');
var form = modal.querySelector('.search-form');
var datein = form.querySelector('#datein');
var dateout = form.querySelector('#dateout');
var number = form.querySelector('.number');

buttonOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (modal.classList.contains('floatDown')) {
    modal.classList.remove('floatDown');
    modal.classList.add('floatUp')
  } else {
    modal.classList.add('floatDown');
    modal.classList.remove('floatUp');
  }
});

form.addEventListener('submit', function (e) {
  if (!datein.value || !dateout.value) {
    e.preventDefault();
    modal.classList.remove('error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('error');
  } else {
    form.submit();
  }
});

number.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('btn-plus') || evt.target.classList.contains('plus')) {
    ++evt.target.parentElement.querySelector('input').value;
  } else if (evt.target.classList.contains('btn-minus') || evt.target.classList.contains('minus')) {
    --evt.target.parentElement.querySelector('input').value;
  }
});

