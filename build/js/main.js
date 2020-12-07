'use strict';

var accList = document.querySelectorAll('.acc');

var navigation = document.querySelector('.navigation');
var toggle = document.querySelector('#toggle');
var header = document.querySelector('.page-header');

var filters = document.querySelector('.filters');
var filtersToggle = document.querySelector('.main-catalog__toggle');
//Главное меню

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

//Аккордеон

for (var i = 0; i < accList.length; i++) {
  var acc = accList[i];
  acc.classList.remove('nojs');
  acc.addEventListener('click', function (evt) {
    if (evt.target.checked) {
      for (var j = 0; j < accList.length; j++) {
        accList[j].checked = accList[j] === evt.target ? true : false;
      }
    }
  });
}

//Фильтры

filters.classList.remove('filters--nojs');

filtersToggle.addEventListener('click', function() {
  filters.classList.toggle('filters--opened');
  filtersToggle.classList.toggle('main-catalog__toggle--none');
});
