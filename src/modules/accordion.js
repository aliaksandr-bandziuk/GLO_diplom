'use strict';

// Аккордеон
const accordion = () => {

   const accordionTwo = document.querySelector('#accordion-two'),
      panelHeadings = accordionTwo.querySelectorAll('.panel-heading'),
      collapses = accordionTwo.querySelectorAll('.collapse');
        
         panelHeadings.forEach((panelHeading, indexPanelHeading) => {
            panelHeading.style.cursor = "pointer";

            panelHeading.addEventListener('click', (event) => {
               event.preventDefault();

               collapses.forEach((collapse, indexCollapse) => {
                  if(indexPanelHeading === indexCollapse){
                     collapse.style.display = 'block';
                  } else {
                     collapse.style.display = 'none';
                  } 
               });
            });
         });

   // еще один вариант
   // const accordionTwo = document.getElementById('accordion-two'),
   //    panel = accordionTwo.querySelectorAll('.panel'),
   //    panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

   //    for (let i = 0; i < panel.length; i++) {
   //    panel[i].addEventListener('click', function(event) {
   
   //       for (let j = 0; j < panelCollapse.length; j++) {
   //       event.preventDefault();
   //       panelCollapse[j].classList.remove('in');
   //       }
   //       panelCollapse[i].classList.toggle('in');  
   //    });
   //    }

};

export default accordion;