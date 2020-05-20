'use strict';

const calc = (price = 10000) => {
    const accordion = document.querySelector('#accordion');
    const collapse = accordion.querySelectorAll('.panel-collapse');
    const collapsedBtn = accordion.querySelectorAll('.panel-heading');
    const constructBtn = accordion.querySelectorAll('.construct-btn');

    const totalValue = document.querySelector('#calc-result');
    const titletext = document.querySelectorAll('.title-text')[1];
    const selectField1 = document.querySelectorAll('.expand')[0];
    const selectField2 = document.querySelectorAll('.expand')[1];
    
    const inputDist = document.querySelector('.panel-body > input');
    const selectBox3 = document.querySelector('#selectBox3');
    const selectBox4 = document.querySelector('#selectBox4');
    const selectField3 = document.querySelectorAll('.expand')[2];
    const selectField4 = document.querySelectorAll('.expand')[3];

    const calcBlock = document.querySelector('.panel-group');
    const checkBoxOne = document.querySelector('#myonoffswitch');
    const checkBoxTwo = document.querySelector('#myonoffswitch-two');
 
    const onoffswitchLabelOne = document.querySelector('.onoffswitch-inner');
    const onoffswitchLabelTwo = document.querySelector('#innerTwo');
    const calcBtn = document.querySelector('#calcBtn');
    const popupCall = document.querySelector('.popup-call');
    const formDiscount = document.querySelector('#formDiscount');
    const inputName = document.querySelector('#name_1');
    let total = 1;
    let typeValue1, typeValue2, typeValue3, typeValue4;

     //переменные с сообщениями,которые мы будем передавать пользователю
     const errorMessage = 'Что-то пошло не так...',
     loadMessage = 'Загрузка...',
     successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

     const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

    //очистка input-ов
    const clearInput = () => {
        document.querySelectorAll('input').forEach((item) => {
            item.value = ''; 
        });
    };
//Валидация вводимых данных
    inputName.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-я ]/gi, '');
        });  

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
            if(target.matches('select') || target.matches('input') || target.matches('.onoffswitch-inner')) {
            countSum();
            }
    });
     
    onoffswitchLabelOne.addEventListener('click', () => {
        if(checkBoxOne.checked === true) {
            checkBoxOne.removeAttribute('checked');
            checkBoxOne.setAttribute("unchecked", 'unchecked');
            titletext.style.display = 'block';
            selectBox3.style.display = 'block';
            selectBox4.style.display = 'block';
        } else {
            checkBoxOne.removeAttribute('unchecked');
             checkBoxOne.setAttribute('checked', 'checked');
             titletext.style.display = 'none';
             selectBox3.style.display = 'none';
             selectBox4.style.display = 'none';
        }
    });

    onoffswitchLabelTwo.addEventListener('click', () => {
        if(checkBoxTwo.checked === true) {
            checkBoxTwo.removeAttribute('checked');
            checkBoxTwo.setAttribute("unchecked", 'unchecked');
        } else {
            checkBoxTwo.removeAttribute('unchecked');
             checkBoxTwo.setAttribute('checked', 'checked');
        }
    });

    const openTab = () => {
        
        const toggleCollapse = (index) => {
            for(let i = 0; i < collapse.length; i++) {
                if(index === i) {
                    collapse[i].classList.add('in');
                }else {
                    collapse[i].classList.remove('in');
                }
                countSum();
            }
        };

//Добалвляем класс collapse-in элементу,на который нажали
        accordion.addEventListener('click', (event) => {
                event.preventDefault();
                let target = event.target;
          
                while(target !== accordion) {
                if(target.matches('.panel-heading')) {
                    collapsedBtn.forEach((item, i) => {
                        if(item === target) {
                            toggleCollapse(i);
                            }
                    });
                        return;
                    } else if(target.matches('.construct-btn')){
                        constructBtn.forEach((item, i) => {
                            if(item === target){
                                toggleCollapse(i + 1);
                            }
                        });
                    return;
                    }
                    target = target.parentNode;
                }         
        });       
    };

    openTab();

    const countSum = () => {
        
        typeValue1 = selectField1.options[selectField1.selectedIndex].value;
            typeValue2 = selectField2.options[selectField2.selectedIndex].value;
            typeValue3 = selectField3.options[selectField3.selectedIndex].value;
            typeValue4 = selectField4.options[selectField4.selectedIndex].value;

//однокамерный септик   
        if(checkBoxOne.hasAttribute('checked')) {
            total = price * typeValue1 * typeValue2;

            if(checkBoxTwo.hasAttribute('checked')) {
                total += 1000; 
            }
//двухкамерный септик
        } else {
            total = (price + 5000) * typeValue1 * typeValue2 * typeValue3 * typeValue4;

            if(checkBoxTwo.hasAttribute('checked')) {
                total += 2000; 
            }   
        }
//вывод на страницу
        totalValue.placeholder = total;
    };

    calcBtn.addEventListener('click', (event) => {
        event.preventDefault();
        popupCall.style.display = 'block'; 
    });
       
        formDiscount.addEventListener('submit', (event) => {
            //отменяем стандартное поведение,чтобы страница не перезагружалась после кнопки submit
                event.preventDefault();
                formDiscount.appendChild(statusMessage);
                //когда состояние readyState поменялось с 0 появилось сообщение Загрузка...
                statusMessage.textContent = loadMessage;
                            
                const formData = new FormData(formDiscount);
                //Если серверу надо передать в JSON-формате,извлекаем данные из formData,переберем данные с цикле for of
                let body = {};
                body.total_summ = total;
                body.value1 = typeValue1;
                body.value2 = typeValue2;
                body.value3 = typeValue3;
                body.value4 = typeValue4;
                body.input_distant = inputDist.value;
                //с помощью метода .entries вытащим значения из formData.Получаем массив
                for(let val of formData.entries()) {
                //Добавляем полученные данные в body. Значения с ключом.Получаем объект
                    body[val[0]] = val[1];                   
                }
                 //в postData передаем body, callback-фун-ию(outputData-оповещение пользователя) 
                postData(body, 
                        () => { 
                        statusMessage.textContent = successMessage;
                        setTimeout(() => {statusMessage.textContent = ''}, 5000);
                        }, 
                        (error) => {
                        statusMessage.textContent = errorMessage;
                        setTimeout(() => {statusMessage.textContent = ''}, 2000);
                        console.error(error);
                        }); 
                        clearInput();             
        });

        //функция обращения к серверу
    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
             if(request.readyState !== 4) {
                 return;
            }
            if(request.status === 200) {
                outputData();
            } else {
                errorData(request.status);
            }
         });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
    
        request.send(JSON.stringify(body));
    };
};

export default calc;