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

function checkStock(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const item in order) {
        if (!order[item] >= stock[item].stock) {
          reject("An item is out of stock");
        }
      }
      resolve(["Stock available!", order]);
    }, 1000);
  });
}

async function checkAvailability(order) {
  let resolvedValue = await checkStock(order);
  console.log(resolvedValue);
}

checkAvailability({ banana: 2, apple: 2 });
