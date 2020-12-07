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

if (filters) {
  filters.classList.remove('filters--nojs');

  filtersToggle.addEventListener('click', function() {
    filters.classList.toggle('filters--opened');
    filtersToggle.classList.toggle('main-catalog__toggle--none');
  });
}


//модальное окно

var ESC_KEYCODE = 27
var loginElem = document.querySelector('.login');
var openBtn = document.querySelector('.page-header__login');
var openNavDtn = document.querySelector('.navigation__login');

var overlayElem = document.querySelector('.login__overlay');
var closeBtn = document.querySelector('.login__close-btn');


function onEscKeyDown(e) {
  if(e.keyCode === ESC_KEYCODE) {
    loginElem.classList.add('login--closed');
    document.body.classList.remove('stop-scrolling');
  }
}

function closelogin() {
  if (!loginElem.classList.contains('login--closed')) {
    loginElem.classList.add('login--closed');
    document.removeEventListener('keydown', onEscKeyDown)
    document.body.classList.remove('stop-scrolling');
  }
}

try {
  localStorage.getItem('userEmail');
} catch (err) {
  isStorageSupport = false;
}

if (openBtn || openNavDtn) {

  var userEmail = loginElem.querySelector('[id=login-email]');
  openNavDtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.body.classList.add('stop-scrolling');
    if (loginElem.classList.contains('login--closed')) {
      loginElem.classList.remove('login--closed');
      document.addEventListener('keydown', onEscKeyDown)
    }
    userEmail.focus();
  });

  openBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.body.classList.add('stop-scrolling');
    if (loginElem.classList.contains('login--closed')) {
      loginElem.classList.remove('login--closed');
      document.addEventListener('keydown', onEscKeyDown)
    }
    userEmail.focus();
  });

  loginElem.addEventListener('submit', function (evt) {
    if (!userEmail.value === '') {
      evt.preventDefault();
      loginElem.classList.remove('login-error');
      loginElem.offsetWidth = loginElem.offsetWidth;
      loginElem.classList.add('login-error');
      if (!userEmail.value) {
        userEmail.focus();
      }
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userEmail', userEmail.value);
      }
    }
  });
}

closeBtn.addEventListener('click', closelogin);
overlayElem.addEventListener('click', closelogin);
