'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from "element-closest";
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";

(function (arr) {
   arr.forEach(function (item) {
     if (item.hasOwnProperty('append')) {
       return;
     }
     Object.defineProperty(item, 'append', {
       configurable: true,
       enumerable: true,
       writable: true,
       value: function append() {
         var argArr = Array.prototype.slice.call(arguments),
           docFrag = document.createDocumentFragment();
         
         argArr.forEach(function (argItem) {
           var isNode = argItem instanceof Node;
           docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
         });
         
         this.appendChild(docFrag);
       }
     });
   });
 })([Element.prototype, Document.prototype, DocumentFragment.prototype]);


import callback from './modules/callback';
import getConsult from './modules/getConsult';
import getDiscount from './modules/getDiscount';
import accordion from './modules/accordion';
import getCheckList from './modules/getCheckList';
import calc from './modules/calc';
import getMore from './modules/getMore';
import sendForm from './modules/sendForm';
import formValidation from './modules/formValidation';

// Модальное окно 1
callback();
// Отправка формы - заказать консультацию
getConsult();
// Модальное окно 2 — Заказать со скидкой
getDiscount();
// Аккордеон
accordion();
// Скидка (получить чек-лист за скидку)
getCheckList();
// Калькулятор-аккордеон
calc();
// Кнопка Больше
getMore();
// Модальное окно 3 + отправка формы
sendForm();
// Валидация форм
formValidation();