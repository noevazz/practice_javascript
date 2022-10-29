const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:
function sortSpeciesByTeeth(obj_array) {
  let obj_array_sorted = obj_array.sort(
    (item1, item2) => item1.numTeeth > item2.numTeeth
  );
  return obj_array_sorted;
}

console.log(sortSpeciesByTeeth(speciesArray));

console.log(speciesArray[3]);

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
