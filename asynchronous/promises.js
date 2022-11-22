const P = new Promise((resolve, reject) => {
    console.log('Processing...');
  setTimeout(() => {
    let age = 12;
    console.log('age:', age);
    if (Number.parseFloat(age) >= 18) {
      resolve("Ok you can take a beer");
    } else {
      reject("NOPE, you are too young");
    }
  }, 3000);
});

const onResolved = (resolvedValue) => {
  console.log("Here is the result:", resolvedValue);
};
const onRejected = (rejectedValue) => {
    console.log("Here is the result:", rejectedValue);
  };

P.then(onResolved).catch(onRejected);
