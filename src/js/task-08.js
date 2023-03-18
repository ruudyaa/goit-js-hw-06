"use strict";

const form = document.querySelector(".login-form");
const formData = {};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    formData.email = formElements.email.value;
    formData.password = formElements.password.value;

    console.log(formData);
  }
  event.currentTarget.reset();
}
