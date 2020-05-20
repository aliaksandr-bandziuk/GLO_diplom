"use strict";

const formValidation = () => {
  const phoneUser = document.querySelectorAll(".phone-user"),
    nameUser = document.getElementsByName("user_name"),
    userQuest = document.getElementsByName("user_quest");

  phoneUser.forEach((item) => {
    item.addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/[^0-9+]/g, "");
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
