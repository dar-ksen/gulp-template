'use strict';

(function () {
  var petsList = document.querySelector('.pets__list');
  var petsTabs = document.querySelectorAll('.pets__tab');
  var petsTabContents = document.querySelectorAll('.pets__tab-content');


  if (petsList) {
    petsList.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (evt.target.classList.contains('pets__tab')) {

        for (var i = 0; i < petsTabContents.length; i++) {
          petsTabContents[i].classList.remove('show');
          petsTabs[i].classList.remove('pets__tab--active');
        }


        var idTabContent = evt.target.href.split('#')[1];
        var petsTabContentShow = document.querySelector('#' + idTabContent);

        petsTabContentShow.classList.add('show');
        evt.target.classList.add('pets__tab--active');
      }
    });
  }
})();
