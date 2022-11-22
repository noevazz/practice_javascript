const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();
orderPromise.then(resolvedValue=>{console.log(resolvedValue)});


setTimeout(() => {
  console.log("Boo!!");
}, 2000);
console.log("running...");

const onFulfilled = (resolvedValue)=>{console.log(resolvedValue);};
const onRejected = (rejectedValue)=>{console.log(rejectedValue);};

console.log('-------------------');
const P = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("oops!");
  }, 3000);
}).then(onFulfilled, onRejected);



