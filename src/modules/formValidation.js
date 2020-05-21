"use strict";

const formValidation = () => {
  const phoneUser = document.querySelectorAll(".phone-user"),
    nameUser = document.getElementsByName("user_name"),
    userQuest = document.getElementsByName("user_quest");
  // mainFormBtn = document.querySelector(".main-form-btn");

  phoneUser.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^\d\+]/g, "");
    });
  });

  // phoneUser.forEach((item) => {
  //   item.addEventListener("keyup", (event) => {
  //     console.log("asda");

  //     if (event.target.value.length > 10) {
  //       mainFormBtn.disabled = "false";
  //     } else {
  //       mainFormBtn.disabled = "true";
  //     }
  //   });
  // });

  nameUser.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^А-Я|а-я]/g, "");
    });
  });

  userQuest.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\s[^А-Я|а-я]/g, "");
    });
  });
};

export default formValidation;
