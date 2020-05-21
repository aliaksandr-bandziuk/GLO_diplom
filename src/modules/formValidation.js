"use strict";

const formValidation = () => {
  const phoneUser = document.querySelectorAll(".phone-user"),
    nameUser = document.getElementsByName("user_name"),
    userQuest = document.getElementsByName("user_quest");

  phoneUser.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^\d\+].{11,}/g, ''); // /[^0-9+]{11,13}/g, ""
    });
  });

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
