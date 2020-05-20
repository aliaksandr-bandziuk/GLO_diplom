'use strict';

const calc = () => {
   const onoffCheckbox = document.querySelector('.onoffswitch-checkbox'),
   formControl = document.querySelectorAll('.form-control'),
   collapseTwo = document.getElementById('collapseTwo'),
   insideCollapseTwo = collapseTwo.children[0].children,
   accordion = document.querySelector('#accordion'),
   calcResult = document.querySelector('#calc-result'),
   onoffSwitchTwo = document.querySelector('#myonoffswitch-two'),
   inputDistance = document.querySelector('#collapseFour').children[0].children[1],
   buttonDistance = document.querySelector('#collapseFour').children[0].children[2];
   let maintotal = 0;

   accordion.addEventListener('click', () => {
       if (onoffCheckbox.checked){
           insideCollapseTwo[5].classList.add('hidden');
           insideCollapseTwo[4].classList.add('hidden');
           insideCollapseTwo[3].classList.add('hidden');
           
           let total = 10000;
           maintotal = total;
           if (insideCollapseTwo[1].children[1].value === '2 метра'){
               maintotal = total + (total * 0.2);
           }  
           if (insideCollapseTwo[2].children[1].value === '2 штуки'){
               maintotal += (total * 0.3);
           }   else if (insideCollapseTwo[2].children[1].value === '3 штуки'){
               maintotal += (total * 0.5);
           }
           if (onoffSwitchTwo.checked){
               maintotal += 1000;
           }
       }   else{
           insideCollapseTwo[5].classList.remove('hidden');
           insideCollapseTwo[4].classList.remove('hidden');
           insideCollapseTwo[3].classList.remove('hidden');
           let total = 15000;
           maintotal = total;
           if (insideCollapseTwo[1].children[1].value === '2 метра'){
               maintotal += (total * 0.2);
           }  
           if (insideCollapseTwo[2].children[1].value === '2 штуки'){
               maintotal += (total * 0.3);
           }   else if (insideCollapseTwo[2].children[1].value === '3 штуки'){
               maintotal += (total * 0.5);
           }
           if (insideCollapseTwo[4].children[1].value === '2 метра'){
               maintotal += (total * 0.2);
           }  
           if (insideCollapseTwo[5].children[1].value === '2 штуки'){
               maintotal += (total * 0.3);
           }   else if (insideCollapseTwo[5].children[1].value === '3 штуки'){
               maintotal += (total * 0.5);
           }
           if (onoffSwitchTwo.checked){
               maintotal += 2000;
           }

       }
       calcResult.value = maintotal;
       if (inputDistance.value === ''){
           buttonDistance.disabled = true;
       }
       inputDistance.addEventListener('input', () => {
           inputDistance.value = inputDistance.value.replace (/[^0-9]/, '');
           if (inputDistance.value === ''){
               buttonDistance.disabled = true;
           }   else{
               buttonDistance.disabled = false;
           }
       });
       
   });  
};

export default calc;