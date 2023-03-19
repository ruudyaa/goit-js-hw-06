const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {};
    formData.email = email.value;
    formData.password = password.value;

    console.log(formData);
  }
  event.currentTarget.reset();
}
