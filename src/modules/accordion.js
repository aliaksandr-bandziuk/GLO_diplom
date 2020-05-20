'use strict';

// Аккордеон
const accordion = () => {

   const accordionTwo = document.querySelector('#accordion-two'),
      panelHeadings = accordionTwo.querySelectorAll('.panel-heading'),
      collapses = accordionTwo.querySelectorAll('.collapse'),
      // добавил три переменные
      accordion = document.querySelector('#accordion'),
      panelHeadingsOne = accordion.querySelectorAll('.panel-heading'),
      collapsesOne = accordion.querySelectorAll('.collapse');
        
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
         //добавил
         panelHeadingsOne.forEach((panelHeading, indexPanelHeading) => {
            panelHeading.style.cursor = "pointer";

            panelHeading.addEventListener('click', (event) => {
                  event.preventDefault();
            });

               collapsesOne.forEach((collapse, indexCollapse) => {
                  if(indexPanelHeading === indexCollapse){
                  collapse.style.display = 'block';
                  } else {
                  collapse.style.display = 'none';
                  } 
               });
         });
            
};

export default accordion;