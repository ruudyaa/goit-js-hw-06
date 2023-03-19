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

inputEl.addEventListener("input", toogleValue);
btnCreateEl.addEventListener("click", () => {
  createBoxes(Number(inputEl.value));
});
btnDestroyEl.addEventListener("click", destroyBoxes);

let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function createBoxes(amount) {
  let divArray = [];
  let sizeDefaultValue = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefaultValue += 10;
    const divElement = document.createElement("div");
    divElement.classList = "item";
    divElement.style.height = `${sizeDefaultValue}px`;
    divElement.style.width = `${sizeDefaultValue}px`;
    divElement.style.marginRight = "30px";
    divElement.style.marginBottom = "30px";
    divElement.style.backgroundColor = getRandomHexColor();
    divArray.push(divElement);
  }

  return boxesEl.append(...divArray);
}

function destroyBoxes() {
  inputEl.value = "";
  return (boxesEl.innerHTML = "");
}
