const fontControler = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontControler.addEventListener("input", onInputFontChange);

function onInputFontChange() {
  text.style.fontSize = fontControler.value + "px";
}
