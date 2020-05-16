'use strict';

// Аккордеон
const accordion = () => {

   const accordionTwo = document.querySelector('#accordion-two'),
      panelHeadings = accordionTwo.querySelectorAll('.panel-heading'),
      collapses = accordionTwo.querySelectorAll('.collapse');
        
         panelHeadings.forEach((panelHeading, indexPanelHeading) => {
            // panelHeading.style.cursor = "pointer";

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
};

export default accordion;