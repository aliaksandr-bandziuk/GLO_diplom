'use strict';

// Модальное окно 1
const callback = () => {

   const callBtn = document.querySelectorAll('.call-btn'),
      popupCall = document.querySelector('.popup-call');

      let count = 0,
         animation,
         popupAnimation = () => {
            animation = requestAnimationFrame(popupAnimation);
            count++;
            if(parseFloat(popupCall.firstElementChild.style.left) <   +parseFloat('38%')) {
               popupCall.firstElementChild.style.left = count*3 + '%';
         } else {
               cancelAnimationFrame(animation);
         }
         };

      callBtn.forEach((elem) => {
         event.preventDefault();
         elem.addEventListener('click', () => {
            popupCall.style.display = 'block';
            if(screen.width > 768) {
               popupCall.firstElementChild.style.left = 0%;
               animation = requestAnimationFrame(popupAnimation);
            }
         });
      });

};

export default callback;