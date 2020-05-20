'use strict';

// Отправка формы - заказать консультацию
// Отправка формы - получить расчет и скидку
const getConsult = () => {
   
   const errorMessage = 'Не получилось. Давайте еще раз...',
        loadMessage = 'Идет отправка ваших данных...',
        successMessage = 'Ваши данные отправлены!';

    const forms = document.querySelectorAll('form'),
        formMessage = document.querySelector('.director-form'),
        // добавил
        // calcMessage = document.querySelector('.panel-collapse'),
        // добавил
        // calcInpuetMessage = calcMessage.querySelector('input'),
        inputMessage = formMessage.querySelector('input');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;
            const formData = new FormData(form);
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            if(form.classList.contains('capture-form')){
                body['message'] = inputMessage.value;
                //добавил
                // body['message'] = calcInpuetMessage.value;
            }

            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    setTimeout(() => statusMessage.textContent = '', 5000);
                    form.reset();
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        });
    });

};

// export default getConsult;