'use strict';

// Скидка (получить чек-лист за скидку)
const getCheckList = () => {

   const checkBtn = document.querySelectorAll('.check-btn'),
      popupCheck = document.querySelector('.popup-check');

         
      checkBtn.forEach((elem) => {
         elem.addEventListener('click', function(event){
            event.preventDefault();
         });

         elem.addEventListener('click', () => {
            popupCheck.style.display = 'block';
         });
      });

      popupCheck.addEventListener('click', (event) => {
         let target = event.target;
 
         if(target.classList.contains('popup-close')){
            popupCheck.style.display = 'none';
         } else {
            target = target.closest('.popup-content');
 
            if(!target){
               popupCheck.style.display = 'none';
            }
         }
      });
};

export default getCheckList;