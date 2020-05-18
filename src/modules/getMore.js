'use strict';

// Кнопка Больше
const getMore = () => {

   const sentenceRow = document.querySelector('.sentence .row'),
      addSentenceBtn = document.querySelector('.add-sentence-btn');
      
      addSentenceBtn.addEventListener('click', () => {
         let a = !0,
            b = !1,
            c = void 0;
         try {
            for (let i, d = sentenceRow.children[Symbol.iterator](); !(a = (i = d.next()).done); a = !0) {
               let m = i.value;
               m.classList.contains('visible-sm-block') 
               && m.classList.remove('visible-sm-block'), m.classList.contains('hidden') 
               && m.classList.remove('hidden'), addSentenceBtn.style.display = 'none';
            }
         } catch (sentenceRow) {
            b = !0, c = sentenceRow;
         }
      });


      //альтернативный вариант
      // const addSentenceBtn = document.querySelector('.add-sentence-btn'),
      //    sentence = document.querySelector('.sentence'),
      //    itemBlocks = sentence.querySelectorAll('.col-xs-12');
         
      //    addSentenceBtn.addEventListener('click', (event) => {
      //       itemBlocks.forEach((elem) => {
      //       elem.classList.remove('visible-sm-block');
      //       elem.classList.remove('hidden');
      //    });
      //    addSentenceBtn.style.display = 'none';
      //    });

};

export default getMore;