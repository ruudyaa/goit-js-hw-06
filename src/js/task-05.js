const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputFocus);

function onInputFocus(event) {
  if (refs.input.value === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = event.currentTarget.value;
  }
}
