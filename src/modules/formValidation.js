'use strict';

const formValidation = () => {
   const phoneUser = document.querySelectorAll('.phone-user'),
      nameUser = document.getElementById('name_2');

      phoneUser.forEach((item) => {
      item.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^0-9+]/g, '');
      });
     });

      nameUser.addEventListener('input', (event) => {
         event.target.value = event.target.value.replace(/[^А-Я|а-я]/g, '');
      });
 };

 export default formValidation;