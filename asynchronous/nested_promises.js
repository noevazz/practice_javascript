const stock = {
  banana: {
    price: 12,
    stock: 30,
  },
  apple: {
    price: 60,
    stock: 4,
  },
};

function createNumber() {
  return Math.floor(Math.random() * 1000 + 1);
}

function checkAvailability(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const item in order) {
        if (!order[item] >= stock[item].stock) {
          reject("An item is out of stock");
        }
      }
      resolve(["Stock available!", order]);
    }, 2000);
  });
}

function createOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        let trackingNumber = createNumber();
        resolve(["Order completed", order, trackingNumber]);
      } else {
        reject("Oops!, the order was not created");
      }
    }, 1000);
  });
}

function shipOrder(order, trackingNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(`The order ${trackingNumber} has been shipped`);
      } else {
        reject(
          `You order ${trackingNumber} was not shipped, please contact support@gmail.com`
        );
      }
    }, 1000);
  });
}

checkAvailability({ banana: 3, apple: 4 })
  .then((resolvedValue) => {
    console.log(resolvedValue[0]);
    return createOrder(resolvedValue[1]);
  })
  .then((orderCompletedData) => {
    console.log(orderCompletedData[0], "Order number:", orderCompletedData[2]);
    return shipOrder(orderCompletedData[1], orderCompletedData[2]);
  })
  .then((shippedData) => {
    console.log(shippedData);
  })
  .catch((rejectedValue) => {
    console.log(rejectedValue);
  });
