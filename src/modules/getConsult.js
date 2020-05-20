"use strict";

// Отправка формы - заказать консультацию
// Отправка формы - получить расчет и скидку
const getConsult = () => {
  const errorMessage = "Не получилось. Давайте еще раз...";
  const loadMessage = "Идет отправка ваших данных...";
  const successMessage = "Ваши данные отправлены!";

  const forms = document.querySelectorAll("form");
  const formMessage = document.querySelector(".director-form");

  
  const myonoffswitch = document.getElementById("myonoffswitch");
  const myonoffswitchTwo = document.getElementById("myonoffswitch-two");
  const calcResult = document.getElementById("calc-result");
  const collapseTwo = document.getElementById("collapseTwo");
  const collapseFour = document.getElementById("collapseFour");
  const selectsOne = collapseTwo.querySelectorAll("select");

  const statusMessage = document.createElement("div");

  statusMessage.style.cssText = "font-size: 2rem;";

  const postData = (body) =>
    fetch("./server.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);
      statusMessage.innerHTML = loadMessage;
      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      //   форма с вопросом
      if (form.closest(".popup-consultation")) {
        body["message"] = formMessage.querySelector("input").value;
      }

      //   калькулятор
      if (form.closest(".popup-call")) {
        // пишем камеры
        if (myonoffswitch.checked === true) {
          body["камер"] = "одна";
        } else {
          body["камер"] = "две";
        }

        // пишем колодцы
        if (myonoffswitchTwo.checked === true) {
          body["колодец"] = "есть";
        } else {
          body["колодец"] = "нет";
        }

        // пишем расстояние
        body["расстояние до дома"] =
          collapseFour.querySelector("input").value + " метров";

        // пишем колодцы

        if (myonoffswitch.checked === false) {
          body["ВТОРОЙ КОЛОДЕЦ - Диаметр"] = selectsOne[2].value;
          body["ВТОРОЙ КОЛОДЕЦ - Количество колец"] = selectsOne[3].value;
        }
        body["ПЕРВЫЙ КОЛОДЕЦ - Диаметр"] = selectsOne[0].value;
        body["ПЕРВЫЙ КОЛОДЕЦ - Количество колец"] = selectsOne[1].value;

        // пишем цену
        body["Итоговая цена"] = calcResult.value;
      }

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Status network not 200");
          }
          statusMessage.textContent = successMessage;
          setTimeout(() => (statusMessage.textContent = ""), 5000);
          form.reset();
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });
  });
};

export default getConsult;
