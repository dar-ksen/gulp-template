'use strict';

(function () {
  var questions = document.querySelectorAll('.faq__question');

  if (questions) {
    for (var i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', function (evt) {
        for (var j = 0; j < questions.length; j++) {
          if (questions[j] !== evt.target) {
            questions[j].nextElementSibling.classList.remove('faq__answer--show');
            questions[j].classList.remove('faq__active-btn');
          }
        }

        evt.target.classList.toggle('faq__active-btn');
        evt.target.nextElementSibling.classList.toggle('faq__answer--show');
      });
    }
  }
})();
