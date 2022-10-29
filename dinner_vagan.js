function isTheDinnerVegan(obj_array) {
  // using for..of because it's an array
  // for..in is for objects
  for (const obj of obj_array) {
    if (obj.source !== "plant") {
      return false;
    }
  }
  return true;
}

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false
