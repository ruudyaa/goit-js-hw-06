const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRefs = document.querySelector("#ingredients");
const ingredientsList = [];

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  ingredientsList.push(liEl);
}

ingredientsRefs.append(...ingredientsList);

console.log(ingredientsRefs);

// -----map----- //

// const itemsRefs = ingredients.map((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add("item");
//   return item;
// });

// ingredientsRefs.append(...itemsRefs);
