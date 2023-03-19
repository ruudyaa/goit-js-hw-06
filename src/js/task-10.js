function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("controls");
const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", () => {
  createBoxes(Number(inputEl.value));
});
btnDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let divArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement("div");
    divElement.style.height = 30 + 10 * i + "px";
    divElement.style.width = 30 + 10 * i + "px";
    divElement.style.marginBottom = "30px";
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement);
  }

  return boxesEl.append(...divArray);
}

function destroyBoxes() {
  inputEl.value = "";
  boxesEl.innerHTML = "";
}
