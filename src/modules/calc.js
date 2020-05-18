'use strict';

import calcData from './calcData';

// Калькулятор-аккордеон
const calc = () => {
   
   const accordionCalc = document.getElementById('accordion'),    
      panelCollapse = accordionCalc.querySelectorAll('.panel-collapse'),  
      panelTwo = document.getElementById('collapseTwo'),  
      panelHeading = accordionCalc.querySelectorAll('.panel-heading'),    
      panelBodyBtn = accordionCalc.querySelectorAll('.construct-btn'),  
      wellDiameterOne = document.getElementById('one-well-diameter'),    
      wellRingsOne = document.getElementById('one-well-rings'),   
      wellTextTwo = document.getElementById('two-well'),  
      wellDiameterTwo = document.getElementById('two-well-diameter'),  
      wellRingsTwo = document.getElementById('two-well-rings'),   
      wellDiameterOneSelect = wellDiameterOne.querySelector('.expand'),
      wellRingsOneSelect = wellRingsOne.querySelector('.expand'),  
      wellRingsTwoSelect = wellRingsTwo.querySelector('.expand'),
      wellDiameterTwoSelect = wellDiameterTwo.querySelector('.expand'),  
      calcResult = document.getElementById('calc-result'), 
  
   inner = document.querySelectorAll('.onoffswitch-checkbox'); 
  
   const distance = document.getElementById('distance');
    
   let checkbox = document.querySelectorAll('.onoffswitch-checkbox');
  
  
   function toggleAcc (index, next){
      if (next){
         if (next < panelHeading.length){
         panelCollapse[index].classList.remove('in');
         panelCollapse[next].classList.add('in');
         }
      }
      else {
         if (panelCollapse[index].classList.contains('in')){
         panelCollapse[index].classList.remove('in');
         }
         else {
         panelCollapse.forEach((elem) => {
            elem.classList.remove('in');
         });
         panelCollapse[index].classList.add('in');
         }
      } 
      }
  
   for (let i = 0; i < panelHeading.length; i++) {
      panelHeading[i].addEventListener('click', (event) => {
         event.preventDefault();
  
         toggleAcc(i);
      });
      panelBodyBtn[i].addEventListener('click', (event) => {
         event.preventDefault();
         toggleAcc(i, i+1);
      });
   } 
    
   const showWells = (cameras) => {
      if (cameras === 1) {
        wellTextTwo.style.display = 'none';
        wellDiameterTwo.style.display = 'none';
        wellRingsTwo.style.display = 'none';
        return;
      }
      else {
        wellTextTwo.style.display = '';
        wellDiameterTwo.style.display = '';
        wellRingsTwo.style.display = '';
        return;
      }
   };
    
   const sumDiameter = (cameras, floors) => {
  
      let diameterFactorOne = 0, diameterFactorTwo = 0,
            ringsFactorOne = 0, ringsFactorTwo = 0;
      const diameterOneValue = +wellDiameterOneSelect.value;
      const ringsOneValue = +wellRingsOneSelect.value;
      let price = 0;
  
      let sumDiameter = 0;
      let sumRings = 0;
      let floorsValue = 0;
  
      diameterFactorOne = diameterOneValue === 1.4 ? 0 : 0.2;
  
      if (ringsOneValue === 1) {
        ringsFactorOne = 0;
      }
  
      else if (ringsOneValue === 2){
        ringsFactorOne = 0.3;
      }
      else {
         ringsFactorOne = 0.5;
      }
  
      if (cameras === 2) {
        price = 15000;
  
        const diameterTwoValue = +wellDiameterTwoSelect.value;
        const ringsTwoValue = +wellRingsTwoSelect.value;            
        
        diameterFactorTwo = diameterTwoValue === 1.4 ? 0 : 0.2;  
        
        if (ringsTwoValue === 1) {
          ringsFactorTwo = 0;
        }
        else if (ringsTwoValue === 2){
          ringsFactorTwo = 0.3;
        }
        else{
         ringsFactorTwo = 0.5;
        }
  
        sumDiameter = (price * diameterFactorOne) + (price * diameterFactorTwo);
        sumRings = (price * ringsFactorOne) + (price * ringsFactorTwo);        
  
        if (floors === 1) {
          floorsValue = 2000;
        }
  
        calcData.diameterOneValue = diameterOneValue;
        calcData.ringsOneValue = ringsOneValue;
        calcData.diameterTwoValue = diameterTwoValue;
        calcData.ringsTwoValue = ringsTwoValue;
      }
      else if (cameras === 1){
        price = 10000;
  
        sumDiameter = price * diameterFactorOne;
        sumRings = price * ringsFactorOne;
  
            if (floors === 1) {
              floorsValue = 1000;
            }
  
        calcData.diameterOneValue = diameterOneValue; 
        calcData.ringsOneValue = ringsOneValue;
        calcData.diameterTwoValue = null;
        calcData.ringsTwoValue = null;
      }
  
      calcData.sum = price + sumDiameter + sumRings + floorsValue;
      calcResult.value = `${calcData.sum} рублей`;
   };
  
  
   panelTwo.addEventListener('change', event => {
        
      const target = event.target;
        if (target.matches('select')) {
          sumDiameter(calcData.cameras, calcData.floors);
      }
   });  
  
   const getSepticType = () => {
      calcData.cameras = 1;
   };
   const getFloorsType = () => {
      calcData.floors = 0;
   };
  
   const getDistance = () => {
      distance.addEventListener('input', event => {
      distance.value = distance.value.replace(/[^\d\+]/g, '');
      calcData.distance = distance.value;
      });
   };
  
   inner.forEach((item) =>{
      item.addEventListener('change', (event) =>{
         if (event.target.closest('.first-checkbox')){
  
         if (event.target.checked) {
               calcData.cameras = 1;
         } else calcData.cameras = 2;
         showWells(calcData.cameras);
         }
         if (event.target.closest('.second-checkbox')){
         if (event.target.checked) {
            calcData.floors = 1;
         }
         else calcData.floors = 0;
         showWells(calcData.cameras);
         }
         sumDiameter(calcData.cameras, calcData.floors);
      });
   });
  
   getSepticType();
   getFloorsType();
   showWells(calcData.cameras);
   sumDiameter(calcData.cameras, calcData.floors);
   getDistance();

};

export default calc;