var navigation = document.querySelector('.navigation');
var toggle = document.querySelector('#toggle');
var header = document.querySelector('.page-header');

navigation.classList.remove('navigation--opened');
header.classList.remove('page-header--colored');

toggle.addEventListener('change', function() {
  if (this.checked) {
     navigation.classList.add('navigation--opened');
     header.classList.add('page-header--colored');
  } else {
    navigation.classList.remove('navigation--opened');
    header.classList.remove('page-header--colored');
  }
});
