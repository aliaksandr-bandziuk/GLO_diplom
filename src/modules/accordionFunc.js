"use strict";

// Аккордеон
const accordionFunc = () => {
 const accordionTwo = document.querySelector("#accordion-two"),
  panelHeadings = accordionTwo.querySelectorAll(".panel-heading"),
  collapses = accordionTwo.querySelectorAll(".collapse"),
  // добавил четыре переменные
  accordion = document.querySelector("#accordion"),
  panelHeadingsOne = accordion.querySelectorAll(".panel-heading"),
  collapsesOne = accordion.querySelectorAll(".collapse"),
  constructBtn = accordion.querySelectorAll(".construct-btn");

 panelHeadingsOne.forEach((itemPanel, indexPanel) => {
  itemPanel.addEventListener("click", (event) => {
   event.preventDefault();

   collapsesOne.forEach((item) => {
    item.classList.remove("in");
   });
   collapsesOne[indexPanel].classList.add("in");
  });
 });

 constructBtn.forEach((itemBtn, indexBtn) => {
  itemBtn.addEventListener("click", (event) => {
   event.preventDefault();

   collapsesOne.forEach((item) => {
    item.classList.remove("in");
   });
   collapsesOne[indexBtn + 1].classList.add("in");
  });
 });

 panelHeadings.forEach((itemPanel, indexPanel) => {
  itemPanel.addEventListener("click", (event) => {
   event.preventDefault();

   collapses.forEach((item) => {
    item.classList.remove("in");
   });
   collapses[indexPanel].classList.add("in");
  });
 });
};
export default accordionFunc;
