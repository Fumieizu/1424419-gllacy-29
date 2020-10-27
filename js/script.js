ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938578924881895,30.323146670992532],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
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
