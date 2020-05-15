'use strict';

// Модальное окно 1
const callback = () => {

   const callBtn = document.querySelectorAll('.call-btn'),
      popupCall = document.querySelector('.popup-call');

         
      callBtn.forEach((elem) => {
         elem.addEventListener('click', function(event){
            event.preventDefault();
         });

         elem.addEventListener('click', () => {
            popupCall.style.display = 'block';
         });
      });

      popupCall.addEventListener('click', (event) => {
         let target = event.target;
 
         if(target.classList.contains('popup-close')){
            popupCall.style.display = 'none';
         } else {
            target = target.closest('.popup-content');
 
            if(!target){
               popupCall.style.display = 'none';
            }
         }
      });
};

export default callback;