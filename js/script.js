ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.939931, 30.329],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'ул. Большая Конюшенная, 19/8, Санкт-Петербург',
      balloonContent: '(с 10 до 20 ежедневно)'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/pin.svg',
      // Размеры метки.
      iconImageSize: [80, 140],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-40, -140]
    })

  myMap.geoObjects
    .add(myPlacemark)
});


const link = document.querySelector('.btn-open-form');
const popup = document.querySelector('.modal-feedback');
const popupBackground = document.querySelector('.feedback-background');
const close = popup.querySelector('.modal-close-button');
const feedbackUserName = popup.querySelector('.input-name-feedback');
const feedbackUserEmail = popup.querySelector('.input-email-feedback');
const feedbackComment = popup.querySelector('.comment');
const feedbackForm = popup.querySelector('.feedback-form');

const siteWrapper = document.querySelector('.site-wrapper');
const firstButton = document.querySelector('.first-button');
const secondButton = document.querySelector('.second-button');
const thirdButton = document.querySelector('.third-button');


let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-feedback-show');
  popupBackground.classList.add('feedback-background-show');

  if (storage) {
    feedbackUserName.value = storage;
    feedbackUserEmail.focus();
  } else {
    feedbackUserName.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-feedback-show');
  popupBackground.classList.remove('feedback-background-show');
  popup.classList.remove('modal-error');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackUserName.value || !feedbackUserEmail.value || !feedbackComment.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    localStorage.setItem("login", feedbackUserName.value);
    if (isStorageSupport) {
      localStorage.setItem('login', feedbackUserName.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-feedback-show')) {
      popup.classList.remove('modal-feedback-show');
      popupBackground.classList.remove('feedback-background-show');
      popup.classList.remove('modal-error');
    }
  }
});

firstButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  firstButton.classList.add('active-button');
  secondButton.classList.remove('active-button');
  thirdButton.classList.remove('active-button');
  siteWrapper.classList.add('site-wrapper-1');
  siteWrapper.classList.remove('site-wrapper-2');
  siteWrapper.classList.remove('site-wrapper-3')
});

secondButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  secondButton.classList.add('active-button');
  firstButton.classList.remove('active-button');
  thirdButton.classList.remove('active-button');
  siteWrapper.classList.remove('site-wrapper-1');
  siteWrapper.classList.remove('site-wrapper-3');
  siteWrapper.classList.add('site-wrapper-2');
});

thirdButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  thirdButton.classList.add('active-button');
  firstButton.classList.remove('active-button');
  secondButton.classList.remove('active-button');
  siteWrapper.classList.add('site-wrapper-3');
  siteWrapper.classList.remove('site-wrapper-1');
  siteWrapper.classList.remove('site-wrapper-2');
})
